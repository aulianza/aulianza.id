import React, { FC } from "react";
import useSWR from "swr";
import ProjectCard from "./ProjectCard";
import { ProjectItemProps } from "@/common/types/projects";
import { fetcher } from "@/services/fetcher";

const Projects: FC = () => {
  const { data } = useSWR("/api/landing?query=projects", fetcher);

  return (
    <div className="grid sm:grid-cols-2 gap-5 pt-2">
      {data?.map((project: ProjectItemProps, index: number) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
