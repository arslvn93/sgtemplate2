
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-beige-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display mb-6">
                About Words & Tips
              </h1>
              <p className="text-lg text-muted-foreground">
                A marketing consultancy focused on authentic storytelling
                and strategic content creation.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
                  alt="Founder of Words & Tips"
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-display mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4">
                  Words & Tips was founded in 2010 with a simple mission: to help businesses tell their stories in ways that resonate with their ideal customers. After spending years in corporate marketing roles, I noticed a recurring problem - companies were focusing too much on features and benefits, and not enough on the human elements that actually drive connection and conversion.
                </p>
                <p className="text-muted-foreground mb-4">
                  What started as a one-person consultancy has grown into a boutique agency serving clients across industries, from tech startups to established lifestyle brands. Our approach combines strategic thinking with creative storytelling, always centered on the audience's needs and desires.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to have helped hundreds of businesses clarify their message, connect with their audience, and grow their revenue through authentic, strategic communication.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-beige-50">
          <div className="container-custom">
            <h2 className="text-3xl font-display mb-12 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-beige-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-display mb-3">Authenticity</h3>
                <p className="text-muted-foreground">
                  We believe in honest communication that builds trust and credibility. No gimmicks, no manipulation - just authentic storytelling that resonates.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-beige-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                </div>
                <h3 className="text-xl font-display mb-3">Strategy First</h3>
                <p className="text-muted-foreground">
                  Great content starts with solid strategy. We dig deep to understand your audience, goals, and market position before creating any content.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-beige-200 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-display mb-3">Continuous Growth</h3>
                <p className="text-muted-foreground">
                  We're committed to ongoing learning and improvement, staying ahead of industry trends to deliver the most effective solutions for our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-display mb-12 text-center">Meet Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="mb-6 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1471&ixlib=rb-4.0.3"
                    alt="Sarah Johnson"
                    className="w-full h-80 object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-display mb-1">Sarah Johnson</h3>
                <p className="text-muted-foreground text-sm mb-4">Founder & Lead Strategist</p>
                <p className="text-muted-foreground text-sm">
                  With 15+ years of experience in marketing and communications, Sarah leads our strategy development and client relationships.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-6 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3"
                    alt="Michael Torres"
                    className="w-full h-80 object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-display mb-1">Michael Torres</h3>
                <p className="text-muted-foreground text-sm mb-4">Senior Copywriter</p>
                <p className="text-muted-foreground text-sm">
                  Michael has written for brands big and small, with a knack for finding the perfect words to convey complex ideas simply.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mb-6 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1541823709867-1b206113eafd?auto=format&fit=crop&q=80&w=1587&ixlib=rb-4.0.3"
                    alt="Ava Chen"
                    className="w-full h-80 object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-display mb-1">Ava Chen</h3>
                <p className="text-muted-foreground text-sm mb-4">Content Strategist</p>
                <p className="text-muted-foreground text-sm">
                  Ava specializes in developing comprehensive content strategies that align with our clients' business goals and audience needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <NewsletterSignup />
      <Footer />
    </>
  );
};

export default About;
