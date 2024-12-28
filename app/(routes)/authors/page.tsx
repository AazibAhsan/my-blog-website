import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AuthorGrid } from "@/components/authors/AuthorGrid";

export default function AuthorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold">Our Authors</h1>
        <AuthorGrid />
      </main>
      <Footer />
    </div>
  );
}