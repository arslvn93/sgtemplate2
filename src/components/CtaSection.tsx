
import React from "react";

const CtaSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block border border-white/30 p-3 mb-6">
            <h3 className="text-xs uppercase tracking-widest font-medium">
              OUR PROVEN <br />STORYTELLING<br /> TECHNIQUES
            </h3>
          </div>
          <h2 className="text-2xl md:text-3xl font-display mb-6">
            Want to create a genuine connection with your audience?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto text-sm">
            Join our weekly newsletter for actionable tips on crafting stories that connect with your audience and drive conversions. Plus, get our free guide to creating compelling headlines.
          </p>
          <button className="bg-white text-black px-6 py-3 text-xs font-medium hover:bg-white/90 transition-colors uppercase tracking-widest">
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
