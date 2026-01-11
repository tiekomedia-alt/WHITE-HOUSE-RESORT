
import React from 'react';
import Hero from './components/Hero';
import TourForm from './components/TourForm';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import MapSection from './components/MapSection';

// --- Icons ---
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.315 2zm-1.016 1.932c-2.219 0-2.484.009-3.328.048-.902.04-1.396.182-1.723.309a3.09 3.09 0 00-1.129.734 3.09 3.09 0 00-.734 1.129c-.127.327-.269.821-.309 1.723-.039.844-.048 1.109-.048 3.328 0 2.219.009 2.484.048 3.328.04 .902.182 1.396.309 1.723a3.09 3.09 0 00.734 1.129 3.09 3.09 0 001.129.734c.327.127.821.269 1.723.309.844.039 1.109.048 3.328.048 2.219 0 2.484-.009 3.328-.048.902-.04 1.396-.182 1.723-.309a3.09 3.09 0 001.129-.734 3.09 3.09 0 00.734-1.129c.127-.327.269-.821.309-1.723.039-.844.048-1.109.048-3.328 0-2.219-.009-2.484-.048-3.328-.04-.902-.182-1.396-.309-1.723a3.09 3.09 0 00-.734-1.129 3.09 3.09 0 00-1.129-.734c-.327-.127-.821-.269-1.723-.309-.844-.039-1.109-.048-3.328-.048zM12.315 6.87a5.446 5.446 0 110 10.892 5.446 5.446 0 010-10.892zm0 1.932a3.514 3.514 0 100 7.028 3.514 3.514 0 000-7.028zM18.667 6.353a1.286 1.286 0 11-2.572 0 1.286 1.286 0 012.572 0z" clipRule="evenodd" />
  </svg>
);

// --- Ornamental Components ---

const GoldDivider = () => (
  <div className="flex justify-center items-center py-8 opacity-80">
    <svg width="200" height="30" viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 15C130 15 140 5 160 5C180 5 190 15 200 15M100 15C70 15 60 5 40 5C20 5 10 15 0 15" stroke="#C5A059" strokeWidth="1" />
      <circle cx="100" cy="15" r="3" fill="#C5A059" />
      <circle cx="100" cy="25" r="2" fill="#C5A059" />
      <circle cx="100" cy="5" r="2" fill="#C5A059" />
    </svg>
  </div>
);

const FancyCorner = ({ className }: { className?: string }) => (
  <svg className={`absolute w-12 h-12 text-whr-gold opacity-60 ${className}`} viewBox="0 0 50 50" fill="currentColor">
     <path d="M0,0 v15 q0,10 10,10 h15 v-2 h-15 q-8,0 -8,-8 v-15 z" />
     <path d="M2,2 h10 v2 h-10 v10 h-2 v-10 z" /> 
  </svg>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans bg-whr-cream bg-paper-texture overflow-x-hidden relative">
      
      {/* Top Bar */}
      <div className="bg-black text-white px-3 md:px-6 py-2 flex flex-row justify-between items-center z-50 relative shadow-md">
        <div className="flex-shrink-0 z-10">
          <img 
            src="https://res.cloudinary.com/dspngcwzj/image/upload/v1768092652/The_White_House_Inc.__Logo_zqy54j.png" 
            alt="White House Resort Inc." 
            className="h-8 md:h-12 w-auto object-contain"
          />
        </div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 hidden sm:block">
          <img 
            src="https://res.cloudinary.com/dspngcwzj/image/upload/v1768145391/WHITE_HOUSE_RESORT_2_bhym7f.png" 
            alt="White House Resort Emblem" 
            className="h-10 md:h-16 w-auto object-contain"
          />
        </div>
        <div className="flex items-center gap-2 md:gap-4 z-10">
          <div className="hidden md:flex items-center gap-3">
             <a href="https://web.facebook.com/WhiteHouseResortInc" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-whr-gold transition-colors" aria-label="Facebook">
                <FacebookIcon className="h-5 w-5" />
             </a>
             <a href="https://web.facebook.com/WhiteHouseResortInc" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-whr-gold transition-colors" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
             </a>
             <div className="h-4 w-px bg-gray-600 mx-1"></div>
             <a href="mailto:whitehouseresortinc@gmail.com" className="text-[10px] md:text-xs tracking-widest text-gray-300 hover:text-whr-gold transition-colors">Email Us</a>
          </div>
          <a 
            href="tel:302-419-8890" 
            className="group relative overflow-hidden rounded-sm border border-white/80 px-3 py-1.5 md:px-5 md:py-2 transition-colors hover:border-whr-gold"
          >
            <div className="absolute inset-0 translate-y-full bg-whr-gold transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
            <span className="relative z-10 flex items-center gap-2 font-bold uppercase tracking-wider text-[9px] md:text-[10px] text-white">
              <span>Call Us</span>
            </span>
          </a>
        </div>
      </div>

      <Hero />

      {/* Decorative Ornament Separator */}
      <GoldDivider />

      {/* Intro Section - The "Parlor" */}
      <section className="py-12 md:py-16 px-4 md:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-0 left-0 w-32 h-32 opacity-10 pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
             {/* Abstract lace corner hint */}
             <div className="w-full h-full bg-vintage-lace rounded-full opacity-20"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-1 flex justify-center">
             {/* Cameo Style Image - Added Motion on Hover */}
            <div className="relative cursor-pointer group">
              <img 
                src="https://res.cloudinary.com/dspngcwzj/image/upload/v1768148688/About_Us_hz9isv.jpg" 
                alt="White House Resort Entrance" 
                className="w-[300px] h-[400px] md:w-[350px] md:h-[480px] object-cover shadow-2xl cameo-frame transition-transform duration-700 ease-in-out group-hover:scale-105 group-active:scale-105"
              />
            </div>
          </div>
          <div className="order-2 text-center md:text-left relative">
            <h2 className="text-4xl md:text-5xl font-pinyon text-whr-gold mb-6">A Timeless Setting</h2>
            <p className="text-lg md:text-xl text-gray-600 font-serif leading-relaxed italic mb-6 drop-cap">
              Whether you're planning a romantic wedding, a milestone birthday, or an intimate event, we offer a unique space that turns ordinary moments into timeless memories.
            </p>
            <div className="border-t border-whr-gold/30 w-1/2 mx-auto md:mx-0 my-6"></div>
            <h3 className="text-2xl md:text-3xl font-serif text-whr-dark leading-tight">
              Nestled in the heart of Delaware, our <span className="text-whr-gold">Victorian-style</span> resort house offers a picture-perfect setting.
            </h3>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Opulence Section - "The Dining Room" */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        {/* Rose Watermark Background */}
        <div className="absolute right-0 top-1/4 w-[400px] h-[400px] opacity-5 pointer-events-none transform translate-x-1/3">
           <img src="https://images.unsplash.com/photo-1595166687443-41a457788414?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-contain mix-blend-multiply filter sepia contrast-50" alt="Rose Watermark" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                <span className="h-[1px] w-12 bg-whr-gold"></span>
                <span className="text-whr-gold uppercase tracking-[0.3em] text-xs font-bold">Unforgettable</span>
                <span className="h-[1px] w-12 bg-whr-gold"></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Opulence & Glamour <br/><span className="font-pinyon text-5xl md:text-6xl text-whr-gold">to Take Your Breath Away</span></h2>
            
            <p className="text-gray-600 leading-relaxed font-serif">
              At White House Resort, Inc., we believe that your wedding is the most important day of your life. From the moment you contact us, our team works to create a space that reflects your unique vision.
            </p>
            <p className="text-gray-600 leading-relaxed font-serif">
               We'll help you coordinate every last detail down to the very last flower petal.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
             {/* Motion: Rotate reset and scale up */}
             <div className="vintage-border shadow-xl transform rotate-2 transition-all duration-700 hover:rotate-0 hover:scale-105 active:scale-105 active:rotate-0 cursor-pointer">
               <img 
                src="https://res.cloudinary.com/dspngcwzj/image/upload/v1768147039/IMG_7756_ycdu0w.jpg" 
                alt="Elegant Table Setting" 
                className="w-full h-[350px] md:h-[450px] object-cover"
              />
             </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Packages Section - "The Menu Card" */}
      <section className="py-20 px-4 md:px-8 bg-whr-cream bg-paper-texture relative">
        {/* Real Lace Side Panels */}
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-16 bg-vintage-lace opacity-30"></div>
        <div className="absolute top-0 bottom-0 right-0 w-8 md:w-16 bg-vintage-lace opacity-30"></div>

        <div className="text-center mb-16 relative">
          <span className="font-pinyon text-4xl text-whr-gold block mb-2">Our Offerings</span>
          <h2 className="text-3xl md:text-5xl font-display text-whr-dark tracking-widest">Selected Packages</h2>
          <div className="flex justify-center mt-4">
             <svg width="40" height="10" viewBox="0 0 40 10" fill="none"><path d="M0 5h40" stroke="#C5A059" strokeWidth="2"/></svg>
          </div>
        </div>
        
        {/* Menu Card Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-start">
          
          {/* Package One - Menu Card Style */}
          <div className="bg-white p-1 shadow-lg relative h-full transition-transform duration-500 hover:-translate-y-2">
             <div className="border border-whr-gold p-1 h-full">
                <div className="border border-whr-gold/30 p-6 md:p-8 h-full flex flex-col items-center text-center relative">
                   <FancyCorner className="top-1 left-1" />
                   <FancyCorner className="top-1 right-1 transform rotate-90" />
                   
                   <h3 className="text-xl font-display font-bold uppercase tracking-widest mt-4 mb-2">Package One</h3>
                   <div className="text-whr-gold text-2xl font-pinyon mb-4">Intimate Gathering</div>
                   <div className="text-xs tracking-widest uppercase text-gray-400 mb-6">60 Guests</div>
                   
                   <div className="text-4xl font-serif mb-6 border-b border-whr-gold/30 pb-4 w-full">$5,800</div>
                   
                   <ul className="text-gray-600 space-y-3 font-serif italic mb-8 flex-grow">
                      <li>• Elegant Chairs</li>
                      <li>• Fine Linens</li>
                      <li>• Banquet Tables</li>
                      <li>• Bridal Gift</li>
                   </ul>
                   
                   <FancyCorner className="bottom-1 left-1 transform -rotate-90" />
                   <FancyCorner className="bottom-1 right-1 transform rotate-180" />
                </div>
             </div>
          </div>

          {/* Package Two - Menu Card Style (Featured) */}
          <div className="bg-white p-1 shadow-2xl relative h-full transform lg:-translate-y-4 z-10 transition-transform duration-500 hover:lg:-translate-y-6 hover:-translate-y-2">
             <div className="border-2 border-whr-gold p-1 h-full">
                <div className="border border-whr-gold/50 p-6 md:p-8 h-full flex flex-col items-center text-center relative bg-whr-cream">
                   <FancyCorner className="top-1 left-1" />
                   <FancyCorner className="top-1 right-1 transform rotate-90" />
                   
                   <div className="absolute -top-3 bg-whr-gold text-white px-4 py-1 text-[10px] tracking-widest uppercase">Most Popular</div>

                   <h3 className="text-xl font-display font-bold uppercase tracking-widest mt-4 mb-2">Package Two</h3>
                   <div className="text-whr-gold text-2xl font-pinyon mb-4">Grand Celebration</div>
                   <div className="text-xs tracking-widest uppercase text-gray-400 mb-6">120 Guests</div>
                   
                   <div className="text-4xl font-serif mb-6 border-b border-whr-gold/30 pb-4 w-full">$11,600</div>
                   
                   <ul className="text-gray-600 space-y-3 font-serif italic mb-8 flex-grow">
                      <li>• Elegant Chairs</li>
                      <li>• Fine Linens</li>
                      <li>• Banquet Tables</li>
                      <li>• Bridal Gift</li>
                   </ul>

                   <FancyCorner className="bottom-1 left-1 transform -rotate-90" />
                   <FancyCorner className="bottom-1 right-1 transform rotate-180" />
                </div>
             </div>
          </div>

          {/* Additional Cost */}
          <div className="bg-white p-1 shadow-lg relative h-full transition-transform duration-500 hover:-translate-y-2">
             <div className="border border-whr-gold p-1 h-full">
                <div className="border border-whr-gold/30 p-6 md:p-8 h-full flex flex-col items-center text-center relative">
                   <FancyCorner className="top-1 left-1" />
                   <FancyCorner className="top-1 right-1 transform rotate-90" />
                   
                   <h3 className="text-xl font-display font-bold uppercase tracking-widest mt-4 mb-6">Accompaniments</h3>
                   
                   <ul className="text-gray-600 space-y-4 text-left font-serif text-sm w-full px-4">
                      <li className="flex justify-between border-b border-dotted border-gray-300 pb-1"><span>Bartenders</span> <span>$250+</span></li>
                      <li className="flex justify-between border-b border-dotted border-gray-300 pb-1"><span>Servers</span> <span>$250+</span></li>
                      <li className="flex justify-between border-b border-dotted border-gray-300 pb-1"><span>Crown Chair</span> <span>$300</span></li>
                      <li className="flex justify-between border-b border-dotted border-gray-300 pb-1"><span>Catering</span> <span>$200+</span></li>
                   </ul>
                   
                   <div className="mt-8 text-xs italic text-whr-gold">
                      A 50% Non-refundable Deposit is Due at Booking
                   </div>

                   <FancyCorner className="bottom-1 left-1 transform -rotate-90" />
                   <FancyCorner className="bottom-1 right-1 transform rotate-180" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div className="order-2 md:order-1">
             <h2 className="text-3xl md:text-4xl font-serif mb-6 text-center md:text-left">Amenities & Inclusions</h2>
             <ul className="space-y-3 text-gray-700 font-serif italic text-lg">
               <li className="flex items-center gap-3"><span className="text-whr-gold">❧</span> Up to 100 indoor/200 outdoor guests</li>
               <li className="flex items-center gap-3"><span className="text-whr-gold">❧</span> Beautiful ceremony location</li>
               <li className="flex items-center gap-3"><span className="text-whr-gold">❧</span> Use of our 3-Story Suite</li>
               <li className="flex items-center gap-3"><span className="text-whr-gold">❧</span> Four indoor, homestyle bathrooms</li>
               <li className="flex items-center gap-3"><span className="text-whr-gold">❧</span> Three acres of landscaped scenery</li>
               <li className="flex items-center gap-3"><span className="text-whr-gold">❧</span> Manager onsite during your event</li>
             </ul>
           </div>
           <div className="order-1 md:order-2 flex justify-center">
              {/* Motion: Rotate reset and scale */}
              <div className="p-2 bg-white shadow-xl rotate-1 transition-all duration-700 hover:rotate-0 hover:scale-105 active:rotate-0 active:scale-105 cursor-pointer max-w-md">
                  <img 
                    src="https://res.cloudinary.com/dspngcwzj/image/upload/v1768147039/IMG_7756_ycdu0w.jpg" 
                    alt="Elegant Amenities" 
                    className="w-full h-auto object-cover border border-gray-100"
                  />
              </div>
           </div>
        </div>
      </section>

      {/* Gallery Section - "The Pictures on the Wall" */}
      <Gallery />

      {/* Testimonials - "Love Letters" */}
      <Testimonials />

      {/* Schedule Tour Form */}
      <section id="schedule-tour" className="py-16 md:py-24 bg-gray-100 px-4 border-t-4 border-double border-whr-gold">
        <TourForm />
      </section>

      {/* Google Maps Location */}
      <MapSection />

      {/* Contact Info */}
      <footer className="bg-whr-cream text-center py-12 md:py-20 px-4 md:px-6 border-t border-gray-200 relative">
         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-whr-cream px-4">
            <img 
            src="https://res.cloudinary.com/dspngcwzj/image/upload/v1768145391/WHITE_HOUSE_RESORT_2_bhym7f.png" 
            alt="Emblem" 
            className="h-16 w-auto opacity-50 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
          />
         </div>
         <h2 className="text-3xl md:text-4xl font-pinyon mb-4 text-whr-dark">Contact Us</h2>
         <p className="text-lg md:text-xl mb-8 font-serif italic text-gray-600">Let us begin planning your forever.</p>
         
         <div className="flex justify-center gap-6 mb-12">
            <a href="https://web.facebook.com/WhiteHouseResortInc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-whr-gold transition-colors transform hover:scale-110">
               <FacebookIcon className="h-8 w-8" />
            </a>
            <a href="https://web.facebook.com/WhiteHouseResortInc" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-whr-gold transition-colors transform hover:scale-110">
               <InstagramIcon className="h-8 w-8" />
            </a>
         </div>

         <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-whr-gold/30 p-8 hover:border-whr-gold transition-colors hover:bg-white/50">
               <h3 className="text-sm font-bold mb-4 uppercase tracking-[0.2em]">Location</h3>
               <p className="font-serif text-gray-600 mb-2">2311 Newport Gap Pike</p>
               <p className="font-serif text-gray-600">Wilmington, Delaware</p>
            </div>
             <div className="border border-whr-gold/30 p-8 hover:border-whr-gold transition-colors hover:bg-white/50">
               <h3 className="text-sm font-bold mb-4 uppercase tracking-[0.2em]">Inquiries</h3>
               <p className="font-serif text-gray-600 mb-2">302-419-8890</p>
               <p className="font-serif text-gray-600 text-sm">whitehouseresortinc@gmail.com</p>
            </div>
             <div className="border border-whr-gold/30 p-8 hover:border-whr-gold transition-colors hover:bg-white/50">
               <h3 className="text-sm font-bold mb-4 uppercase tracking-[0.2em]">Hours</h3>
               <p className="font-serif text-gray-600">Monday - Sunday</p>
               <p className="font-serif text-gray-600">9:00 am - 5:00 pm</p>
            </div>
         </div>
         <div className="mt-16 space-y-4">
            <div>
               <a href="https://maps.google.com/?q=2311+Newport+Gap+Pike" target="_blank" rel="noopener noreferrer" className="font-display text-xs tracking-[0.3em] hover:text-whr-gold transition-colors uppercase border-b border-black hover:border-whr-gold pb-1">Get Directions</a>
            </div>
            <div>
               <a href="https://share.google/m6UUtbSA0JNE2IBoS" target="_blank" rel="noopener noreferrer" className="font-serif italic text-sm text-whr-gold hover:text-whr-dark transition-colors">
                  View our 5-Star Rating on Google
               </a>
            </div>
         </div>
      </footer>
    </div>
  );
};

export default App;
