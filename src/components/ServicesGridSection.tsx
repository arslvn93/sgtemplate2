
import React from "react";
import { Link } from "react-router-dom";
import { pageContent } from "@/data/pageContent";

const ServicesGridSection = () => {
  const { servicesGrid } = pageContent;

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-display mb-3">
            {servicesGrid.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            {servicesGrid.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesGrid.items.map((service, index) => (
            <div key={index} className="relative group overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden bg-beige-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <Link 
                to={service.link}
                className={`absolute inset-0 flex items-end p-6 ${service.highlight ? 'bg-black/40' : 'bg-black/20'}`}
              >
                <div className={`w-full ${service.highlight ? 'bg-black' : 'bg-white'}`}>
                  <p className={`text-center py-3 px-2 text-xs font-medium uppercase tracking-widest ${service.highlight ? 'text-white' : 'text-black'}`}>
                    {service.title}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link to="/services" className="text-xs uppercase tracking-wider font-medium hover:text-gray-600 transition-colors">
            EXPLORE OUR PROGRAMS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
