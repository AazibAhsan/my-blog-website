import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { PostGrid } from "@/components/blog/PostGrid";
import { CategoryList } from "@/components/blog/CategoryList";
import { NewsletterForm } from "@/components/blog/NewsletterForm";
import { featuredPost } from "@/data/posts";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <FeaturedPost post={featuredPost} />
        <CategoryList />
        <PostGrid />
        <NewsletterForm />
      </main>
      <Footer />
    </div>
  );
}