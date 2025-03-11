
import React from "react";
import { Link } from "react-router-dom";
import { pageContent } from "@/data/pageContent";

const HeroSection = () => {
  const { hero } = pageContent;
  
  return (
    <section className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src={hero.backgroundImage}
          alt="Marketing specialist helping businesses grow"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight mb-6">
            {hero.title}
          </h1>
          <p className="mt-4 text-white/90 text-sm max-w-lg mx-auto">
            {hero.description}
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link to={hero.buttonLink1} className="btn-primary bg-white text-black hover:bg-white/90">
              {hero.buttonText1}
            </Link>
            <Link to={hero.buttonLink2} className="btn-outline text-white border-white hover:bg-white/10">
              {hero.buttonText2}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
