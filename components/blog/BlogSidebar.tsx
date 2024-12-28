import { Card } from "@/components/ui/card";
import { categories } from "@/data/categories";
import { authors } from "@/data/authors";
import Link from "next/link";
import Image from "next/image";

export function BlogSidebar() {
  return (
    <aside className="space-y-8">
      <Card className="p-6">
        <h2 className="mb-4 text-lg font-semibold">Categories</h2>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className="block text-muted-foreground hover:text-foreground"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h2 className="mb-4 text-lg font-semibold">Featured Authors</h2>
        <div className="space-y-4">
          {authors.slice(0, 3).map((author) => (
            <Link
              key={author.id}
              href={`/authors/${author.id}`}
              className="flex items-center space-x-3 text-sm"
            >
              <Image
                src={author.avatar}
                alt={author.name}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
              <div>
                <p className="font-medium">{author.name}</p>
                <p className="text-muted-foreground">{author.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </Card>
    </aside>
  );
}