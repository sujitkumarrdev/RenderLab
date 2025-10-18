// app/page.tsx
import Hero from "./Components/ui/Hero";
import ProjectGrid from "./Components/card/ProjectGrid";
import Head from "next/head";

export default function HomePage() {
  const siteTitle = "KojiLab - GLSL & React Three Fiber Shader Gallery";
  const siteDescription = "Explore interactive shaders built with GLSL and R3F.";
  const siteUrl = "https://kojilab.vercel.app/";
  const siteImage = "https://kojilab.vercel.app/kojilab-logo.png";
  const fbAppId = "YOUR_FACEBOOK_APP_ID"; 

  return (
    <>
      <Head>
        {/* Basic */}
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="KojiLab" />
        <meta property="og:image" content={siteImage} />
        <meta property="og:image:alt" content="KojiLab Shader Gallery" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:updated_time"
          content={Math.floor(Date.now() / 1000).toString()}
        />

        {/* Facebook App ID */}
        <meta property="fb:app_id" content={fbAppId} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={siteImage} />
      </Head>

      <main className="min-h-screen">
        <Hero />
        <ProjectGrid />
      </main>
    </>
  );
}
