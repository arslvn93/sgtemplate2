
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsletterSignup from "@/components/NewsletterSignup";
import BlogCard from "@/components/BlogCard";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "How to Create Compelling Marketing Narratives",
      excerpt: "Learn the art of storytelling that connects with your audience on a deeper level.",
      category: "Strategy",
      date: "May 15, 2023",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    },
    {
      id: 2,
      title: "5 Ways to Improve Your Social Media Engagement",
      excerpt: "Discover proven techniques to increase interaction with your followers across platforms.",
      category: "Social Media",
      date: "June 2, 2023",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    },
    {
      id: 3,
      title: "The Power of Authentic Copywriting",
      excerpt: "Why being genuine in your marketing messages drives better results and builds trust.",
      category: "Copywriting",
      date: "June 20, 2023",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    },
    {
      id: 4,
      title: "How to Develop a Content Strategy That Converts",
      excerpt: "A step-by-step guide to creating content that turns readers into customers.",
      category: "Marketing",
      date: "July 8, 2023",
      image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=1468&ixlib=rb-4.0.3",
    },
    {
      id: 5,
      title: "Building Your Personal Brand Online",
      excerpt: "Strategies for entrepreneurs to establish a powerful presence in the digital space.",
      category: "Branding",
      date: "July 25, 2023",
      image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3",
    },
    {
      id: 6,
      title: "Email Marketing Techniques That Actually Work",
      excerpt: "How to craft newsletters and email sequences that your subscribers will look forward to opening.",
      category: "Marketing",
      date: "August 10, 2023",
      image: "https://images.unsplash.com/photo-1550000000000-10000?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3",
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-beige-50">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-center mb-6">
            The Blog
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Marketing insights, storytelling tips, and strategies to help you grow your business authentically.
          </p>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mt-12">
            <a href="#" className="text-lg font-display uppercase hover:text-primary/70 transition-colors">
              All
            </a>
            <div className="h-8 w-px bg-beige-200 hidden md:block"></div>
            <a href="#" className="text-lg font-display uppercase hover:text-primary/70 transition-colors">
              copywriting
            </a>
            <div className="h-8 w-px bg-beige-200 hidden md:block"></div>
            <a href="#" className="text-lg font-display uppercase hover:text-primary/70 transition-colors">
              strategy
            </a>
            <div className="h-8 w-px bg-beige-200 hidden md:block"></div>
            <a href="#" className="text-lg font-display uppercase hover:text-primary/70 transition-colors">
              marketing
            </a>
            <div className="h-8 w-px bg-beige-200 hidden md:block"></div>
            <a href="#" className="text-lg font-display uppercase hover:text-primary/70 transition-colors">
              social media
            </a>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                category={post.category}
                date={post.date}
                image={post.image}
                url={`/blog/${post.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSignup />
      <Footer />
    </>
  );
};

export default Blog;
