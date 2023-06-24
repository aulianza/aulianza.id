import Link from 'next/link';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import { ProjectItemProps } from '@/common/types/projects';

const ProjectCard = ({
  title,
  slug,
  description,
  image,
  stacks,
}: ProjectItemProps) => {
  const stacksArray = JSON.parse(stacks);

  return (
    <Link href={`/projects/${slug}`}>
      <Card className='border border-neutral-200 dark:border-neutral-800 lg:hover:scale-[102%] cursor-pointer'>
        <Image
          src={image}
          width={400}
          height={200}
          alt={title}
          className='rounded-t-xl h-48 object-cover object-top'
        />
        <div className='p-5 space-y-2'>
          <div className='flex justify-between'>
            <div className='text-lg font-medium cursor-pointer text-neutral-700 dark:text-neutral-300 lg:hover:text-teal-800 dark:hover:text-teal-400 transition-all duration-300'>
              {title}
            </div>
          </div>
          <p className='text-neutral-700 dark:text-neutral-400 text-[15px] leading-relaxed'>
            {description}
          </p>
          <div className='flex flex-wrap gap-2 pt-2'>
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
      </Card>
    </Link>
  );
};

export default ProjectCard;
