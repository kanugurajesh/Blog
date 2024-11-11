import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { posts } from "@/lib/posts";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export default function PostPage({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === Number(params.id));

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" className="inline-block mb-8">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Avatar className="h-12 w-12">
              <AvatarImage src={post.author.image} alt={post.author.name} />
              <AvatarFallback>{post.author.initials}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">{post.author.name}</h3>
              <div className="flex items-center text-muted-foreground gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-6 mb-4" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-4 mb-3" {...props} />,
                p: ({node, ...props}) => <p className="mb-4 leading-relaxed" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 mb-4" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 mb-4" {...props} />,
                li: ({node, ...props}) => <li className="mb-2" {...props} />,
                strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
                blockquote: ({node, ...props}) => (
                  <blockquote className="border-l-4 border-primary pl-4 italic my-4" {...props} />
                ),
                code: ({node, ...props}) => (
                  <code className="bg-muted px-1.5 py-0.5 rounded text-sm" {...props} />
                ),
                pre: ({node, ...props}) => (
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto my-4" {...props} />
                ),
              }}
            >
              {post.content.trim()}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </article>
  );
}