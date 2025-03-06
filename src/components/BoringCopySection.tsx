
import React from "react";
import { Link } from "react-router-dom";

const BoringCopySection = () => {
  return (
    <section className="py-16 bg-accent border-t border-b border-beige-200">
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
            <Link to="/services" className="btn-outline text-black uppercase self-start">
              EXPLORE SERVICES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoringCopySection;
