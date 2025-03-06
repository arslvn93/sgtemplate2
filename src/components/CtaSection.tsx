import React from "react";
const CtaSection = () => {
  return <section className="bg-black text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block border border-white/30 p-3 mb-6">
              <h3 className="text-xs uppercase tracking-widest font-medium">
                OUR PROVEN <br />STORYTELLING<br /> TECHNIQUES
              </h3>
            </div>
            <h2 className="text-2xl md:text-3xl font-display mb-6">
              Want to create a genuine connection with your audience?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl text-sm">
              Join our weekly newsletter for actionable tips on crafting stories that connect with your audience and drive conversions. Plus, get our free guide to creating compelling headlines.
            </p>
            <button className="bg-white text-black px-6 py-3 text-xs font-medium hover:bg-white/90 transition-colors uppercase tracking-widest">
              SUBSCRIBE NOW
            </button>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <img alt="Tablet mockup" className="w-full max-w-md" src="/lovable-uploads/31a27541-f3a6-49bd-ab98-628b9fb6c03f.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CtaSection;