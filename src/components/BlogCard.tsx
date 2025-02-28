
import { Link } from "react-router-dom";

interface BlogCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
}

const BlogCard = ({ image, category, title, excerpt, date, slug }: BlogCardProps) => {
  return (
    <article className="group">
      <Link to={`/blog/${slug}`} className="block overflow-hidden">
        <div className="relative h-[300px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="mt-4">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">
          {category} • {date}
        </span>
        <h3 className="mt-2 text-xl font-display">
          <Link to={`/blog/${slug}`} className="hover:text-primary/80 transition-colors">
            {title}
          </Link>
        </h3>
        <p className="mt-2 text-muted-foreground text-sm line-clamp-2">{excerpt}</p>
        <Link
          to={`/blog/${slug}`}
          className="mt-3 inline-block text-sm font-medium text-primary/90 hover:text-primary/70 transition-colors"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
