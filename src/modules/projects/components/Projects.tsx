import React, { FC } from "react";
import useSWR from "swr";
import ProjectCard from "./ProjectCard";
import { ProjectItemProps } from "@/common/types/projects";
import { fetcher } from "@/services/fetcher";

const Projects: FC = () => {
  const { data } = useSWR("/api/projects", fetcher);
  console.log("🚀 aulianza ~ data => ", data);

  const projects: ProjectItemProps[] = data?.data || [];

  return (
    <div className="grid sm:grid-cols-2 gap-5 pt-2">
      {projects
        ?.filter((project) => project?.is_show)
        .map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
    </div>
  );
};

export default Projects;
