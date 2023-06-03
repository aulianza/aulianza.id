import React, { FC } from 'react';
import ProjectCard from './ProjectCard';
import { ProjectsProps } from '@/common/types/projects';

import EmptyState from '@/common/components/elements/EmptyState';

const Projects: FC<ProjectsProps> = ({ projects }) => {
  const fiteredProjects = projects.filter((project) => project?.is_show);

  if (fiteredProjects.length === 0) {
    return <EmptyState message='No Data' />;
  }

  return (
    <div className='grid sm:grid-cols-2 gap-5 pt-2'>
      {fiteredProjects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;
