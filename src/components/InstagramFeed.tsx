
import React from "react";

const InstagramFeed = () => {
  const images = [
    "https://images.unsplash.com/photo-1550000000000-a10000000000?auto=format&fit=crop&q=80&w=400&h=400",
    "https://images.unsplash.com/photo-1550000000001-a10000000001?auto=format&fit=crop&q=80&w=400&h=400",
    "https://images.unsplash.com/photo-1550000000002-a10000000002?auto=format&fit=crop&q=80&w=400&h=400",
    "https://images.unsplash.com/photo-1550000000003-a10000000003?auto=format&fit=crop&q=80&w=400&h=400",
    "https://images.unsplash.com/photo-1550000000004-a10000000004?auto=format&fit=crop&q=80&w=400&h=400",
    "https://images.unsplash.com/photo-1550000000005-a10000000005?auto=format&fit=crop&q=80&w=400&h=400",
    "https://images.unsplash.com/photo-1550000000006-a10000000006?auto=format&fit=crop&q=80&w=400&h=400",
    "https://images.unsplash.com/photo-1550000000007-a10000000007?auto=format&fit=crop&q=80&w=400&h=400",
  ];

  return (
    <section className="py-0 bg-white border-t border-gray-300">
      <div className="w-full">
        <div className="grid grid-cols-4 md:grid-cols-8 gap-0">
          {images.map((src, index) => (
            <div key={index} className="aspect-square overflow-hidden">
              <img
                src={src}
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
