import Image from '@/common/components/elements/Image';
import Tooltip from '@/common/components/elements/Tooltip';
import { STACKS } from '@/common/constant/stacks';
import { ProjectItemProps } from '@/common/types/projects';

import ProjectLink from './ProjectLink';

const ProjectDetail = ({
  title,
  image,
  stacks,
  link_demo,
  link_github,
}: ProjectItemProps) => {
  const stacksArray = JSON.parse(stacks);

  return (
    <div className='space-y-8'>
      <div className='flex flex-col items-center sm:flex-row gap-5 justify-between'>
        <div className='flex items-center flex-wrap gap-2'>
          <span className='text-[15px]'>Tech Stack :</span>
          <div className='flex flex-wrap items-center gap-3'>
            {stacksArray?.map((stack: string, index: number) => (
              <div key={index}>
                <Tooltip title={stack}>{STACKS[stack]}</Tooltip>
              </div>
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
