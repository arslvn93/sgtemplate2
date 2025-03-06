
import React from "react";

const InstagramFeed = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-1">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="aspect-square overflow-hidden">
              <img
                src={`https://images.unsplash.com/photo-${1550000000000 + index * 10000}?auto=format&fit=crop&q=80&w=400&h=400&ixlib=rb-4.0.3`}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
