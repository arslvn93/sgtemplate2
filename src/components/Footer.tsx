
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-beige-50 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* Logo & Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="text-primary text-xl font-serif mb-4 block">
              Words & Tips
            </Link>
            <p className="text-muted-foreground text-sm mt-4 max-w-xs">
              Helping businesses create authentic, audience-resonating content that converts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-medium text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-primary font-medium text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/content-strategy"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Content Strategy
                </Link>
              </li>
              <li>
                <Link
                  to="/services/copywriting"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Copywriting
                </Link>
              </li>
              <li>
                <Link
                  to="/services/brand-storytelling"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Brand Storytelling
                </Link>
              </li>
              <li>
                <Link
                  to="/services/consulting"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Consulting
                </Link>
              </li>
              <li>
                <Link
                  to="/services/workshops"
                  className="text-muted-foreground text-sm hover:text-primary transition-colors"
                >
                  Workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-medium text-sm uppercase tracking-wider mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="text-muted-foreground text-sm">
                hello@wordsandtips.com
              </li>
              <li className="text-muted-foreground text-sm">
                +1 (555) 123-4567
              </li>
              <li className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors"
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
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="Twitter"
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
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-primary hover:text-primary/80 transition-colors"
                  aria-label="LinkedIn"
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
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-beige-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Words & Tips. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
