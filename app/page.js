
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10 px-4 md:px-10 py-10 max-w-6xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold tracking-tight text-blue-700">SpringBoot DevHub</h1>
        <p className="text-lg text-gray-600">Your central hub for learning and building with Spring Boot — templates, guides, snippets & more.</p>
        <div className="flex justify-center gap-4 pt-4">
          <Button asChild>
            <Link href="/templates">Explore Templates</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/snippets">View Snippets</Link>
          </Button>
        </div>
      </section>

      <Separator />

      {/* Feature Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            title: "🚀 Templates",
            href: "/templates",
            desc: "Ready-to-use Spring Boot starter projects (CRUD, Auth, REST, etc.)",
          },
          {
            title: "📄 Code Snippets",
            href: "/snippets",
            desc: "Common Spring Boot patterns, annotations, and boilerplate.",
          },
          {
            title: "📘 Guides",
            href: "/guides",
            desc: "Step-by-step walkthroughs for beginners and pros.",
          },
          {
            title: "🌐 GitHub Explorer",
            href: "/github-projects",
            desc: "Discover top Spring Boot repos curated by topic.",
          },
          {
            title: "📰 News & Updates",
            href: "/news",
            desc: "Latest trends and news from Spring ecosystem.",
          },
        ].map(({ title, href, desc }) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>{desc}</p>
              <div className="mt-4">
                <Button variant="link" asChild>
                  <Link href={href}>Visit</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}
