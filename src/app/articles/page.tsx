"use client";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ArticlesContent } from "@/components/articles/articles-content";
import { BreadcrumbBar } from "@/components/BreadcrumbBar";

export default function ArticlesPage() {
  const { isSignedIn } = useUser();
  const router = useRouter();
  if (!isSignedIn) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-muted-foreground gap-4">
        <span>Debes iniciar sesión para ver los artículos.</span>
        <Button onClick={() => router.push("/sign-in")}>Iniciar Sesión</Button>
      </div>
    );
  }
  return <div className="mt-6"><BreadcrumbBar /><ArticlesContent /></div>;
} 