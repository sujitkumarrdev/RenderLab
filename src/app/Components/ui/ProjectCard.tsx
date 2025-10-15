import Link from "next/link";
import Image from "next/image";
import { Project } from "@/app/Lib/projectData";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative overflow-hidden rounded-2xl border border-white/20 hover:border-cyan-400 transition-all bg-[#1E1E1E] shadow-lg hover:shadow-cyan-400/30"
    >
      <div className="relative w-full h-64 sm:h-80">
        <Image
          src={project.preview}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover object-center opacity-90 group-hover:opacity-100 transition duration-300"
          unoptimized={false}
          priority
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#eaeaea]">{project.title}</h3>
        <p className="text-sm text-gray-400 line-clamp-2">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
