
import React from "react";
import { Link } from "react-router-dom";

const MyStorySection = () => {
  return (
    <section className="py-20 bg-[#EEEAE6]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          <div className="border border-gray-300">
            <img 
              alt="Portrait photo of woman sitting on chair" 
              className="w-full h-full object-cover object-center" 
              src="/lovable-uploads/c1739916-b84a-49b3-8d9d-38ad35d8fd3c.jpg" 
            />
          </div>
          <div className="bg-white p-16 border border-gray-300">
            <span className="uppercase text-[10px] tracking-[0.2em] text-gray-500 font-medium">
              THIS IS MY STORY
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl font-serif font-normal leading-tight">
              How I Started My <br />Marketing Journey
            </h2>
            <div className="h-px w-20 bg-gray-300 my-8"></div>
            <p className="mt-6 text-gray-700 text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore duis 17% magna
            </p>
            <p className="mt-6 text-gray-700 text-base leading-relaxed">
              Et tortor consequat id porta nibh. Et tortor at risus viverra adipiscing at in tellus integer. Ornare suspendisse sed nisi lacus sed viverra tellus in. Etiam dignissim diam quis enim lobortis fermentum dui faucibus. Adipiscing elit duis sollicitudin nibh sit. Hendrerit gravida rutrum.
            </p>
            <div className="mt-10">
              <Link 
                to="/about" 
                className="px-10 py-3 border border-gray-400 text-gray-700 uppercase text-xs tracking-[0.2em] font-medium hover:bg-gray-100 transition-colors"
              >
                ABOUT MEGAN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStorySection;
