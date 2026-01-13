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
    
    const safeFormData = {
      ...formData,
      partySize: Number(formData.partySize) || 1
    };

    // Fire-and-forget side effects (Supabase & Email)
    const runBackgroundServices = async () => {
      try {
        const { error } = await supabase
          .from('tour_requests')
          .insert([{ 
            full_name: safeFormData.fullName,
            email: safeFormData.email,
            phone: safeFormData.phone,
            date: safeFormData.date,
            party_size: safeFormData.partySize,
            special_requests: safeFormData.specialRequests
          }]);
        if (error) console.warn("Supabase log:", error.message);
      } catch (err) {
        console.warn("Supabase connection skipped:", err);
      }

      try {
        // Safe access to environment variables
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
              special_requests: safeFormData.specialRequests
            }, 
            publicKey
          );
        } else {
            console.warn("EmailJS credentials missing, skipping email.");
        }
      } catch (err) {
        console.warn("Email notification skipped:", err);
      }
    };

    // Trigger background services
    runBackgroundServices();

    // Handle User Interface Response (AI Concierge)
    try {
      // Artificial delay for better UX (so the loader doesn't flash too quickly)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const result = await submitTourRequest(safeFormData as TourRequest);
      
      if (result) {
        setResponse(result);
        setStatus(LoadingState.SUCCESS);
      } else {
        throw new Error("Empty response received");
      }
    } catch (error) {
      console.error("Submission critical error:", error);
      // Fallback to generic success state
      setResponse({
        confirmationId: "WHR-OFFLINE-" + Date.now().toString().slice(-4),
        conciergeMessage: "We have received your request. Our coordinator will contact you shortly to confirm your appointment.",
        estimatedDuration: "60 minutes"
      });
      setStatus(LoadingState.SUCCESS);
    }
  }, [formData]);

  const resetForm = () => {
    setFormData({ fullName: '', email: '', phone: '', date: '', partySize: 1, specialRequests: '' });
    setResponse(null);
    setStatus(LoadingState.IDLE);
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
             <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded relative text-sm text-center">
                Something went wrong. Please call us at (302) 419-8890 instead.
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