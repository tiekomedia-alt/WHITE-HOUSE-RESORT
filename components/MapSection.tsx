
import React from 'react';

const MapSection: React.FC = () => {
  return (
    <section className="h-[400px] md:h-[500px] w-full relative border-t-8 border-double border-whr-gold/30">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.618635836848!2d-75.6375539235352!3d39.72569687155969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7018318721c45%3A0x62952296e38b8c2e!2s2311%20Newport%20Gap%20Pike%2C%20Wilmington%2C%20DE%2019808!5e0!3m2!1sen!2sus!4v1709230000000!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{border:0, filter: 'grayscale(0.3) sepia(0.2) contrast(0.9)'}} 
        allowFullScreen={false} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="White House Resort Location"
        className="w-full h-full"
      ></iframe>
      
      {/* Floating Location Card */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-white/95 p-6 md:p-8 border-l-4 border-whr-gold shadow-2xl max-w-xs backdrop-blur-md">
         <h3 className="font-display font-bold text-whr-dark text-lg uppercase tracking-widest mb-2">Visit Us</h3>
         <div className="w-10 h-0.5 bg-whr-gold mb-4"></div>
         <p className="font-serif text-gray-700 leading-relaxed">
           2311 Newport Gap Pike<br/>
           Wilmington, DE 19808
         </p>
         <a 
           href="https://maps.google.com/?q=2311+Newport+Gap+Pike" 
           target="_blank" 
           rel="noopener noreferrer"
           className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-whr-gold hover:text-black transition-colors"
         >
           Get Directions &rarr;
         </a>
      </div>
    </section>
  );
};

export default MapSection;
