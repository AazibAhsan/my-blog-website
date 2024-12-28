import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/data/categories";

export function CategoryList() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="mb-8 text-2xl font-bold">Popular Categories</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Link key={category.slug} href={`/categories/${category.slug}`}>
            <Badge variant="secondary" className="text-sm">
              {category.name}
            </Badge>
          </Link>
        ))}
      </div>
    </section>
  );
}