
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: "service-1",
      title: "Content Strategy Development",
      description: "A comprehensive approach to planning, creating, and managing content that aligns with your business goals and resonates with your audience.",
      included: [
        "In-depth audience analysis",
        "Content audit and gap analysis",
        "Editorial calendar creation",
        "Distribution channel strategy",
        "Performance metrics setup"
      ],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    },
    {
      id: "service-2",
      title: "Copywriting & Messaging",
      description: "Compelling copy that tells your story and drives action, crafted with your brand voice and customer psychology in mind.",
      included: [
        "Website copy revamp",
        "Email sequence development",
        "Sales page creation",
        "Brand messaging framework",
        "Ad copy creation"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    },
    {
      id: "freebie",
      title: "Social Media Storytelling",
      description: "Build an engaged community through authentic content that showcases your brand's personality and values.",
      included: [
        "Platform-specific strategy",
        "Content pillars development",
        "Engagement tactics",
        "Analytics and optimization",
        "Community building framework"
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-beige-50">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-center mb-6">
            Services
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Tailored marketing solutions to help you tell your story, connect with your audience, and grow your business.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`mb-20 ${index !== services.length - 1 ? 'border-b border-beige-200 pb-20' : ''}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className={index % 2 === 0 ? 'order-2 md:order-1' : 'order-2'}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={index % 2 === 0 ? 'order-1 md:order-2' : 'order-1'}>
                  <h2 className="text-3xl md:text-4xl font-display mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <h3 className="text-lg font-medium mb-4">What's included:</h3>
                  <ul className="space-y-2 mb-8">
                    {service.included.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="btn-outline uppercase">
                    {service.id === "freebie" ? "Get Free Training" : "Learn More"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display mb-6">
              Not sure which service is right for you?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Book a free 15-minute consultation to discuss your business goals and find the perfect solution for your needs.
            </p>
            <button className="bg-white text-primary px-8 py-3 font-medium hover:bg-white/90 transition-colors uppercase">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </>
  );
};

export default Services;
