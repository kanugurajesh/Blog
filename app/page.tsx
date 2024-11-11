import { BookOpen } from "lucide-react";
import { PostCard } from "@/components/post-card";
import { posts } from "@/lib/posts";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container px-4 py-16 mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Welcome to TechInsights
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover in-depth articles about technology, development, and innovation. Stay ahead with our expert insights and practical guides.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}