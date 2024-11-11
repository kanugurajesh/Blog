import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-2xl font-bold mb-4">Post not found</h1>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}