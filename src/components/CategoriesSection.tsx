
import React from "react";
import { Link } from "react-router-dom";
import { pageContent } from "@/data/pageContent";

const CategoriesSection = () => {
  const { categories } = pageContent;
  
  return (
    <section className="py-4 bg-[#C9C4C0]">
      <div className="container-custom">
        <div className="flex justify-center items-center">
          {categories.map((category, index) => (
            <React.Fragment key={index}>
              <Link 
                to={category.link} 
                className="uppercase text-xs tracking-[0.2em] text-gray-800 font-medium py-4 px-8 hover:text-gray-600 transition-colors"
              >
                {category.title}
              </Link>
              {index < categories.length - 1 && (
                <div className="h-5 w-px bg-gray-400 mx-4"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
