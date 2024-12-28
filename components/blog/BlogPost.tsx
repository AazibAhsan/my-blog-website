import { Clock } from "lucide-react";
import { Post } from "@/types/blog";
import Image from "next/image";

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

      <Image
        src={post.image}
        alt={post.title}
        height={320}
        width={740}
        className="mb-8 aspect-[21/9] rounded-lg object-cover"
      />

      <p className="lead">{post.excerpt}</p>

      {/* This would be replaced with actual blog content */}
      <p>
       🌐 A Comprehensive Guide to Building Modern Web Applications with
        Next.js Welcome to the ultimate guide on building cutting-edge web
        applications using Next.js, a powerful React framework designed for
        server-rendered and static web applications. Whether you&apos;re a beginner
        or an experienced developer, this guide covers everything you need to
        create modern, high-performance web applications. Let&apos;s dive in! 🚀
      </p>
    </article>
  );
}
