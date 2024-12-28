import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { Post } from "@/types/blog";

interface FeaturedPostProps {
  post: Post;
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{post.title}</h1>
          <p className="text-lg text-muted-foreground">{post.excerpt}</p>
          <div className="flex items-center space-x-4 text-sm">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {post.readTime}
            </span>
          </div>
          <Link
            href="/blog/featured"
            className="inline-flex items-center space-x-2 text-primary hover:underline"
          >
            <span>Read more</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
          <img
            src={post.image}
            alt={post.title}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}