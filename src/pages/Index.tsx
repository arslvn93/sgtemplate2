
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import NewsletterSignup from "@/components/NewsletterSignup";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { value: "380+", label: "Clients Served" },
    { value: "12", label: "Years Experience" },
    { value: "95%", label: "Success Rate" },
    { value: "5", label: "Industry Awards" },
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
            <p className="mt-4 text-white/90 md:text-lg max-w-lg mx-auto md:mx-0">
              We craft compelling stories and strategies that connect with your audience and drive results
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-1 focus:ring-white/50"
              />
              <button className="btn-primary bg-white text-primary hover:bg-white/90">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <img
                src="https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
                alt="Woman sitting on a chair"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">
                LATEST ARTICLE
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-display">
                How I Started My Marketing Journey
              </h2>
              <p className="mt-4 text-muted-foreground">
                I remember the moment when I realized that marketing wasn't just about selling products; 
                it was about telling stories that people could connect with. This revelation came to me 
                after years of working with brands that struggled to articulate their value. I noticed 
                that the most successful companies weren't just selling features or benefits—they were 
                creating narratives that resonated with their audience's desires, fears, and aspirations.
              </p>
              <Link to="/blog/marketing-journey" className="btn-outline mt-6 self-start">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-beige-50">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              How I Help Businesses Grow
            </h2>
            <p className="text-muted-foreground">
              If you're struggling with marketing, you probably need a better story.
              Here's how we can work together to craft your narrative.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 border border-beige-100">
              <h3 className="text-2xl font-display mb-4">
                Does your copy sound boring?
              </h3>
              <p className="text-muted-foreground mb-6">
                If your marketing materials aren't resonating with your audience, it might be time for a refresh. 
                I specialize in creating copy that captures attention, communicates value, and drives action.
              </p>
              <Link to="/services/copywriting" className="btn-outline">
                Learn more
              </Link>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3"
                alt="Laptop and coffee on desk"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display mb-14 text-center">
            What we're most proud of:
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <span className="block text-4xl md:text-5xl font-display text-primary mb-2">
                  {stat.value}
                </span>
                <span className="text-muted-foreground text-sm uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Masterclass Section */}
      <section className="py-24 bg-beige-50 relative">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=1468&ixlib=rb-4.0.3"
                alt="Person typing on a laptop"
                className="w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-display mb-4">
                Nurture Your Followers Masterclass
              </h2>
              <p className="text-muted-foreground mb-6">
                Learn how to create content that connects with your audience and drives engagement. This masterclass will teach you the proven storytelling techniques that I've used to help hundreds of businesses grow their online presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 border border-beige-200 bg-white focus:outline-none focus:ring-1 focus:ring-primary/50"
                />
                <button className="btn-primary whitespace-nowrap">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display mb-4 text-center">
            What feels right for you?
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            Choose the service that best fits your current marketing needs
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-beige-50 p-6 text-center hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
                alt="Content Creation"
                className="w-full h-48 object-cover object-center mb-6"
              />
              <h3 className="text-xl font-display mb-2">Content Creation</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Blog posts, email sequences, and social media content that engages your audience.
              </p>
              <Link to="/services/content-creation" className="text-primary text-sm font-medium hover:underline">
                Explore →
              </Link>
            </div>
            
            <div className="bg-beige-50 p-6 text-center hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
                alt="Strategy Sessions"
                className="w-full h-48 object-cover object-center mb-6"
              />
              <h3 className="text-xl font-display mb-2">Strategy Sessions</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Personalized consultations to develop marketing strategies that align with your goals.
              </p>
              <Link to="/services/strategy-sessions" className="text-primary text-sm font-medium hover:underline">
                Explore →
              </Link>
            </div>
            
            <div className="bg-beige-50 p-6 text-center hover:shadow-md transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
                alt="Brand Storytelling"
                className="w-full h-48 object-cover object-center mb-6"
              />
              <h3 className="text-xl font-display mb-2">Brand Storytelling</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Develop a compelling brand narrative that connects with your ideal customers.
              </p>
              <Link to="/services/brand-storytelling" className="text-primary text-sm font-medium hover:underline">
                Explore →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-beige-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-display mb-4 text-center">
            What clients say:
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-14">
            "Now I feel excited about social media"
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Working with Sarah transformed our content strategy completely. Her storytelling approach helped us connect with our audience in ways we never thought possible."
              author="Jessica Chen"
              role="CEO, Brightstar Media"
            />
            <TestimonialCard
              quote="Our email open rates increased by 43% after implementing Sarah's copywriting techniques. Her ability to craft compelling headlines and engaging content is unmatched."
              author="Michael Rodriguez"
              role="Marketing Director, Elevate Group"
            />
            <TestimonialCard
              quote="Sarah has a gift for turning complex ideas into clear, compelling narratives. She helped us articulate our value proposition in a way that truly resonates with our ideal clients."
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
            <button className="bg-white text-primary px-8 py-3 font-medium hover:bg-white/90 transition-colors">
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
