import React from "react";
import { Link } from "react-router-dom";
const MyStorySection = () => {
  return <section className="py-20 bg-[#EEEAE6]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img alt="Portrait photo of woman sitting on chair" className="w-full h-full object-cover object-center" src="/lovable-uploads/c1739916-b84a-49b3-8d9d-38ad35d8fd3c.jpg" />
          </div>
          <div className="bg-white p-12">
            <span className="uppercase text-xs tracking-wider text-muted-foreground">
              THIS IS MY STORY
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display leading-tight">
              How I Started My Marketing Journey
            </h2>
            <div className="h-px w-20 bg-gray-300 my-6"></div>
            <p className="mt-6 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore duis 17% magna
            </p>
            <p className="mt-4 text-muted-foreground">
              Et tortor consequat id porta nibh. Et tortor at risus viverra adipiscing at in tellus integer. Ornare suspendisse sed nisi lacus sed viverra tellus in. Etiam dignissim diam quis enim lobortis fermentum dui faucibus. Adipiscing elit duis sollicitudin nibh sit. Hendrerit gravida rutrum.
            </p>
            <div className="mt-8">
              <Link to="/about" className="btn-outline text-black inline-flex items-center border-black">
                ABOUT MEGAN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MyStorySection;