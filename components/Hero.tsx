
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full h-[80vh] md:h-[70vh] lg:h-screen overflow-hidden">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat transform transition-transform duration-[10000ms] hover:scale-105 brightness-110 contrast-110"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/dspngcwzj/image/upload/v1768006867/Home_c2ce0v.jpg")',
        }}
        aria-label="White House Resort Exterior"
      ></div>

      {/* Overlay - Gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 pt-10 md:pt-16">
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h1 className="flex flex-col items-center justify-center gap-2">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-display tracking-[0.25em] uppercase drop-shadow-2xl" 
              style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 4px 40px rgba(0,0,0,0.6)' }}>
              Where Dreams
            </span>
            <span className="font-pinyon text-whr-goldLight text-7xl sm:text-8xl md:text-9xl lg:text-[8rem] leading-none filter brightness-125"
              style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8), 0 0 60px rgba(197,160,89,0.4)' }}>
              Come True
            </span>
          </h1>
        </div>
        
        <div className="mt-8 md:mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSc6r9J6QovYDwiwT-VP0bA3CXLdcPUg_1fV5pI-yIAQxRvfpQ/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm border-2 border-whr-gold bg-black/60 px-8 py-3 md:px-12 md:py-4 transition-all duration-300 hover:bg-black/80 hover:scale-105 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-md"
          >
            {/* Hover Effect */}
            <div className="absolute inset-0 translate-y-full bg-whr-gold transition-transform duration-500 ease-out group-hover:translate-y-0"></div>
            
            {/* Button Content */}
            <span className="relative z-10 font-display font-bold uppercase tracking-[0.2em] text-white text-xs md:text-sm lg:text-base group-hover:text-white transition-colors text-shadow">
              Schedule a Tour
            </span>
          </a>
        </div>

        {/* Google 5-Star Rating Badge */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
          <a 
            href="https://share.google/m6UUtbSA0JNE2IBoS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group transition-transform hover:scale-105 duration-300"
          >
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 drop-shadow-md fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <div className="bg-black/30 backdrop-blur-md px-5 py-2 rounded-full border border-white/10 transition-colors group-hover:bg-black/50 group-hover:border-whr-gold/50">
               <span className="text-white/90 font-serif text-sm md:text-base tracking-wide flex items-center gap-2">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="G" className="w-4 h-4" />
                 5.0 Rating on Google
               </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
