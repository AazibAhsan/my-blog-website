import { Card } from "@/components/ui/card";
import { categories } from "@/data/categories";
import Link from "next/link";

export function CategoryGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <Link key={category.slug} href={`/categories/${category.slug}`}>
          <Card className="group h-48 overflow-hidden">
            <div className="flex h-full flex-col justify-between p-6">
              <h3 className="text-xl font-semibold group-hover:text-primary">
                {category.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                Explore articles about {category.name}
              </p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}