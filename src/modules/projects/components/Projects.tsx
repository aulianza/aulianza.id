import React, { FC } from "react";
import ProjectCard from "./ProjectCard";
import { ProjectItemProps } from "@/common/types/projects";

const PROJECTS: ProjectItemProps[] = [
  {
    title: "aulianza.id",
    slug: "aulianza-id",
    description:
      "Personal website built with Next.js, Tailwind CSS, and TypeScript.",
    image:
      "https://aulianza.s3.ap-southeast-1.amazonaws.com/images/projects/pokemon.png",
    links: {
      demo: "https://aulianza.id",
      github: "https://github.com/aulianza/aulianza.id",
    },
    stacks: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Linktree Clone",
    slug: "linktree-clone",
    description: "Linktree Clone built with React and Emotion Styled.",
    image:
      "https://aulianza.s3.ap-southeast-1.amazonaws.com/images/projects/linktree.png",
    links: {
      demo: "https://aulianza.id",
      github: "https://github.com/aulianza/aulianza.id",
    },
    stacks: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Pokemon App",
    slug: "pokemon-app",
    description: "Linktree Clone built with React and Emotion Styled.",
    image:
      "https://aulianza.s3.ap-southeast-1.amazonaws.com/images/projects/linktree.png",
    links: {
      demo: "https://aulianza.id",
      github: "https://github.com/aulianza/aulianza.id",
    },
    stacks: ["Next.js", "Tailwind CSS", "TypeScript"],
  },
];

const Projects: FC = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-5 pt-2">
      {PROJECTS?.map((project: ProjectItemProps, index: number) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
