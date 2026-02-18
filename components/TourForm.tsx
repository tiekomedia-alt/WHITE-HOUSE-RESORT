import React from 'react';

const TourForm: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8 md:mb-10">
        <h3 className="text-2xl md:text-3xl font-serif text-whr-dark mb-2">Schedule Your Private Tour</h3>
        <p className="text-gray-500 italic font-serif text-sm md:text-base">Come see where your memories will begin.</p>
      </div>
      <div className="bg-white shadow-2xl border-t-4 border-whr-gold rounded-sm overflow-hidden">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc6r9J6QovYDwiwT-VP0bA3CXLdcPUg_1fV5pI-yIAQxRvfpQ/viewform?embedded=true"
          width="100%"
          height="1200"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Schedule a Tour at White House Resort"
        >
          Loading form…
        </iframe>
      </div>
    </div>
  );
};

export default TourForm;