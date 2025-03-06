
import React from "react";
import { Link } from "react-router-dom";

const CategoriesSection = () => {
  return (
    <section className="py-4 bg-[#C9C4C0]">
      <div className="container-custom">
        <div className="grid grid-cols-4 gap-4 text-center">
          <Link to="/services" className="uppercase text-xs tracking-wider text-gray-800 font-medium py-2">
            SOCIAL MEDIA
          </Link>
          <Link to="/services" className="uppercase text-xs tracking-wider text-gray-800 font-medium py-2">
            COPYWRITING
          </Link>
          <Link to="/services" className="uppercase text-xs tracking-wider text-gray-800 font-medium py-2">
            STRATEGY
          </Link>
          <Link to="/services" className="uppercase text-xs tracking-wider text-gray-800 font-medium py-2">
            MARKETING
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
