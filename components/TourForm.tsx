import React, { useState, useCallback } from 'react';
import { submitTourRequest } from '../services/geminiService';
import { supabase } from '../services/supabaseClient';
import emailjs from '@emailjs/browser';
import { LoadingState, TourRequest, TourResponse } from '../types';

const TourForm: React.FC = () => {
  const [formData, setFormData] = useState<TourRequest>({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    partySize: 1,
    specialRequests: ''
  });

  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [response, setResponse] = useState<TourResponse | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'partySize' ? (value === '' ? '' : parseInt(value)) : value
    }));
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(LoadingState.LOADING);
    setErrorMessage("");
    
    // 1. Prepare Data
    const safeFormData = {
      ...formData,
      partySize: Number(formData.partySize) || 1
    };
    
    const dbPayload = { 
      full_name: safeFormData.fullName,
      email: safeFormData.email,
      phone: safeFormData.phone,
      date: safeFormData.date,
      party_size: safeFormData.partySize,
      special_requests: safeFormData.specialRequests
    };

    console.log("Starting submission process...");

    try {
      let dbSuccess = false;
      let emailSuccess = false;
      let dbErrorDetail = null;
      let realDbId: string | null = null;

      // --- Step 2: Supabase Submission (Primary) ---
      try {
        // We select the ID to confirm the row was actually created in the DB
        const { data, error: dbError } = await supabase
          .from('tour_requests')
          .insert([dbPayload])
          .select('id');

        if (dbError) {
          dbErrorDetail = dbError;
          console.warn("Supabase Insert Failed (will attempt fallback):", dbError);
        } else {
          dbSuccess = true;
          console.log("Supabase Insert Successful", data);
          if (data && data.length > 0) {
            realDbId = `WHR-DB-${data[0].id}`; // Use real DB ID
          }
        }
      } catch (err) {
        console.warn("Supabase Exception:", err);
      }

      // --- Step 3: EmailJS Submission (Secondary/Fallback) ---
      try {
        // @ts-ignore
        const env: any = (typeof import.meta !== 'undefined' && import.meta.env) ? import.meta.env : {};
        const serviceId = env.VITE_EMAILJS_SERVICE_ID;
        const templateId = env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = env.VITE_EMAILJS_PUBLIC_KEY;

        if (serviceId && templateId && publicKey) {
          await emailjs.send(
            serviceId, 
            templateId, 
            {
              from_name: safeFormData.fullName,
              from_email: safeFormData.email,
              phone: safeFormData.phone,
              date: safeFormData.date,
              party_size: safeFormData.partySize,
              special_requests: safeFormData.specialRequests,
              confirmation_id: realDbId || "Pending"
            }, 
            publicKey
          );
          emailSuccess = true;
          console.log("EmailJS Sent Successfully");
        } else {
          console.log("EmailJS not configured.");
        }
      } catch (err) {
        console.warn("EmailJS Failed:", err);
      }

      // --- Step 4: Critical Failure Check ---
      // If BOTH failed, we cannot proceed.
      if (!dbSuccess && !emailSuccess) {
         let msg = "Unable to save your request. Please call us directly.";
         if (dbErrorDetail) {
             msg += ` (System: ${dbErrorDetail.message})`;
         }
         throw new Error(msg);
      }

      // --- Step 5: AI Concierge Response (UX Layer) ---
      // If we reached here, at least one storage method worked.
      
      // Artificial delay for smooth UX
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const result = await submitTourRequest(safeFormData as TourRequest);
      
      if (result) {
        // If we have a real DB ID, override the AI's mock ID
        if (realDbId) {
          result.confirmationId = realDbId;
        }
        setResponse(result);
        setStatus(LoadingState.SUCCESS);
      } else {
        // Fallback response if AI fails but data was saved
        setResponse({
            confirmationId: realDbId || "WHR-" + Date.now().toString().slice(-4),
            conciergeMessage: "Thank you! We have securely received your request and will contact you shortly.",
            estimatedDuration: "60 mins"
        });
        setStatus(LoadingState.SUCCESS);
      }

    } catch (error: any) {
      console.error("Critical Submission Error:", error);
      setErrorMessage(error.message || "An unexpected error occurred. Please call (302) 419-8890.");
      setStatus(LoadingState.ERROR);
    }
  }, [formData]);

  const resetForm = () => {
    setFormData({ fullName: '', email: '', phone: '', date: '', partySize: 1, specialRequests: '' });
    setResponse(null);
    setStatus(LoadingState.IDLE);
    setErrorMessage("");
  };

  return (
    <div className="bg-white p-6 md:p-12 shadow-2xl border-t-4 border-whr-gold max-w-4xl mx-auto rounded-sm">
      <div className="text-center mb-8 md:mb-10">
        <h3 className="text-2xl md:text-3xl font-serif text-whr-dark mb-2">Schedule Your Private Tour</h3>
        <p className="text-gray-500 italic font-serif text-sm md:text-base">Come see where your memories will begin.</p>
      </div>

      {status === LoadingState.SUCCESS && response ? (
        <div className="text-center bg-whr-cream p-6 md:p-8 border border-whr-gold/30 animate-fade-in-up">
          <div className="text-whr-gold text-5xl mb-4">✨</div>
          <h3 className="text-xl md:text-2xl font-serif text-whr-dark mb-4">Request Confirmed</h3>
          <p className="text-gray-600 mb-6 font-serif italic text-base md:text-lg">"{response.conciergeMessage}"</p>
          <div className="inline-block bg-white px-6 py-2 rounded-full text-xs md:text-sm font-bold text-gray-500 border border-gray-200">
            Confirmation ID: {response.confirmationId}
          </div>
          <p className="mt-4 text-xs text-gray-400">We have received your details and added them to our guest list.</p>
          <button onClick={resetForm} className="block w-full mt-8 text-whr-gold hover:underline uppercase text-sm tracking-widest">
            Book Another Tour
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          {status === LoadingState.ERROR && (
             <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-4 rounded relative text-sm">
                <p className="font-bold text-lg mb-1">Submission Issue</p>
                <p className="mb-2">{errorMessage}</p>
                <div className="mt-2 text-xs text-red-600/80">
                    If this persists, please call us directly at <strong>(302) 419-8890</strong> or email <strong>whitehouseresortinc@gmail.com</strong>.
                </div>
             </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="group">
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-whr-gold transition-colors">Full Name</label>
              <input type="text" name="fullName" required value={formData.fullName} onChange={handleInputChange} 
                className="w-full border-b-2 border-gray-200 focus:border-whr-gold outline-none py-3 bg-transparent transition-colors text-base" placeholder="Jane Doe" />
            </div>
            <div className="group">
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-whr-gold transition-colors">Email</label>
              <input type="email" name="email" required value={formData.email} onChange={handleInputChange} 
                className="w-full border-b-2 border-gray-200 focus:border-whr-gold outline-none py-3 bg-transparent transition-colors text-base" placeholder="jane@example.com" />
            </div>
            <div className="group">
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-whr-gold transition-colors">Phone Number</label>
              <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} 
                className="w-full border-b-2 border-gray-200 focus:border-whr-gold outline-none py-3 bg-transparent transition-colors text-base" placeholder="(302) 555-0123" />
            </div>
            <div className="group">
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-whr-gold transition-colors">Date</label>
              <input type="date" name="date" required value={formData.date} onChange={handleInputChange} 
                className="w-full border-b-2 border-gray-200 focus:border-whr-gold outline-none py-3 bg-transparent transition-colors text-base" />
            </div>
            <div className="group">
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-whr-gold transition-colors">Estimated Guests</label>
              <input 
                type="number" 
                name="partySize" 
                min="1"
                required 
                value={formData.partySize} 
                onChange={handleInputChange} 
                className="w-full border-b-2 border-gray-200 focus:border-whr-gold outline-none py-3 bg-transparent transition-colors text-base" 
                placeholder="Number of guests"
              />
            </div>
          </div>
          <div className="group">
            <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-whr-gold transition-colors">Notes</label>
            <textarea name="specialRequests" rows={3} value={formData.specialRequests} onChange={handleInputChange} 
              className="w-full border-b-2 border-gray-200 focus:border-whr-gold outline-none py-3 bg-transparent transition-colors resize-none text-base" placeholder="Wedding, Birthday, etc..." />
          </div>
          <button type="submit" disabled={status === LoadingState.LOADING} 
            className="w-full bg-black text-white py-4 uppercase tracking-[0.2em] hover:bg-whr-gold transition-colors duration-300 active:bg-whr-gray disabled:opacity-50 disabled:cursor-not-allowed">
            {status === LoadingState.LOADING ? 'Processing Request...' : 'Submit Request'}
          </button>
        </form>
      )}
    </div>
  );
};

export default TourForm;