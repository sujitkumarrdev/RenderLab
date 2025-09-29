import { notFound } from "next/navigation";
import { projects } from "@/app/Lib/projectData";
import Back_Code_Buttons from "@/app/Components/ui/Buttons";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);
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

export default async function ProjectPage({ params }: Props) {
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
