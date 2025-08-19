import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import FastImage from "./FastImage";

interface BlogCardProps {
  title: string;
  author: string;
  readTime: string;
  image: string;
  slug: string;
  priority?: boolean;
}

const BlogCard = ({ title, author, readTime, image, slug, priority = false }: BlogCardProps) => {
  return (
    <Link to={`/blog/${slug}`}>
      <Card className="group overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-warm cursor-pointer">
        <div className="aspect-[16/9] overflow-hidden">
          <FastImage 
            src={image} 
            alt={title}
            className=" group-hover:scale-105 transition-transform duration-300"
            priority={priority}
            timeout={2000} // 2 second timeout for blog images
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 h-14">
            {title}
          </h3>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>By {author}</span>
            <span>{readTime}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;