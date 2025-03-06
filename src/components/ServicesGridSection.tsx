
import React from "react";
import { Link } from "react-router-dom";

const ServicesGridSection = () => {
  return (
    <section className="py-16 bg-white border-t border-b border-beige-200">
      <div className="container-custom">
        <h2 className="text-3xl font-display mb-4 text-center">
          WHAT FEELS RIGHT FOR YOU?
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-6 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="text-center mb-12">
          <span className="uppercase text-xs tracking-wider font-medium">EXPLORE OUR PROGRAMS</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
              alt="Service One"
              className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Link to="/services#service-1" className="bg-white text-black px-5 py-3 uppercase font-medium text-xs tracking-widest">
                SERVICE ONE
              </Link>
            </div>
          </div>
          
          <div className="relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
              alt="Service Two"
              className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Link to="/services#service-2" className="bg-white text-black px-5 py-3 uppercase font-medium text-xs tracking-widest">
                SERVICE TWO
              </Link>
            </div>
          </div>
          
          <div className="relative group overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
              alt="Free Training"
              className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Link to="#freebie" className="bg-white text-black px-5 py-3 uppercase font-medium text-xs tracking-widest">
                FREE TRAINING
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGridSection;
