import { authors } from "@/data/authors";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export function AuthorGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {authors.map((author) => (
        <Link key={author.id} href={`/authors/${author.id}`}>
          <Card className="group p-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={author.avatar} alt={author.name} />
                <AvatarFallback>{author.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold group-hover:text-primary">
                  {author.name}
                </h3>
                <p className="text-sm text-muted-foreground">{author.role}</p>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}