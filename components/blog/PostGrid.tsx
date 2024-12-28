import { PostCard } from "@/components/blog/PostCard";
import { recentPosts } from "@/data/posts";

export function PostGrid() {
  return (
    <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {recentPosts.map((post, index) => (
        <PostCard key={index} post={post} index={index} />
      ))}
    </section>
  );
}