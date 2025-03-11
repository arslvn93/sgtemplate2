
import React from "react";
import { Link } from "react-router-dom";
import { pageContent } from "@/data/pageContent";

const MyStorySection = () => {
  const { myStory } = pageContent;
  
  return (
    <section className="py-20 bg-[#EEEAE6]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          <div className="border border-gray-300">
            <img 
              alt="Portrait photo of woman sitting on chair" 
              className="w-full h-full object-cover object-center" 
              src={myStory.image} 
            />
          </div>
          <div className="bg-white p-16 border border-gray-300">
            <span className="uppercase text-[10px] tracking-[0.2em] text-gray-500 font-medium">
              {myStory.label}
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-serif font-normal leading-tight">
              {myStory.title}
            </h2>
            <div className="h-px w-20 bg-gray-300 my-8"></div>
            {myStory.paragraphs.map((paragraph, index) => (
              <p key={index} className="mt-6 text-gray-700 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="mt-10">
              <Link 
                to={myStory.buttonLink} 
                className="px-10 py-3 border border-gray-400 text-gray-700 uppercase text-xs tracking-[0.2em] font-medium hover:bg-gray-100 transition-colors"
              >
                {myStory.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStorySection;
