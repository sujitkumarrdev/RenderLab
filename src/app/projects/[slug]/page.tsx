import { notFound } from "next/navigation";
import { projects } from "@/app/Lib/projectData";
import Back_Code_Buttons from "@/app/Components/ui/Buttons";

interface ProjectPageProps {
  params: Promise<{ slug: string }>; // 👈 Yeh change karo
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params; // 👈 await lagao
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };

  return {
    title: `${project.title} | RenderLab`,
    description: project.description,
    openGraph: {
      title: `${project.title} | RenderLab`,
      description: project.description,
      images: [project.preview],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params; // 👈 await lagao
  const project = projects.find((p) => p.slug === slug);
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