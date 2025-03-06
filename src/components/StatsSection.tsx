
import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "380+", label: "HAPPY CLIENTS" },
    { value: "12 years", label: "EXPERIENCE" },
    { value: "95%", label: "SUCCESS RATE" },
    { value: "5", label: "TEAM MEMBERS" },
  ];

  return (
    <section className="py-16 bg-white border-t border-b border-beige-200">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-display mb-3 text-center">
          What we're most proud of:
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12 text-sm">
          Duis aute irure dolor in reprehenderit in voluptate velit esse dolore eu sed 2 fugiat!
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
