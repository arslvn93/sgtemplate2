
import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="py-12 bg-beige-50 border-t border-b border-beige-200" id="freebie">
      <div className="container-custom">
        <div className="text-center mb-2">
          <span className="uppercase text-xs tracking-wider">#happyclients</span>
        </div>
        <h2 className="text-2xl font-display italic mb-8 text-center">
          "Now I feel excited about social media!"
        </h2>
        
        <div className="max-w-2xl mx-auto mb-12">
          <p className="text-center text-muted-foreground mx-auto text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed velit dignissim sodales!
          </p>
          <h3 className="text-center mt-4 font-medium text-sm">- Amy Jacobs</h3>
        </div>
        
        <div className="flex justify-center gap-4">
          <button className="w-10 h-10 rounded-full flex items-center justify-center border border-beige-200 hover:bg-beige-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform rotate-180">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
          <button className="w-10 h-10 rounded-full flex items-center justify-center border border-beige-200 hover:bg-beige-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
