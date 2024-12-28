import { Clock } from "lucide-react";
import { Post } from "@/types/blog";

interface BlogPostProps {
  post: Post;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="prose prose-gray dark:prose-invert mx-auto max-w-3xl">
      <div className="mb-8 text-center">
        <h1 className="mb-4">{post.title}</h1>
        <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            {post.readTime}
          </span>
        </div>
      </div>
      
      <img
        src={post.image}
        alt={post.title}
        className="mb-8 aspect-[21/9] rounded-lg object-cover"
      />

      <p className="lead">{post.excerpt}</p>

      {/* This would be replaced with actual blog content */}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </article>
  );
}