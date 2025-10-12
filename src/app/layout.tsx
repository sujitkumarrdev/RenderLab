import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./Fonts/WEB/css/melodrama.css";
import ClientLayoutWrapper from "@/app/ClientLayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://labshader.vercel.app"),
  
  title: "RenderLab - GLSL & React Three Fiber Shader Gallery",
  description:
    "RenderLab is a curated gallery of shaders and interactive visuals, built with GLSL, WebGL, and React Three Fiber. Explore live demos and source code on GitHub.",
  keywords: [
    "GLSL Shaders",
    "React Three Fiber",
    "WebGL",
    "Shader Gallery",
    "3D Visuals",
    "Creative Coding",
    "Postprocessing Effects",
    "Interactive Graphics",
  ],
  authors: [{ name: "Sujit Kumar" }],
  openGraph: {
    title: "RenderLab - GLSL & React Three Fiber Shader Gallery",
    description:
      "Curated collection of shaders built with GLSL, WebGL, and React Three Fiber. Live previews with open-source code on GitHub.",
    url: "https://labshader.vercel.app/",
    siteName: "RenderLab",
    images: [
      {
        url: "/renderlab-logo.png",
        width: 1200,
        height: 630,
        alt: "RenderLab Shader Gallery",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RenderLab - GLSL & React Three Fiber Shader Gallery",
    description:
      "Explore interactive GLSL & R3F shaders with live previews and GitHub code.",
    images: ["/renderlab-logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative w-full min-h-screen`}
      >
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
