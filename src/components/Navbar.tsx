
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex flex-col items-center text-primary">
          <span className="text-lg md:text-xl font-serif">Megan Knight</span>
          <span className="text-xs uppercase tracking-wide">BUSINESS COACH</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-sm font-medium text-primary hover:text-primary/70 transition-colors uppercase"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-primary hover:text-primary/70 transition-colors uppercase"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-sm font-medium text-primary hover:text-primary/70 transition-colors uppercase"
          >
            Services
          </Link>
          <Link
            to="/blog"
            className="text-sm font-medium text-primary hover:text-primary/70 transition-colors uppercase"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-primary hover:text-primary/70 transition-colors uppercase"
          >
            Contact
          </Link>
          <Link
            to="#freebie"
            className="text-sm font-medium text-primary hover:text-primary/70 transition-colors uppercase"
          >
            Freebies
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden py-0"
        }`}
      >
        <div className="container-custom flex flex-col space-y-4">
          <Link
            to="/"
            className="text-sm font-medium text-primary hover:text-primary/70 transition-colors uppercase"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-sm font-medium text-primary hover:text-primary/70 transition-colors uppercase"
            onClick={() => setMobileMenuOpen(false)}
          >
            Meet Megan
          </Link>
          <Link
            to="/services"
            className="text-sm font-medium text-primary hover:text-primary/70 transition-colors uppercase"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/blog"
            className="text-sm font-medium text-primary hover:text-primary/70 transition-colors uppercase"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-primary hover:text-primary/70 transition-colors uppercase"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="#freebie"
            className="text-sm font-medium text-primary hover:text-primary/70 transition-colors uppercase"
            onClick={() => setMobileMenuOpen(false)}
          >
            Freebie
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
