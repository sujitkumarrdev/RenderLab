// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";
 import { projects } from "@/app/Lib/projectData";
import Back_Code_Buttons from "@/app/Components/ui/Buttons";
import Head from "next/head";

interface ProjectPageProps {
  params: Promise<{ slug: string }>; // 👈 await ke liye Promise
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params; // 👈 await lagaya
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const Component = project.component;

  // OG / Twitter meta values
  const siteTitle = `${project.title} | RenderLab`;
  const siteDescription = project.description;
  const siteUrl = `https://labrender.vercel.app/projects/${project.slug}`;
  const siteImage = `https://labrender.vercel.app/previews/${project.preview.replace(/^\/?previews\//, "")}`;
  const fbAppId = "YOUR_FACEBOOK_APP_ID"; // Optional

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="RenderLab" />
        <meta property="og:image" content={siteImage} />
        <meta property="og:image:alt" content={`${project.title} - RenderLab Shader`} />
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

      <main className="relative w-full h-screen flex items-center justify-center bg-black">
        {Component ? (
          <Component />
        ) : (
          <div className="text-gray-400">🚫 Shader not available</div>
        )}
        <Back_Code_Buttons project={project} />
      </main>
    </>
  );
}
