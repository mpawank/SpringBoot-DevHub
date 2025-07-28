"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { 
  Rocket, 
  Code, 
  BookOpen, 
  Github2, 
  Newspaper, 
  Sparkles, 
  Zap, 
  Shield, 
  Users, 
  Star,
  ArrowRight,
  Download,
  ExternalLink,
  CheckCircle,
  TrendingUp,
  Heart,
  GitBranch,
  Mail,
  Linkedin,
  Twitter
} from "lucide-react";

export default function HomePage() {
  return (
    <TooltipProvider>
      <div className="min-h-screen">
        {/* Hero Section with Enhanced Animations */}
        <section className="relative overflow-hidden px-4 md:px-10 py-20 max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10 rounded-3xl blur-3xl animate-pulse"></div>
          
          <div className="relative text-center space-y-8 animate-fade-in">
            <div className="flex justify-center mb-6">
              <Badge variant="secondary" className="animate-bounce">
                <Sparkles className="w-4 h-4 mr-2" />
                Spring Boot 3.x Ready
              </Badge>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent animate-gradient">
              SpringBoot DevHub
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your central hub for learning and building with Spring Boot — 
              <span className="font-semibold text-blue-600 dark:text-blue-400"> templates</span>, 
              <span className="font-semibold text-purple-600 dark:text-purple-400"> guides</span>, 
              <span className="font-semibold text-indigo-600 dark:text-indigo-400"> snippets</span> & more.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <Button size="lg" className="group animate-fade-in-up" asChild>
                <Link href="/templates" className="flex items-center">
                  <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Explore Templates
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="group animate-fade-in-up animation-delay-200" asChild>
                <Link href="/snippets" className="flex items-center">
                  <Code className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  View Snippets
                </Link>
              </Button>
            </div>

            {/* GitHub Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 animate-fade-in-up animation-delay-400">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-green-500 hover:border-green-600"
                    asChild
                  >
                    <Link 
                      href="https://github.com/mpawank/SpringBoot-DevHub" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Star className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                      Give us a Star
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Star our repository on GitHub</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="group bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white border-purple-500 hover:border-purple-600"
                    asChild
                  >
                    <Link 
                      href="https://github.com/mpawank/SpringBoot-DevHub" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <GitBranch className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                      Contribute
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Contribute to our open source project</p>
                </TooltipContent>
              </Tooltip>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                { icon: Download, label: "Templates", value: "50+", color: "text-blue-600" },
                { icon: Code, label: "Snippets", value: "200+", color: "text-purple-600" },
                { icon: Users, label: "Developers", value: "10K+", color: "text-indigo-600" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center animate-fade-in-up" style={{ animationDelay: `${(index + 3) * 200}ms` }}>
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-16" />

        {/* Feature Grid with Enhanced Cards */}
        <section className="px-4 md:px-10 py-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprehensive resources to accelerate your Spring Boot development
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "🚀 Templates",
                href: "/templates",
                desc: "Ready-to-use Spring Boot starter projects with CRUD, Auth, REST APIs, and more.",
                icon: Rocket,
                color: "from-blue-500 to-blue-600",
                features: ["CRUD Operations", "Authentication", "REST APIs", "Microservices"]
              },
              {
                title: "📄 Code Snippets",
                href: "/snippets",
                desc: "Common Spring Boot patterns, annotations, and boilerplate code.",
                icon: Code,
                color: "from-purple-500 to-purple-600",
                features: ["Annotations", "Configuration", "Security", "Database"]
              },
              {
                title: "📘 Guides",
                href: "/guides",
                desc: "Step-by-step walkthroughs for beginners and advanced developers.",
                icon: BookOpen,
                color: "from-green-500 to-green-600",
                features: ["Getting Started", "Best Practices", "Advanced Topics", "Troubleshooting"]
              },
              {
                title: "🌐 GitHub Explorer",
                href: "/github-projects",
                desc: "Discover top Spring Boot repositories curated by topic and popularity.",
                icon: Github2,
                color: "from-gray-500 to-gray-600",
                features: ["Trending Repos", "Topic Filtering", "Star Rankings", "Contributions"]
              },
              {
                title: "📰 News & Updates",
                href: "/news",
                desc: "Latest trends, updates, and news from the Spring ecosystem.",
                icon: Newspaper,
                color: "from-orange-500 to-orange-600",
                features: ["Release Notes", "Community News", "Tutorials", "Events"]
              },
              {
                title: "⚡ Performance Tools",
                href: "/tools",
                desc: "Tools and utilities to optimize your Spring Boot applications.",
                icon: Zap,
                color: "from-red-500 to-red-600",
                features: ["Profiling", "Monitoring", "Testing", "Deployment"]
              }
            ].map((feature, index) => (
              <HoverCard key={feature.title} openDelay={200}>
                <HoverCardTrigger asChild>
                  <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 animate-fade-in-up" 
                        style={{ animationDelay: `${index * 100}ms` }}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <feature.icon className={`w-8 h-8 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`} />
                        <Badge variant="outline" className="text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.desc}
                      </p>
                      <div className="space-y-2">
                        {feature.features.map((item, idx) => (
                          <div key={idx} className="flex items-center text-xs text-muted-foreground">
                            <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                            {item}
                          </div>
                        ))}
                      </div>
                      <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" asChild>
                        <Link href={feature.href} className="flex items-center justify-center">
                          Explore
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-semibold">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    <div className="flex items-center pt-2">
                      <Button size="sm" asChild>
                        <Link href={feature.href}>Learn More</Link>
                      </Button>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* Quick Start Section */}
        <section className="px-4 md:px-10 py-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Start
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Get started with Spring Boot in minutes
            </p>
          </div>
          
          <Tabs defaultValue="templates" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="templates" className="flex items-center">
                <Rocket className="w-4 h-4 mr-2" />
                Templates
              </TabsTrigger>
              <TabsTrigger value="snippets" className="flex items-center">
                <Code className="w-4 h-4 mr-2" />
                Snippets
              </TabsTrigger>
              <TabsTrigger value="guides" className="flex items-center">
                <BookOpen className="w-4 h-4 mr-2" />
                Guides
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="templates" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-green-600" />
                      Basic CRUD Template
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Complete CRUD operations with Spring Data JPA and REST controllers
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Spring Boot 3.x</Badge>
                      <Button size="sm" asChild>
                        <Link href="/templates/crud">Get Template</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" />
                      Authentication Template
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      JWT-based authentication with Spring Security
                    </p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Spring Security</Badge>
                      <Button size="sm" asChild>
                        <Link href="/templates/auth">Get Template</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="snippets" className="mt-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Common Annotations</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between p-2 bg-muted rounded">
                        <code>@RestController</code>
                        <Badge variant="outline">Controller</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted rounded">
                        <code>@Service</code>
                        <Badge variant="outline">Service</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted rounded">
                        <code>@Repository</code>
                        <Badge variant="outline">Data</Badge>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Configuration</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between p-2 bg-muted rounded">
                        <code>@Configuration</code>
                        <Badge variant="outline">Config</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted rounded">
                        <code>@Bean</code>
                        <Badge variant="outline">Bean</Badge>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            
            <TabsContent value="guides" className="mt-8">
              <div className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">Getting Started with Spring Boot</h4>
                        <p className="text-sm text-muted-foreground">Learn the basics of Spring Boot development</p>
                      </div>
                      <Button size="sm" asChild>
                        <Link href="/guides/getting-started">Read Guide</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">Building REST APIs</h4>
                        <p className="text-sm text-muted-foreground">Create robust REST APIs with Spring Boot</p>
                      </div>
                      <Button size="sm" asChild>
                        <Link href="/guides/rest-apis">Read Guide</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Community Section */}
        <section className="px-4 md:px-10 py-16 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Connect with fellow Spring Boot developers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Github2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle>GitHub</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Contribute to our open-source templates and snippets
                </p>
                <Button variant="outline" asChild>
                  <Link href="https://github.com/mpawank/SpringBoot-DevHub" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Join Us
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle>Discord</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Chat with developers and get help in real-time
                </p>
                <Button variant="outline" asChild>
                  <Link href="https://discord.gg/springboothub" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Join Server
                  </Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                  <Newspaper className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle>Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Stay updated with the latest Spring Boot news
                </p>
                <Button variant="outline" asChild>
                  <Link href="/newsletter" className="flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Subscribe
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 mt-20">
          <div className="max-w-6xl mx-auto px-4 md:px-10 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand Section */}
              <div className="md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                    SpringBoot DevHub
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
                  Your central hub for learning and building with Spring Boot. 
                  Discover templates, guides, snippets, and everything you need to accelerate your development.
                </p>
                <div className="flex space-x-4">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-10 h-10 p-0" asChild>
                        <Link href="https://github.com/mpawank/SpringBoot-DevHub" target="_blank" rel="noopener noreferrer">
                          <Github2 className="w-5 h-5" />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-10 h-10 p-0" asChild>
                        <Link href="mailto:contact@springboothub.dev">
                          <Mail className="w-5 h-5" />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Email</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-10 h-10 p-0" asChild>
                        <Link href="https://linkedin.com/in/mpawankumar" target="_blank" rel="noopener noreferrer">
                          <Linkedin className="w-5 h-5" />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-10 h-10 p-0" asChild>
                        <Link href="https://twitter.com/mpawankumar" target="_blank" rel="noopener noreferrer">
                          <Twitter className="w-5 h-5" />
                        </Link>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Twitter</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/templates" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Templates
                    </Link>
                  </li>
                  <li>
                    <Link href="/snippets" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Code Snippets
                    </Link>
                  </li>
                  <li>
                    <Link href="/guides" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="/news" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      News & Updates
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Community */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Community</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="https://github.com/mpawank/SpringBoot-DevHub" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Contribute
                    </Link>
                  </li>
                  <li>
                    <Link href="https://discord.gg/springboothub" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Discord
                    </Link>
                  </li>
                  <li>
                    <Link href="/newsletter" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Newsletter
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <p className="text-gray-600 dark:text-gray-300">
                    © 2025 SpringBoot DevHub. All rights reserved.
                  </p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-gray-600 dark:text-gray-300">
                    Made with <Heart className="w-4 h-4 inline text-red-500 animate-pulse" /> by{" "}
                    <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      M Pawan Kumar
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}
