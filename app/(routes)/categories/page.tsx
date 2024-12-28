import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CategoryGrid } from "@/components/categories/CategoryGrid";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold">Categories</h1>
        <CategoryGrid />
      </main>
      <Footer />
    </div>
  );
}