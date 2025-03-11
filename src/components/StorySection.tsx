
import React from "react";
import { Link } from "react-router-dom";
import { pageContent } from "@/data/pageContent";

const StorySection = () => {
  const { story } = pageContent;
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
              {story.label}
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-serif font-normal leading-tight">
              {story.title}
            </h2>
            <div className="h-px w-20 bg-gray-300 my-8"></div>
            {story.paragraphs.map((paragraph, index) => (
              <p key={index} className="mt-6 text-gray-700 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="mt-8">
              <Link 
                to={story.buttonLink} 
                className="px-10 py-3 border border-gray-400 text-gray-700 uppercase text-xs tracking-[0.2em] font-medium hover:bg-gray-100 transition-colors"
              >
                {story.buttonText}
              </Link>
            </div>
          </div>
          <div>
            <img
              src={story.image}
              alt="Real estate agent with client"
              className="w-full h-full object-cover border border-gray-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
