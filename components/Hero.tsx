
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[80vh] md:h-[70vh] lg:h-screen overflow-hidden">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat transform transition-transform duration-10000 hover:scale-105 brightness-110 contrast-110"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dspngcwzj/image/upload/v1768006867/Home_c2ce0v.jpg")',
        }}
        aria-label="White House Resort Exterior"
      ></div>

      {/* Overlay - Slightly darker to support the white text */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 pt-10 md:pt-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-white font-serif tracking-tight drop-shadow-2xl mb-8 md:mb-10 leading-tight">
          Where Dreams <br className="md:hidden lg:block" />
          {/* Changed to Serif Italic (Playfair) and White color for better "Pop" */}
          <span className="italic font-serif text-white text-5xl sm:text-6xl md:text-7xl lg:text-9xl block md:inline lg:block mt-3 md:mt-2 lg:mt-4 text-shadow-strong font-bold">
            Come True
          </span>
        </h1>
        
        <a 
          href="mailto:whitehouseresortinc@gmail.com"
          className="group relative overflow-hidden rounded-sm border-2 border-white/80 px-8 py-3 md:px-10 md:py-4 transition-colors hover:border-whr-gold mb-8"
        >
          {/* Liquid Background Layer */}
          <div className="absolute inset-0 translate-y-full bg-whr-gold transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
          
          {/* Button Content */}
          <span className="relative z-10 font-bold uppercase tracking-[0.2em] text-white text-sm md:text-lg lg:text-xl">
            Schedule a Tour
          </span>
        </a>

        {/* Google 5-Star Rating Badge */}
        <a 
          href="https://share.google/m6UUtbSA0JNE2IBoS" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-2 group animate-fade-in-up"
        >
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-6 h-6 text-yellow-400 drop-shadow-md fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          <div className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20 transition-colors group-hover:bg-white/20">
             <span className="text-white font-bold text-sm md:text-base tracking-wide flex items-center gap-2">
               <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
               5.0 Rating on Google
             </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
