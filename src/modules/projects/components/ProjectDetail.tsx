import React, { FC } from 'react';
import ProjectLink from './ProjectLink';
import Image from '@/common/components/elements/Image';
import { ProjectItemProps } from '@/common/types/projects';

const ProjectDetail: FC<ProjectItemProps> = ({
  title,
  image,
  stacks,
  link_demo,
  link_github,
}) => {
  const stacksArray = JSON.parse(stacks);

  return (
    <div className='space-y-8'>
      <div className='flex flex-col sm:flex-row gap-5 justify-between'>
        <div className='flex items-center flex-wrap gap-2'>
          <span className='text-[15px]'>Tech Stack :</span>
          <div className='flex flex-grow gap-2'>
            {stacksArray?.map((stack: string, index: number) => (
              <span
                key={index}
                className='bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded-full px-3 py-1 text-xs font-medium'
              >
                {stack}
              </span>
            ))}
          </div>
        </div>
        <ProjectLink link_demo={link_demo} link_github={link_github} />
      </div>
      <Image
        src={image}
        width={800}
        height={400}
        alt={title}
        className='hover:scale-105'
      />
    </div>
  );
};

export default ProjectDetail;
