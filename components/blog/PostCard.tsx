import { Clock } from "lucide-react";
import Link from "next/link";
import { Post } from "@/types/blog";

interface PostCardProps {
  post: Post;
  index: number;
}

export function PostCard({ post, index }: PostCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-lg border bg-card">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{post.title}</h3>
        <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm">
          <span>{post.author}</span>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
      <Link href={`/blog/${index + 1}`} className="absolute inset-0">
        <span className="sr-only">View post</span>
      </Link>
    </article>
  );
}