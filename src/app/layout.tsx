import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./Fonts/WEB/css/melodrama.css";
import ClientLayoutWrapper from "@/app/ClientLayoutWrapper";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://kojilab.vercel.app"),
  title: "KojiLab - GLSL & React Three Fiber Shader Gallery",
  description:
    "KojiLab is a curated gallery of world-class shaders built with GLSL, WebGL, and React Three Fiber.",
  keywords: [
    "GLSL",
    "React Three Fiber",
    "WebGL",
    "Shader Gallery",
    "Three.js",
    "3D Shader",
    "Procedural Graphics",
  ],
  authors: [{ name: "Sujit Koji", url: "https://kojilab.vercel.app" }],
  creator: "Sujit Koji",
  publisher: "KojiLab",
  alternates: {
    canonical: "https://kojilab.vercel.app",
  },
  other: {
    "google-site-verification": "DmHr5O0EiL-50MeWb7EUjAFk_5nVGzYuN06BKqusa7g",
  },
  openGraph: {
    title: "KojiLab - GLSL & React Three Fiber Shader Gallery",
    description: "Explore cinematic shaders built with GLSL and React Three Fiber.",
    url: "https://kojilab.vercel.app",
    siteName: "KojiLab",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://kojilab.vercel.app/kojilab-logo.png",
        width: 1200,
        height: 630,
        alt: "KojiLab Shader Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KojiLab - GLSL & React Three Fiber Shader Gallery",
    description: "A curated shader gallery using GLSL, WebGL, and React Three Fiber.",
    images: ["https://kojilab.vercel.app/kojilab-logo.png"],
    creator: "@sujitkoji",
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
