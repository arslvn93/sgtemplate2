
import React from "react";
import { Link } from "react-router-dom";

const MyStorySection = () => {
  return (
    <section className="py-16 bg-accent">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
              alt="Portrait photo"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="border-t border-b border-beige-200 py-8">
            <span className="uppercase text-xs tracking-wider text-muted-foreground">
              THIS IS MY STORY
            </span>
            <h2 className="mt-2 text-3xl md:text-4xl font-display">
              How I Started My Marketing Journey
            </h2>
            <p className="mt-4 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore duis 17% magna
            </p>
            <p className="mt-4 text-muted-foreground">
              Et tortor consequat id porta nibh. Et tortor at risus viverra adipiscing at in tellus integer. Ornare suspendisse sed nisi lacus sed viverra tellus in. Etiam dignissim diam quis enim lobortis fermentum dui faucibus. Adipiscing elit duis sollicitudin nibh sit. Hendrerit gravida rutrum.
            </p>
            <Link to="/about" className="btn-outline text-black mt-6 inline-block">
              ABOUT MEGAN
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStorySection;
