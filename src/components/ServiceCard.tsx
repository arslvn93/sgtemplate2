
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => {
  return (
    <div className="group bg-white border border-beige-100 p-8 transition-all duration-300 hover:shadow-md hover:border-beige-200">
      <div className="flex flex-col h-full">
        <div className="text-primary mb-4">{icon}</div>
        <h3 className="text-xl font-display mb-3">{title}</h3>
        <p className="text-muted-foreground text-sm mb-5 flex-grow">{description}</p>
        <Link
          to={link}
          className="mt-auto inline-flex items-center text-sm font-medium text-primary group-hover:translate-x-1 transition-transform"
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 h-4 w-4"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
