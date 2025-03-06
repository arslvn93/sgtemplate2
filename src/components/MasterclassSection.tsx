
import React from "react";
import { Link } from "react-router-dom";

const MasterclassSection = () => {
  return (
    <section className="py-20 bg-gray-200 relative">
      <div className="absolute inset-0 z-0 opacity-50">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=7952&ixlib=rb-4.0.3"
          alt="Background image of person using laptop"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-wider font-medium mb-2 inline-block">
            Ready to position yourself as an expert in your industry?
          </span>
          <h2 className="text-3xl md:text-4xl font-display mb-4">
            Nurture Your Followers <i>Masterclass</i>
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-sm">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia!
          </p>
          <Link to="#freebie" className="inline-block bg-black text-white px-6 py-3 text-xs font-medium uppercase tracking-widest">
            WATCH INSTANTLY!
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MasterclassSection;
