import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SpringBoot DevHub - Your Central Hub for Spring Boot Development",
  description: "Explore templates, code snippets, guides, and resources for Spring Boot development. Your one-stop destination for learning and building with Spring Boot.",
  keywords: ["Spring Boot", "Java", "Development", "Templates", "Snippets", "Guides", "Tutorials"],
  authors: [{ name: "SpringBoot DevHub Team" }],
  creator: "SpringBoot DevHub",
  publisher: "SpringBoot DevHub",
  robots: "index, follow",
  openGraph: {
    title: "SpringBoot DevHub - Your Central Hub for Spring Boot Development",
    description: "Explore templates, code snippets, guides, and resources for Spring Boot development.",
    url: "https://springboothub.dev",
    siteName: "SpringBoot DevHub",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SpringBoot DevHub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpringBoot DevHub - Your Central Hub for Spring Boot Development",
    description: "Explore templates, code snippets, guides, and resources for Spring Boot development.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
