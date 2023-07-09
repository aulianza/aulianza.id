import Link from 'next/link';
import { BiPurchaseTag as LevelIcon } from 'react-icons/bi';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import { ContentProps } from '@/common/types/learn';

const LearnCard = ({
  title,
  slug,
  description,
  image,
  is_new,
  level,
}: ContentProps) => {
  const contentLevel = level.charAt(0).toUpperCase() + level.slice(1);

  return (
    <Link href={`/learn/${slug}`}>
      <Card className='relative border dark:bg-neutral-800 border-neutral-200 dark:border-neutral-800 lg:hover:scale-[102%] cursor-pointer'>
        {is_new && (
          <div className='absolute top-0 right-0 bg-yellow-300 text-emerald-950 text-[13px] font-medium py-1 px-2 rounded-bl-xl rounded-tr-xl z-[2]'>
            New!
          </div>
        )}
        <Image
          src={image}
          width={400}
          height={200}
          alt={title}
          className='rounded-t-xl h-48 object-cover object-left'
        />
        <div className='flex flex-col justify-between p-5 space-y-2 min-h-[160px]'>
          <div className='flex justify-between'>
            <div className='text-lg font-sora cursor-pointer text-neutral-700 dark:text-neutral-300 lg:hover:text-teal-800 dark:hover:text-teal-400 transition-all duration-300'>
              {title}
            </div>
          </div>
          <p className='text-neutral-700 dark:text-neutral-400 text-[15px] leading-relaxed'>
            {description}
          </p>
          <div className='flex flex-wrap items-center gap-5 pt-2 text-sm text-neutral-600 dark:text-neutral-400'>
            <div className='flex gap-2 items-center'>
              <LevelIcon size={18} />
              <span>{contentLevel}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default LearnCard;
