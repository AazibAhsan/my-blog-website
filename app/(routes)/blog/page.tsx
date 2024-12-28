import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PostGrid } from "@/components/blog/PostGrid";
import { BlogSidebar } from "@/components/blog/BlogSidebar";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
          <div>
            <h1 className="mb-8 text-4xl font-bold">Latest Posts</h1>
            <PostGrid />
          </div>
          <BlogSidebar />
        </div>
      </main>
      <Footer />
    </div>
  );
}