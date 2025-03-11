
import React from "react";
import { pageContent } from "@/data/pageContent";

const CtaSection = () => {
  const { cta } = pageContent;
  
  return (
    <section className="bg-black text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block border border-white/30 p-3 mb-6">
              <h3 className="text-xs uppercase tracking-widest font-medium">
                {cta.tagline.split(' ').map((word, i) => (
                  <React.Fragment key={i}>
                    {word} <br />
                  </React.Fragment>
                ))}
              </h3>
            </div>
            <h2 className="text-2xl md:text-3xl font-display mb-6">
              {cta.title}
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl text-sm">
              {cta.description}
            </p>
            <button className="bg-white text-black px-6 py-3 text-xs font-medium hover:bg-white/90 transition-colors uppercase tracking-widest">
              {cta.buttonText}
            </button>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <img alt="Tablet mockup" className="w-full max-w-md" src={cta.image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
