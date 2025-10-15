import type { ComponentType } from "react";

import WaterOcean from "../Lab/OceanWater/scene";
import SpectralCore from "../Lab/SpectralCore/Scene";
import Particles from "../Lab/ParticleShader/Scene";
import Galaxy from "../Lab/Galaxy/Scene";
import SphereParticles from "../Lab/SphereParticles/Scene";
import Atom from "../Lab/Atom/Scene";

 export interface Project {
  title: string;
  slug: string;
  description: string;
  preview: string;  
  github: string;
  component?: ComponentType;
}

 const BASE_URL = "https://labrender.vercel.app";

 export const projects: Project[] = [
  {
    title: "Galaxy",
    slug: "galaxy",
    description:
     "A cinematic galaxy shader with glowing stars, a luminous nebula core, and smooth color.",
    preview: `${BASE_URL}/previews/Galaxy.png`,
    github:
     "https://github.com/sujitkoji/RenderLab/tree/main/src/app/Lab/Galaxy",
    component: Galaxy,
  },
  {
    title: "Water Ocean Shader",
    slug: "water-ocean",
    description:
      "A realistic animated ocean shader with light reflections, depth color blending, and soft waves.",
    preview: `${BASE_URL}/previews/Water-Ocean.png`,
    github:
      "https://github.com/sujitkoji/RenderLab/tree/main/src/app/Lab/OceanWater",
    component: WaterOcean,
  },
  {
    title: "Spectral Core",
    slug: "spectral-core",
    description:
      "A procedural GLSL shader featuring noise-driven color waves, a glowing energy core & lighting.",
    preview: `${BASE_URL}/previews/spectral.png`,
    github:
      "https://github.com/sujitkoji/RenderLab/tree/main/src/app/Lab/SpectralCore",
    component: SpectralCore,
  },
  {
    title: "Atom",
    slug: "atom",
    description:
      "An artistic atom simulation with orbiting electrons, glowing core, and smooth camera motion.",
    preview: `${BASE_URL}/previews/Atom.png`,
    github:
      "https://github.com/sujitkoji/RenderLab/tree/main/src/app/Lab/Atom",
    component: Atom,
  },
  {
    title: "Particle Shader",
    slug: "particle-shader",
    description:
      "An interactive morphing particle system with depth, glow, and smooth transitions.",
    preview: `${BASE_URL}/previews/Particles.png`,
    github:
      "https://github.com/sujitkoji/RenderLab/tree/main/src/app/Lab/ParticleShader",
    component: Particles,
  },
  {
    title: "Sphere Particles",
    slug: "sphere-particles",
    description:
      "A dynamic 3D sphere particle shader with motion, orbit animation, and glowing stars.",
    preview: `${BASE_URL}/previews/SphereParticles.png`,
    github:
      "https://github.com/sujitkoji/RenderLab/tree/main/src/app/Lab/SphereParticles",
    component: SphereParticles,
  },
];
