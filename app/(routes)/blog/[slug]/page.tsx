import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BlogPost } from "@/components/blog/BlogPost";
import { recentPosts } from "@/data/posts";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = recentPosts[parseInt(params.slug) - 1];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <BlogPost post={post} />
      </main>
      <Footer />
    </div>
  );
}