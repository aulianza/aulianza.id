import Image from '@/common/components/elements/Image';
import MarkdownRenderer from '@/common/components/elements/MarkdownRenderer';
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
  content,
}: ProjectItemProps) => {
  const stacksArray = JSON.parse(stacks);

  return (
    <div className='space-y-8'>
      <div className='flex flex-col lg:flex-row items-start lg:items-center sm:flex-row gap-5 justify-between'>
        <div className='flex items-center flex-wrap gap-2'>
          <span className='text-[15px] mb-1 text-neutral-700 dark:text-neutral-300'>
            Tech Stack :
          </span>
          <div className='flex flex-wrap items-center gap-3'>
            {stacksArray?.map((stack: string, index: number) => (
              <div key={index}>
                <Tooltip title={stack}>{STACKS[stack]}</Tooltip>
              </div>
            ))}
          </div>
        </div>
        <ProjectLink
          title={title}
          link_demo={link_demo}
          link_github={link_github}
        />
      </div>
      <Image
        src={image}
        width={800}
        height={400}
        alt={title}
        className='hover:scale-105'
      />
      {content && (
        <div className='space-y-6 leading-[1.8] dark:text-neutral-300 mt-5'>
          <MarkdownRenderer>{content}</MarkdownRenderer>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
