 import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/app/Lib/projectData";
import Back_Code_Buttons from "@/app/Components/ui/Buttons";

interface ProjectPageProps {
  params: { slug: string };
}

 export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Not Found | RenderLab" };

  const absoluteUrl = `https://labrender.vercel.app/projects/${project.slug}`;
  const absoluteImage = `https://labrender.vercel.app/${project.preview}`;

  return {
    title: `${project.title} | RenderLab`,
    description: project.description,
    openGraph: {
      title: `${project.title} | RenderLab`,
      description: project.description,
      url: absoluteUrl,
      siteName: "RenderLab",
      images: [
        {
          url: absoluteImage,
          width: 1200,
          height: 630,
          alt: `${project.title} - RenderLab Shader`,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | RenderLab`,
      description: project.description,
      images: [absoluteImage],
    },
  };
}

 export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  const Component = project.component;
  return (
    <main className="relative w-full h-screen flex items-center justify-center bg-black">
      {Component ? (
        <Component />
      ) : (
        <div className="text-gray-400">🚫 Shader not available</div>
      )}
      <Back_Code_Buttons project={project} />
    </main>
  );
}
