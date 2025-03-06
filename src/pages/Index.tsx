
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import NewsletterSignup from "@/components/NewsletterSignup";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: "380+", label: "HAPPY CLIENTS" },
    { value: "12 years", label: "EXPERIENCE" },
    { value: "95%", label: "SUCCESS RATE" },
    { value: "5", label: "TEAM MEMBERS" },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/lovable-uploads/5790a0ff-18f9-4876-8c77-9f5caed90189.png"
            alt="Marketing specialist helping businesses grow"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
        
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-2xl mx-auto text-center md:text-left md:mx-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight">
              LET'S CREATE MAGIC<br />& GROW YOUR<br />BUSINESS
            </h1>
            <p className="mt-4 text-white/90 md:text-lg max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor sed incididunt ut labore et dolore ipsum duis 17% magna
            </p>
            <div className="mt-8 flex gap-4">
              <Link to="#freebie" className="btn-primary bg-white text-primary hover:bg-white/90 uppercase">
                Get a free training
              </Link>
              <Link to="/services" className="btn-outline text-white border-white hover:bg-white/10 uppercase">
                Discover services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* My Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
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
              <Link to="/about" className="btn-outline mt-6 uppercase">
                About Megan
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
                alt="Portrait photo"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 border-t border-b border-beige-200">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <Link to="/category-name" className="text-lg font-display uppercase hover:text-primary/70 transition-colors">
              copywriting
            </Link>
            <div className="h-8 w-px bg-beige-200 hidden md:block"></div>
            <Link to="/category-name" className="text-lg font-display uppercase hover:text-primary/70 transition-colors">
              strategy
            </Link>
            <div className="h-8 w-px bg-beige-200 hidden md:block"></div>
            <Link to="/category-name" className="text-lg font-display uppercase hover:text-primary/70 transition-colors">
              marketing
            </Link>
            <div className="h-8 w-px bg-beige-200 hidden md:block"></div>
            <Link to="/category-name" className="text-lg font-display uppercase hover:text-primary/70 transition-colors">
              social media
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col justify-center">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                HERE'S THE SECRET:
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-display">
                If you're struggling with marketing... You probably need a better <i>story.</i>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In tellus integer scelerisque varius.
              </p>
              <p className="mt-4 text-muted-foreground">
                Congue eu consequat ac felis donec et odio. Quis vel eros donec ac odio tempor orci dapibus. Amet mattis vulputate enim nulla aliquet porttitor lacus. Sollicitudin nibh sit amet commodo. Pulvinar neque laoreet suspendisse.
              </p>
              <Link to="/blog" className="btn-outline mt-6 uppercase self-start">
                Read More
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
                alt="Person working on a laptop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 2 */}
      <section className="py-20 bg-beige-50 border-t border-b border-beige-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3"
                alt="Laptop on desk"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-display mb-4">
                Does your copy sound boring?
              </h2>
              <p className="text-muted-foreground mb-4">
                You feel like you don't have an inspiring story to share. You are always promoting your features & trying to sell products in your copy?
              </p>
              <div className="border-t border-b border-beige-200 py-4 my-4">
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi et dolore magna aliqua. In tellus integer scelerisque varius?
                </p>
              </div>
              <p className="text-muted-foreground mb-6">
                Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incidi et ornare sed magna aliqua? In tellus integer scelerisque varius.
              </p>
              <p className="text-muted-foreground mb-6">
                Quis varius quam quisque id diam vel. Habitant morbi tristique senectus et? Scelerisque fermentum in ornare?
              </p>
              <Link to="/services" className="btn-outline uppercase self-start">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white border-t border-b border-beige-200">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display mb-4 text-center">
            What we're most proud of:
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14">
            Duis aute irure dolor in reprehenderit in voluptate velit esse dolore eu sed 2 fugiat!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <span className="block text-4xl md:text-5xl font-display text-primary mb-2">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
                {index < stats.length - 1 && (
                  <div className="h-20 w-px bg-beige-200 mx-auto hidden md:block absolute right-0 top-1/2 -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masterclass Section */}
      <section className="py-24 bg-beige-50 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=1468&ixlib=rb-4.0.3"
            alt="Background image"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm uppercase tracking-wider font-medium mb-2 inline-block">
              Ready to position yourself as an expert in your industry?
            </span>
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              Nurture Your Followers <i>Masterclass</i>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia!
            </p>
            <Link to="#freebie" className="btn-primary uppercase">
              Watch Instantly!
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Grid Section */}
      <section className="py-20 bg-white border-t border-b border-beige-200">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display mb-4 text-center">
            What feels right for you?
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
                alt="Service One"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link to="/services#service-1" className="bg-white text-primary px-6 py-3 uppercase font-medium">
                  Service One
                </Link>
              </div>
            </div>
            
            <div className="relative group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
                alt="Service Two"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link to="/services#service-2" className="bg-white text-primary px-6 py-3 uppercase font-medium">
                  Service Two
                </Link>
              </div>
            </div>
            
            <div className="relative group overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
                alt="Free Training"
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Link to="#freebie" className="bg-white text-primary px-6 py-3 uppercase font-medium">
                  Free Training
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-beige-50" id="freebie">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display mb-4 text-center">
            What clients say:
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14">
            "Now I feel excited about social media"
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Working with Megan transformed our content strategy completely. Her storytelling approach helped us connect with our audience in ways we never thought possible."
              author="Jessica Chen"
              role="CEO, Brightstar Media"
            />
            <TestimonialCard
              quote="Our email open rates increased by 43% after implementing Megan's copywriting techniques. Her ability to craft compelling headlines and engaging content is unmatched."
              author="Michael Rodriguez"
              role="Marketing Director, Elevate Group"
            />
            <TestimonialCard
              quote="Megan has a gift for turning complex ideas into clear, compelling narratives. She helped us articulate our value proposition in a way that truly resonates with our ideal clients."
              author="Priya Patel"
              role="Founder, Innovate Solutions"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block border-2 border-white/30 p-3 mb-6">
              <h3 className="text-sm uppercase tracking-widest font-medium">
                OUR PROVEN <br />STORYTELLING<br /> TECHNIQUES
              </h3>
            </div>
            <h2 className="text-3xl md:text-4xl font-display mb-6">
              Want to create a genuine connection with your audience?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join our weekly newsletter for actionable tips on crafting stories that connect with your audience and drive conversions. Plus, get our free guide to creating compelling headlines.
            </p>
            <button className="bg-white text-primary px-8 py-3 font-medium hover:bg-white/90 transition-colors uppercase">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
      
      {/* Instagram Feed Section */}
      <section className="py-14 bg-white">
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

      <NewsletterSignup />
      <Footer />
    </>
  );
};

export default Index;
