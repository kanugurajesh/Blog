import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Post } from "@/lib/posts";

export function PostCard({ post }: { post: Post }) {
  return (
    <Card className="flex flex-col hover:shadow-lg transition-shadow">
      <CardHeader className="p-0">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <div className="flex items-center gap-2 mb-4">
          <Avatar className="h-8 w-8">
            <AvatarImage src={post.author.image} alt={post.author.name} />
            <AvatarFallback>{post.author.initials}</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium">{post.author.name}</p>
            <div className="flex items-center text-muted-foreground gap-2">
              <Clock className="h-3 w-3" />
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h2>
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Link href={`/posts/${post.id}`} className="w-full">
          <Button className="w-full" variant="outline">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}