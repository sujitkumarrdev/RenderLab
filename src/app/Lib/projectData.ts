 import type { ComponentType } from "react";
import WaterOcean from "../Lab/OceanWater/scene";
import SpectralCore from "../Lab/SpectralCore/Scene"
import Particles from "../Lab/ParticleShader/Scene";
import Galaxy from "../Lab/Galaxy/Scene"

 export interface Project {
  title: string;
  slug: string;
  description: string;
  preview: string;
  github: string;
  component?: ComponentType;
}

export const projects: Project[] = [
  
  {
    title: "Galaxy",
    slug: "galaxy",
    description: "A cinematic galaxy background with stars, and glowing core, built in R3F.",
    preview: "/previews/Galaxy.png",
    github: "https://github.com/sujitkoji/RenderLab/tree/main/src/app/Lab/Galaxy",
    component: Galaxy,
  },
  {
    title: "Water Ocean Shader",
    slug: "water-ocean",
    description: "A realistic water ocean shader rendered in R3F.",
    preview: "/previews/Water-Ocean.png",
    github: "https://github.com/sujitkoji/RenderLab/tree/main/src/app/Lab/OceanWater",
    component: WaterOcean,
  },
  
  {
    title: "Spectral Core",
    slug: "spectral-core",
    description: "Spectral Core is a noise-driven GLSL sphere with cinematic lighting and rich color gradients.",
    preview: "/previews/spectral.png",
    github: "https://github.com/sujitkoji/RenderLab/tree/main/src/app/Lab/SpectralCore",
    component: SpectralCore,
  },
  {
    title: "Particle Shader",
    slug: "particle-shader",
    description: "Interactive 3D morphing particle system with glow, smooth animation, and responsive design.",
    preview: "/previews/Particles.png",
    github: "https://github.com/sujitkoji/RenderLab/tree/main/src/app/Lab/ParticleShader",
    component: Particles,
  },
];
