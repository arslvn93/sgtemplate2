
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const FreebieSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

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
        duration: 5000,
      });
    }, 1000);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl md:text-4xl font-display mb-2">
              Want to create a genuine connection with your audience?
            </h2>
            <p className="text-muted-foreground">
              Learn how to write better <i>stories</i> and make scroll-stopping visuals with our<i> 60 minute live training!</i>
            </p>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eiusmod tempor incididunt ut labore et dolore, magna aliqua. Faucibus ornare suspendisse sed nisi. Platea dictumst vestibulum rhoncus. Elementum curabitur vitae 60 velit sodales!
            </p>
            <div className="mt-2">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address" 
                  className="bg-accent border border-beige-200 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/20"
                  required
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="bg-black text-white px-5 py-3 uppercase text-xs tracking-widest hover:bg-black/90 transition-colors"
                >
                  {isLoading ? "Subscribing..." : "GET INSTANT ACCESS"}
                </button>
              </form>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611926653456-e0109c2710e3?auto=format&fit=crop&q=80&w=630&ixlib=rb-4.0.3"
                alt="Laptop mockup" 
                className="max-w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3"
                alt="Phone mockup"
                className="absolute -bottom-10 -right-10 w-48 z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreebieSection;
