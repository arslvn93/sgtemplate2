
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Sample Instagram images for the grid
  const instagramImages = Array(12).fill("").map((_, index) => ({
    id: index + 1,
    src: `https://source.unsplash.com/random/300x300?interior,fashion,lifestyle&sig=${index}`,
    alt: `Instagram post ${index + 1}`
  }));

  return (
    <footer className="bg-gray-800 text-white">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-start py-12 container-custom">
        {/* Left Navigation */}
        <div className="border-r border-gray-700 pr-10 hidden md:block">
          <nav className="flex flex-col space-y-5">
            <span className="text-xs text-gray-500 uppercase tracking-widest mb-2 transform -rotate-90 origin-left ml-2">Navigation</span>
            <Link to="/" className="text-white hover:text-gray-300 transition-colors">HOME</Link>
            <Link to="/about" className="text-white hover:text-gray-300 transition-colors">ABOUT</Link>
            <Link to="/services" className="text-white hover:text-gray-300 transition-colors">SERVICES</Link>
            <Link to="/blog" className="text-white hover:text-gray-300 transition-colors">BLOG</Link>
            <Link to="#freebies" className="text-white hover:text-gray-300 transition-colors">FREEBIES</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">CONTACT</Link>
          </nav>
        </div>

        {/* Center Logo and Text */}
        <div className="text-center mx-auto md:mx-0 mb-8 md:mb-0">
          <div className="mb-6">
            <Link to="/" className="inline-block bg-white px-8 py-4">
              <h3 className="font-display text-black text-2xl mb-0">Megan Knight</h3>
              <p className="text-black text-xs tracking-widest uppercase">BUSINESS COACH</p>
            </Link>
          </div>
          <div className="max-w-md mx-auto text-center">
            <h4 className="uppercase tracking-widest text-sm mb-4">SUPERCHARGE YOUR MARKETING STRATEGY AND GROW YOUR BUSINESS</h4>
            <p className="text-gray-400 text-sm mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ipsum magna
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white hover:text-gray-300" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300" aria-label="Pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12a4 4 0 0 1 8 0c0 2.5-2 4-3.5 4s-2-1-2-1m2-2v6"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Newsletter Signup */}
        <div className="ml-auto md:max-w-xs">
          <div className="text-right">
            <h4 className="text-lg font-display mb-2">JOIN THE TRIBE!</h4>
            <p className="text-gray-400 text-sm mb-4 text-right">
              Duis aute irure dolor in reprehenderit in voluptate velit esse dolore!
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white border border-gray-300 px-4 py-3 text-sm text-gray-800 focus:outline-none w-full"
              />
              <button className="bg-beige-300 text-gray-800 px-4 py-3 text-sm tracking-widest uppercase hover:bg-beige-400 transition-colors w-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Instagram Feed Grid */}
      <div className="w-full">
        <div className="grid grid-cols-6 md:grid-cols-12">
          {instagramImages.map((image) => (
            <div key={image.id} className="aspect-square overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 text-center bg-gray-900">
        <p className="text-gray-500 text-xs">
          © DESIGNORINA {currentYear}. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
