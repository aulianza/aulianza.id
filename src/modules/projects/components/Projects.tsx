import { motion } from 'framer-motion';

import EmptyState from '@/common/components/elements/EmptyState';
import { ProjectsProps } from '@/common/types/projects';

import ProjectCard from './ProjectCard';

const Projects = ({ projects }: ProjectsProps) => {
  const fiteredProjects = projects.filter((project) => project?.is_show);

  if (fiteredProjects.length === 0) {
    return <EmptyState message='No Data' />;
  }

  return (
    <div className='grid sm:grid-cols-2 gap-5 pt-2'>
      {fiteredProjects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
