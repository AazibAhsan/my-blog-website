import { Post } from "@/types/blog";

export const featuredPost: Post = {
  title: "The Future of Web Development",
  excerpt: "Exploring the latest trends and technologies shaping the future of web development...",
  author: "Sarah Johnson",
  date: "March 24, 2024",
  readTime: "5 min read",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80",
};

export const recentPosts: Post[] = [
  {
    title: "Getting Started with Next.js 14",
    excerpt: "A comprehensive guide to building modern web applications with Next.js...",
    author: "Michael Chen",
    date: "March 22, 2024",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
  },
  {
    title: "Mastering Tailwind CSS",
    excerpt: "Learn how to create beautiful, responsive designs using Tailwind CSS...",
    author: "Emma Wilson",
    date: "March 20, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?auto=format&fit=crop&q=80",
  },
  {
    title: "The Art of Clean Code",
    excerpt: "Best practices for writing maintainable and scalable code...",
    author: "David Brown",
    date: "March 18, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80",
  },
];