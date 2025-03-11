
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { pageContent } from "@/data/pageContent";

const FreebieSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { freebie } = pageContent;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      toast({
        title: "Success!",
        description: "You've been subscribed to our newsletter.",
        duration: 5000
      });
    }, 1000);
  };
  
  return (
    <section className="py-16 bg-white" id="freebie">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl md:text-3xl font-display mb-2">
              {freebie.title}
            </h2>
            {freebie.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
            <div className="mt-2">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  placeholder="Email address" 
                  className="bg-accent border border-beige-200 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/20" 
                  required 
                />
                <button 
                  type="submit" 
                  disabled={isLoading} 
                  className="bg-black text-white px-5 py-3 uppercase text-xs tracking-widest hover:bg-black/90 transition-colors"
                >
                  {isLoading ? freebie.loadingText : freebie.buttonText}
                </button>
              </form>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img alt="Tablet mockup" className="w-full max-w-sm" src={freebie.image} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreebieSection;
