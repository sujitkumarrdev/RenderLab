import { projects } from "@/app/Lib/projectData";
import ProjectCard from "@/app/Components/card/ProjectCard";

export default function ProjectGrid() {
  return (
    <section className="py-2 px-5 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
      {projects.map((p) => (
        <ProjectCard key={p.slug} project={p} />
      ))}
    </section>
  );
}
