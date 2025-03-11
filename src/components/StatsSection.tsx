
import React from "react";
import { pageContent } from "@/data/pageContent";

const StatsSection = () => {
  const { stats } = pageContent;

  return (
    <section className="py-16 bg-white border-t border-b border-beige-200">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-display mb-3 text-center">
          What we're most proud of:
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-sm">
          Our track record speaks for itself - see why hundreds of clients trust us with their real estate needs.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative">
          {stats.map((stat, index) => (
            <div key={index} className="text-center relative">
              <span className="block text-4xl md:text-5xl font-display text-black mb-2">
                {stat.value}
              </span>
              <span className="text-muted-foreground text-xs uppercase tracking-wider">
                {stat.label}
              </span>
              {index < stats.length - 1 && (
                <div className="h-16 w-px bg-beige-200 absolute right-0 top-1/2 -translate-y-1/2 hidden md:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
