
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSignup = () => {
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
    <div className="bg-beige-100 py-16">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-display mb-4">
          Want to create a genuine connection with your audience?
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
          Join our newsletter to receive storytelling tips, copywriting advice, and actionable insights
          that help you cut through the digital noise and connect with your audience.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="px-4 py-3 border border-beige-200 focus:outline-none focus:ring-1 focus:ring-primary/50 flex-grow"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary whitespace-nowrap"
          >
            {isLoading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSignup;
