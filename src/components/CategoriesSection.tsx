
import React from "react";
import { Link } from "react-router-dom";

const CategoriesSection = () => {
  return (
    <section className="py-4 bg-[#C9C4C0]">
      <div className="container-custom">
        <div className="flex justify-center items-center">
          <Link 
            to="/services" 
            className="uppercase text-xs tracking-[0.2em] text-gray-800 font-medium py-4 px-8 hover:text-gray-600 transition-colors"
          >
            SOCIAL MEDIA
          </Link>
          <div className="h-5 w-px bg-gray-400 mx-4"></div>
          <Link 
            to="/services" 
            className="uppercase text-xs tracking-[0.2em] text-gray-800 font-medium py-4 px-8 hover:text-gray-600 transition-colors"
          >
            COPYWRITING
          </Link>
          <div className="h-5 w-px bg-gray-400 mx-4"></div>
          <Link 
            to="/services" 
            className="uppercase text-xs tracking-[0.2em] text-gray-800 font-medium py-4 px-8 hover:text-gray-600 transition-colors"
          >
            STRATEGY
          </Link>
          <div className="h-5 w-px bg-gray-400 mx-4"></div>
          <Link 
            to="/services" 
            className="uppercase text-xs tracking-[0.2em] text-gray-800 font-medium py-4 px-8 hover:text-gray-600 transition-colors"
          >
            MARKETING
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
