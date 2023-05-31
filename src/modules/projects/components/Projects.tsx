import React, { FC } from "react";
import useSWR from "swr";
import ProjectCard from "./ProjectCard";
import { ProjectItemProps } from "@/common/types/projects";
import { fetcher } from "@/services/fetcher";

import ProductCardSkeleton from "@/common/components/skeleton/ProductCardSkeleton";
import EmptyState from "@/common/components/elements/EmptyState";

const Projects: FC = () => {
  const { data, isLoading } = useSWR("/api/projects", fetcher);

  const projects: ProjectItemProps[] = data?.data || [];
  const fiteredProjects = projects.filter((project) => project?.is_show);
  const emptyArray = new Array(2).fill(" ");

  if (!isLoading && fiteredProjects.length === 0) {
    return <EmptyState message="No Data" />;
  }

  return (
    <div className="grid sm:grid-cols-2 gap-5 pt-2">
      {!isLoading
        ? fiteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))
        : emptyArray.map((_, index) => <ProductCardSkeleton key={index} />)}
    </div>
  );
};

export default Projects;
