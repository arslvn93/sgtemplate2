
import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/lovable-uploads/98a86edf-4332-4ac8-aabe-103c9f40d705.png"
          alt="Marketing specialist helping businesses grow"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6">
            LET'S CREATE MAGIC<br />& GROW YOUR<br />BUSINESS
          </h1>
          <p className="mt-4 text-white/90 text-sm max-w-lg mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed incididunt ut labore et dolore ipsum duis 17% magna
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link to="#freebie" className="btn-primary bg-white text-black hover:bg-white/90">
              GET A FREE TRAINING
            </Link>
            <Link to="/services" className="btn-outline text-white border-white hover:bg-white/10">
              DISCOVER SERVICES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
