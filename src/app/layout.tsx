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
    "KojiLab is a curated gallery of shaders built with GLSL, WebGL, and React Three Fiber.",

  openGraph: {
    title: "KojiLab - GLSL & React Three Fiber Shader Gallery",
    description: "Explore interactive shaders built with GLSL and R3F.",
    images: [
      {
        url: "/kojilab-logo.png",
        width: 1200,
        height: 630,
        alt: "KojiLab Shader Gallery",
      },
    ],
    siteName: "KojiLab",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "KojiLab - GLSL & React Three Fiber Shader Gallery",
    description: "GLSL + React Three Fiber shader gallery.",
    images: ["/kojilab-logo.png"],
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
