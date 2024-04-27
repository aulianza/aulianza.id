import Link from 'next/link';
import { AiFillFire as NewIcon } from 'react-icons/ai';
import { BiLabel as LevelIcon } from 'react-icons/bi';
import { HiOutlineArrowSmRight as ViewIcon } from 'react-icons/hi';
import { MdLibraryBooks as LessonIcon } from 'react-icons/md';
import useSWR from 'swr';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import { ContentProps } from '@/common/types/learn';
import { fetcher } from '@/services/fetcher';

const LearnCard = ({
  title,
  slug,
  description,
  image,
  is_new,
  level,
}: ContentProps) => {
  const { data } = useSWR(`/api/learn?slug=${slug}`, fetcher);

  const lessonCount = data?.count ?? '0';

  return (
    <Link href={`/learn/${slug}`}>
      <Card className='group relative cursor-pointer border border-neutral-200 dark:border-neutral-900 lg:hover:scale-[102%]'>
        {is_new && (
          <div className='absolute right-0 top-0 z-[2] flex items-center gap-1 rounded-bl-xl rounded-tr-xl bg-yellow-300 px-2 py-1 text-[13px] font-medium text-emerald-950'>
            <NewIcon size={15} />
            <span>New</span>
          </div>
        )}
        <div className='relative'>
          <Image
            src={image}
            width={600}
            height={300}
            alt={title}
            className='h-48 rounded-t-xl object-cover object-left'
          />
          <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1 rounded-t-xl bg-black text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-80'>
            <span>View Lessons</span>
            <ViewIcon size={20} />
          </div>
        </div>
        <div className='flex flex-col justify-between space-y-3 p-5'>
          <div className='space-y-2'>
            <div className='flex justify-between'>
              <div className='cursor-pointer  text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:group-hover:text-teal-400 lg:group-hover:text-teal-600'>
                {title}
              </div>
            </div>
            <p className='text-[.9375rem] leading-relaxed text-neutral-700 dark:text-neutral-400'>
              {description}
            </p>
          </div>
          <div className='flex gap-4 text-neutral-600 dark:text-neutral-400'>
            <div className='flex items-center gap-1'>
              <LessonIcon size={16} />
              <span className='ml-0.5 text-sm'>
                {`${lessonCount} ${lessonCount > 1 ? 'Lessons' : 'Lesson'}`}
              </span>
            </div>
            <div className='flex items-center gap-1'>
              <LevelIcon size={16} />
              <span className='ml-0.5 text-sm'>{level}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default LearnCard;
