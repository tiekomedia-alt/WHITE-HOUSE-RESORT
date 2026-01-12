
import React, { useState, useEffect } from 'react';

// Ornate Corner SVG Component specifically for the frame
const OrnateCorner = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor">
    <path d="M10,10 Q50,10 50,50 T90,90" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M0,0 v40 q0,20 20,20 h20 v-5 h-20 q-15,0 -15,-15 v-40 z" />
    <path d="M5,5 h40 v5 h-40 v40 h-5 v-40 z" />
    <circle cx="15" cy="15" r="3" />
    <path d="M25,5 C40,5 50,15 50,30" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M5,25 C5,40 15,50 30,50" fill="none" stroke="currentColor" strokeWidth="3" />
  </svg>
);

const IMAGES = [
  { src: "https://res.cloudinary.com/dspngcwzj/image/upload/v1768151205/WHITE_HOUSE_RESORT_DELAWARE_1_axkpub.jpg" },
  { src: "https://res.cloudinary.com/dspngcwzj/image/upload/v1768151203/Gallery_gciafp.jpg" },
  { src: "https://res.cloudinary.com/dspngcwzj/image/upload/v1768151204/WHITE_HOUSE_RESORT_DELAWARE_vrnrdl.jpg" },
  { src: "https://res.cloudinary.com/dspngcwzj/image/upload/v1768151183/Gallery_2_f1epnl.jpg" },
  // 5th image - Adjusted position to prevent head cropping
  { src: "https://res.cloudinary.com/dspngcwzj/image/upload/v1768147030/IMG_2992_q5xj2g.jpg", position: "object-top" },
  { src: "https://res.cloudinary.com/dspngcwzj/image/upload/v1768147024/IMG_4134_fyqyap.jpg" },
  { src: "https://res.cloudinary.com/dspngcwzj/image/upload/v1768147021/IMG_3004_ukprju.jpg" },
  { src: "https://res.cloudinary.com/dspngcwzj/image/upload/v1768147022/IMG_2931_wnrubp.jpg" },
  { src: "https://res.cloudinary.com/dspngcwzj/image/upload/v1768147020/IMG_2988_jnmiz0.jpg" },
  { src: "https://res.cloudinary.com/dspngcwzj/image/upload/v1768147017/IMG_2925_fullch.jpg" },
  { src: "https://res.cloudinary.com/dspngcwzj/image/upload/v1768147014/IMG_2928_nj8bu8.jpg" },
  { src: "https://res.cloudinary.com/dspngcwzj/image/upload/v1768147011/IMG_2929_ehdldv.jpg" },
  { src: "https://res.cloudinary.com/dspngcwzj/image/upload/v1768147010/IMG_2907_nn3svi.jpg" },
  { src: "https://res.cloudinary.com/dspngcwzj/image/upload/v1768146035/3bcbfefc-eea7-4491-8d3e-ecc42c180569_dsddu7.jpg" },
  // 15th image - Adjusted position to prevent head cropping
  { src: "https://res.cloudinary.com/dspngcwzj/image/upload/v1768146035/3cf6e100-ae8b-4611-aa6e-3a224f3e1f6d_ndhshb.jpg", position: "object-top" },
  { src: "https://res.cloudinary.com/dspngcwzj/image/upload/v1768006867/Home_c2ce0v.jpg" }
];

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-swipe logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative bg-[#F0EAE0] overflow-hidden border-y border-whr-gold/30">
      {/* Victorian Wallpaper Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none" 
        style={{ 
          backgroundImage: "url('https://www.transparenttextures.com/patterns/floral-linen.png')",
          backgroundSize: '300px' 
        }}
      ></div>
      
      {/* Wall Shadow Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-5xl md:text-7xl font-pinyon text-whr-dark drop-shadow-sm mb-4">Captured Moments</h2>
           <p className="font-serif italic text-gray-600">Glimpses of Forever</p>
        </div>
        
        {/* The Frame */}
        <div className="mx-auto w-full max-w-4xl aspect-[4/3] md:aspect-[16/9] relative group">
           
           {/* Decorative Top Ornament */}
           <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-16 pointer-events-none z-30 opacity-90">
             <svg viewBox="0 0 100 50" fill="#C5A059">
               <path d="M50,0 C30,0 20,20 0,25 C20,30 30,50 50,50 C70,50 80,30 100,25 C80,20 70,0 50,0 Z M50,10 C60,10 65,25 50,40 C35,25 40,10 50,10 Z" />
             </svg>
           </div>

           {/* Outer Frame (Dark Gold) */}
           <div className="absolute -inset-2 bg-[#967945] rounded-sm shadow-2xl"></div>
           {/* Middle Frame (Light Gold) */}
           <div className="absolute -inset-1 bg-gradient-to-tr from-[#C5A059] to-[#E5C989] rounded-sm"></div>
           {/* Inner Frame Shadow/Bevel */}
           <div className="absolute inset-0 border-[12px] border-[#967945] border-t-[#BFA15F] border-l-[#BFA15F] border-r-[#7A6030] border-b-[#7A6030] shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] z-20 pointer-events-none"></div>
           
           {/* Corner Ornaments */}
           <OrnateCorner className="absolute -top-4 -left-4 w-16 h-16 text-[#E5C989] z-30 drop-shadow-md" />
           <OrnateCorner className="absolute -top-4 -right-4 w-16 h-16 text-[#E5C989] transform rotate-90 z-30 drop-shadow-md" />
           <OrnateCorner className="absolute -bottom-4 -left-4 w-16 h-16 text-[#E5C989] transform -rotate-90 z-30 drop-shadow-md" />
           <OrnateCorner className="absolute -bottom-4 -right-4 w-16 h-16 text-[#E5C989] transform rotate-180 z-30 drop-shadow-md" />

           {/* Carousel Window */}
           <div className="w-full h-full overflow-hidden bg-black relative">
              {/* Slider Track */}
              <div 
                className="flex w-full h-full transition-transform duration-[1500ms] cubic-bezier(0.4, 0, 0.2, 1)"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {IMAGES.map((img, index) => (
                  <div key={index} className="min-w-full w-full h-full relative flex-none">
                    <img 
                      src={img.src} 
                      alt={`Gallery moment ${index + 1}`} 
                      className={`w-full h-full object-cover ${img.position || 'object-center'}`}
                    />
                    {/* Subtle vignette */}
                    <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/30"></div>
                  </div>
                ))}
              </div>
           </div>

           {/* Navigation Dots (styled as vintage buttons) */}
           <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center gap-3 w-full max-w-[90vw] z-30 px-4">
              {IMAGES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rotate-45 border border-[#C5A059] transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#C5A059] scale-125' : 'bg-transparent hover:bg-[#E5C989]'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
           </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
