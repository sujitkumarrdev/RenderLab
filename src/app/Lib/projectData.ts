import type { ComponentType } from "react";
import WaterOcean from "../Lab/OceanWater/scene";

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
    title: "Water Ocean Shader",
    slug: "water-ocean",
    description: "A realistic water ocean shader rendered in R3F.",
    preview: "/previews/Water-Ocean.png",
    github: "https://github.com/sujitkumarrdev/water-ocean",
    component: WaterOcean,
  },
];
