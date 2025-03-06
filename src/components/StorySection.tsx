
import React from "react";
import { Link } from "react-router-dom";

const StorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-medium">
              HERE'S THE SECRET:
            </span>
            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-serif font-normal leading-tight">
              If you're struggling with marketing... You probably need a better <i>story.</i>
            </h2>
            <div className="h-px w-20 bg-gray-300 my-8"></div>
            <p className="mt-6 text-gray-700 text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer scelerisque varius.
            </p>
            <p className="mt-6 text-gray-700 text-base leading-relaxed">
              Congue eu consequat ac felis donec et odio. Quis vel eros donec ac odio tempor orci dapibus. Amet mattis vulputate enim nulla aliquet porttitor lacus. Sollicitudin nibh sit amet commodo. Pulvinar neque laoreet suspendisse.
            </p>
            <div className="mt-8">
              <Link 
                to="/blog" 
                className="px-10 py-3 border border-gray-400 text-gray-700 uppercase text-xs tracking-[0.2em] font-medium hover:bg-gray-100 transition-colors"
              >
                READ MORE
              </Link>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
              alt="Person working on a laptop"
              className="w-full h-full object-cover border border-gray-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
