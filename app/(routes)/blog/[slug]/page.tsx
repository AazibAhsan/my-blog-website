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

// Define the possible slugs for static export
export async function generateStaticParams() {
  // Generate slugs based on the `recentPosts` array
  return recentPosts.map((_, index) => ({
    slug: (index + 1).toString(), // Convert index to string (e.g., "1", "2", etc.)
  }));
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
