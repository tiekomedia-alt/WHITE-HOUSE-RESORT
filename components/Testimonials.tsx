
import React from 'react';

const reviews = [
  {
    id: 1,
    author: "Nikky Olasubomi",
    role: "Graduation Party",
    text: "I had my kids graduation party at WHR. It was such a beautiful place and it accommodated everyone that came for the party. The staff were exceptional. Yes I'll recommend this place for anyone's event.",
    stars: 5
  },
  {
    id: 2,
    author: "Patricia Smith",
    role: "Private Party Host",
    text: "My experience at this resort has been great! I found it to be really clean. The place is very spacious, organized, and the outdoor space is beautiful to walk around.",
    stars: 5
  },
  {
    id: 3,
    author: "Hon Zoobee R. Chukwurah",
    role: "Event Guest",
    text: "The outdoor experience is second to none and the uniqueness and classy nature is super great. I have attended several events in this resort and it was excellent.",
    stars: 5
  }
];

const StarRating = () => (
  <div className="flex gap-1 justify-center mb-6">
    {[1,2,3,4,5].map(i => (
      <svg key={i} className="w-4 h-4 text-whr-gold fill-current drop-shadow-sm" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    ))}
  </div>
);

const QuoteIcon = () => (
  <svg className="w-12 h-12 text-whr-gold/20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21L14.017 18C14.017 16.896 14.789 15.923 15.856 15.688C16.591 15.526 17.118 14.881 17.118 14.126C17.118 13.575 16.671 13.129 16.119 13.129H14.119C12.463 13.129 11.119 11.785 11.119 10.129V5.129C11.119 3.473 12.463 2.129 14.119 2.129H19.119C20.775 2.129 22.119 3.473 22.119 5.129V10.129C22.119 14.339 18.877 17.788 14.739 17.989L14.017 21ZM5.01699 21L5.01699 18C5.01699 16.896 5.78899 15.923 6.85599 15.688C7.59099 15.526 8.11799 14.881 8.11799 14.126C8.11799 13.575 7.67099 13.129 7.11899 13.129H5.11899C3.46299 13.129 2.11899 11.785 2.11899 10.129V5.129C2.11899 3.473 3.46299 2.129 5.11899 2.129H10.119C11.775 2.129 13.119 3.473 13.119 5.129V10.129C13.119 14.339 9.87699 17.788 5.73899 17.989L5.01699 21Z" />
  </svg>
)

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
       {/* Decorative Background Elements */}
       <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-whr-gold/20 rounded-tl-[50px]"></div>
       <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-whr-gold/20 rounded-br-[50px]"></div>
       
       <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="font-pinyon text-4xl text-whr-gold">Kind Words</span>
            <h2 className="text-3xl md:text-4xl font-serif text-whr-dark mt-2">Love Letters from Our Guests</h2>
            <div className="w-24 h-1 bg-whr-gold mx-auto mt-6 opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {reviews.map((review) => (
              <div key={review.id} className="relative group">
                {/* Paper Card Effect */}
                <div className="absolute inset-0 bg-gray-100 transform rotate-1 group-hover:rotate-2 transition-transform duration-300 shadow-lg"></div>
                <div className="relative bg-whr-cream p-8 border border-gray-200 h-full flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1">
                   {/* Decorative Inner Border */}
                   <div className="absolute inset-2 border border-whr-gold/20 pointer-events-none"></div>
                   
                   <QuoteIcon />
                   
                   <p className="font-serif italic text-gray-600 mb-6 leading-relaxed relative z-10">
                     "{review.text}"
                   </p>
                   
                   <div className="mt-auto relative z-10">
                     <StarRating />
                     <h4 className="font-display font-bold text-sm tracking-widest text-whr-dark uppercase">{review.author}</h4>
                     <span className="text-xs text-whr-gold font-serif italic mt-1 block">{review.role}</span>
                   </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
             <a href="https://share.google/m6UUtbSA0JNE2IBoS" target="_blank" rel="noopener noreferrer" className="inline-block border-b border-whr-gold text-whr-gold font-serif italic hover:text-whr-dark hover:border-whr-dark transition-colors pb-1">
               Read more reviews on Google
             </a>
          </div>
       </div>
    </section>
  )
}

export default Testimonials;
