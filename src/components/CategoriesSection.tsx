
import React from "react";
import { Link } from "react-router-dom";

const CategoriesSection = () => {
  return (
    <section className="py-6 border-t border-b border-beige-200 bg-white">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <Link to="/category-name" className="text-sm font-display uppercase hover:text-primary/70 transition-colors tracking-widest">
            copywriting
          </Link>
          <div className="category-divider"></div>
          <Link to="/category-name" className="text-sm font-display uppercase hover:text-primary/70 transition-colors tracking-widest">
            strategy
          </Link>
          <div className="category-divider"></div>
          <Link to="/category-name" className="text-sm font-display uppercase hover:text-primary/70 transition-colors tracking-widest">
            marketing
          </Link>
          <div className="category-divider"></div>
          <Link to="/category-name" className="text-sm font-display uppercase hover:text-primary/70 transition-colors tracking-widest">
            social media
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
