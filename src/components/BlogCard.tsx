
interface BlogCardProps {
  key: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  url?: string;
}

const BlogCard = ({ title, excerpt, category, date, image, url }: BlogCardProps) => {
  return (
    <div className="bg-white border border-beige-100 overflow-hidden transition-all duration-300 hover:shadow-sm">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">{category}</span>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <h3 className="text-xl font-display mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{excerpt}</p>
        <a href={url || "#"} className="text-black font-medium uppercase text-xs tracking-wider hover:text-primary/70 transition-colors">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
