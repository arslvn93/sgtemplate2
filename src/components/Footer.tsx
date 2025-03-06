
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mb-8">
          {/* Logo & Info */}
          <div className="col-span-1">
            <Link to="/" className="flex flex-col">
              <span className="text-white text-xl font-serif">Megan Knight</span>
              <span className="text-white text-sm uppercase tracking-wider mb-4">BUSINESS COACH</span>
            </Link>
            <p className="text-gray-400 text-sm mt-4 max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ipsum magna
            </p>
          </div>

          {/* Navigation */}
          <div className="col-span-1 flex flex-col">
            <h4 className="text-white font-medium text-sm uppercase tracking-wider mb-5 relative pl-8">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 rotate-90 text-gray-500">navigation</span>
            </h4>
            <div className="border-l border-gray-700 pl-8">
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="#freebie"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    Freebies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 text-sm hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="col-span-1">
            <div>
              <h4 className="text-lg font-display mb-2">JOIN THE TRIBE!</h4>
              <p className="text-gray-400 text-sm mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse dolore!
              </p>
              <div className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="bg-gray-800 border border-gray-700 px-4 py-2 text-sm text-white focus:outline-none"
                />
                <button className="bg-white text-black px-4 py-2 text-sm font-medium uppercase tracking-wider hover:bg-gray-200 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 my-8">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="Pinterest"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 12a4 4 0 0 1 8 0c0 2.5-2 4-3.5 4s-2-1-2-1m2-2v6"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </a>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            © DESIGNORINA {currentYear}. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
