import React, { FC, useEffect, useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import Link from 'next/link';
import {
  HiOutlineCalendar as CalendarIcon,
  HiOutlineClock as ClockIcon,
} from 'react-icons/hi';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';

import { BlogItemProps } from '@/common/types/blog';
import { useWindowSize } from 'usehooks-ts';

interface BlogCardProps extends BlogItemProps {
  view?: string;
}

const BlogCard: FC<BlogCardProps> = ({
  id,
  title,
  cover_image,
  created_at,
  description,
  reading_time_minutes,
  slug,
  view = 'list',
}) => {
  const [viewOption, setViewOption] = useState<string>(view);

  const { width } = useWindowSize();
  const isMobile = width < 468;

  const trimmedTitle =
    viewOption === 'grid'
      ? title.slice(0, 70) + (title.length > 70 ? '...' : '')
      : title;
  const trimmedContent =
    description.slice(0, 100) + (description.length > 100 ? '...' : '');

  const defaultImage = '/images/placeholder.png';

  const contentContainerClasses = clsx(
    'flex flex-col self-center w-full sm:w-4/5 flex-grow space-y-3 px-5 sm:p-0 mb-5 sm:mb-0',
    view === 'grid' ? 'sm:w-full sm:!px-6' : ''
  );

  useEffect(() => {
    isMobile ? setViewOption('grid') : setViewOption(view);
  }, [isMobile, view]);

  return (
    <Link href={`/blog/${slug}?id=${id}`}>
      <Card
        className={clsx(
          'flex items-center sm:flex-row gap-6 cursor-pointer border border-neutral-300 dark:border-neutral-800 lg:hover:scale-[102%]',
          viewOption === 'grid'
            ? '!flex-col sm:h-[400px]'
            : '!flex-row sm:p-5 sm:px-6 '
        )}
      >
        <div className='w-fit'>
          <Image
            src={cover_image || defaultImage}
            width={isMobile || viewOption === 'grid' ? 400 : 200}
            height={100}
            alt={title}
            className={clsx(
              'sm:rounded-xl sm:h-32 object-cover',
              viewOption === 'grid' ? '!rounded-t-xl !rounded-b-none !h-48' : ''
            )}
          />
        </div>
        <article className={contentContainerClasses}>
          <h3 className='md:text-[17px] font-medium text-neutral-600 dark:text-neutral-200 lg:hover:text-teal-800 dark:hover:text-teal-400 transition-all duration-300'>
            {trimmedTitle}
          </h3>
          <div className='flex gap-5'>
            <div className='flex gap-1 items-center dark:text-neutral-400'>
              <CalendarIcon size={14} />
              <span className='text-xs'>
                {moment(created_at).format('MMM DD, YYYY')}
              </span>
            </div>
            <div className='flex gap-1 items-center dark:text-neutral-400'>
              <ClockIcon size={14} />
              <span className='text-xs'>{reading_time_minutes} min read</span>
            </div>
          </div>
          <p className='hidden sm:block leading-relaxed text-sm text-neutral-600 dark:text-neutral-400'>
            {trimmedContent}
          </p>
        </article>
      </Card>
    </Link>
  );
};

export default BlogCard;
