import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  BiChevronLeft as PrevIcon,
  BiChevronRight as NextIcon,
  BiStar as StarIcon,
} from 'react-icons/bi';
import { FaRegEye as ViewIcon } from 'react-icons/fa';
import { TbCalendarBolt as DateIcon } from 'react-icons/tb';

import Image from '@/common/components/elements/Image';
import { formatDate, formatExcerpt } from '@/common/helpers';
import { BlogFeaturedProps } from '@/common/types/blog';

const BlogFeaturedHero = ({ data }: BlogFeaturedProps) => {
  const [currentFeaturedIndex, setCurrentFeaturedIndex] = useState<number>(0);

  const currentFeatured = data[currentFeaturedIndex];

  const featuredData = data.slice(0, 4);

  const defaultImage = '/images/placeholder.png';

  const nextFeatured = () => {
    setCurrentFeaturedIndex((prevIndex) =>
      prevIndex === featuredData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevFeatured = () => {
    setCurrentFeaturedIndex((prevIndex) =>
      prevIndex === 0 ? featuredData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFeaturedIndex((prevIndex) =>
        prevIndex === featuredData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [featuredData]);

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className='relative rounded-xl overflow-hidden border dark:border-neutral-700 shadow-lg'>
      <div
        className='duration-500 relative group'
        style={{
          height: '400px',
          overflow: 'hidden',
        }}
      >
        <Image
          src={currentFeatured?.featured_image_url || defaultImage}
          alt={currentFeatured?.title?.rendered}
          fill={true}
          sizes='100vw, 100vh'
          className='object-cover w-full h-full transform transition-transform duration-300'
        />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70 transition-opacity duration-300'></div>
      </div>

      <div className='absolute flex w-full justify-between inset-0 z-10'>
        <div className='flex flex-col justify-between gap-6 p-6 sm:p-8'>
          <div className='flex items-center gap-x-1 w-fit px-2.5 py-1.5 rounded-full text-xs font-sora text-black bg-lime-200'>
            <StarIcon size={16} />
            <span>Featured</span>
          </div>
          <div className='flex flex-col justify-end gap-6'>
            <div className='flex flex-col space-y-2 text-white'>
              <Link
                href={`/blog/${currentFeatured?.slug}?id=${currentFeatured?.id}`}
              >
                <h3 className='flex w-fit text-2xl font-bold font-sora leading-normal relative group cursor-pointer'>
                  {currentFeatured?.title?.rendered}
                  <span className='absolute -bottom-0.5 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 transition-transform group-hover:scale-x-100'></span>
                </h3>
              </Link>
              <p className='hidden sm:block'>
                {formatExcerpt(currentFeatured?.excerpt?.rendered)}
              </p>
              <div className='flex gap-x-5 pt-1 text-neutral-400'>
                <div className='flex gap-1 items-center '>
                  <DateIcon size={16} />
                  <span className='text-xs ml-0.5'>
                    {formatDate(currentFeatured?.date)}
                  </span>
                </div>
                <div className='flex gap-1 items-center'>
                  <ViewIcon size={15} />
                  <span className='text-[13px] ml-0.5'>
                    {currentFeatured?.total_views_count?.toLocaleString()} Views
                  </span>
                </div>
              </div>
            </div>
            <div className='flex gap-2'>
              <button
                onClick={prevFeatured}
                className='h-6 w-6 bg-white text-black hover:text-neutral-900 rounded-md transition-all duration-300 hover:scale-105'
                aria-label='Previous'
              >
                <PrevIcon size={24} />
              </button>
              <button
                onClick={nextFeatured}
                className='h-6 w-6 bg-white text-black hover:text-neutral-900 rounded-md transition-all duration-300 hover:scale-105'
                aria-label='Next'
              >
                <NextIcon size={24} />
              </button>
            </div>
          </div>
        </div>

        <div className='hidden sm:flex flex-col space-y-5 items-center justify-center px-8 border-l border-solid border-[#ffffff1a]'>
          {featuredData?.map((item, index: number) => (
            <button
              key={item.id}
              onClick={() => setCurrentFeaturedIndex(index)}
              className={clsx(
                'relative w-16 h-16 overflow-hidden cursor-pointer mb-2 border-2 bg-black transition-all duration-300 hover:scale-105',
                index === currentFeaturedIndex && 'border-sky-300 scale-105'
              )}
              style={{ borderRadius: '50%' }}
            >
              <Image
                src={item.featured_image_url || defaultImage}
                alt={item?.title?.rendered}
                fill={true}
                sizes='100vw, 100vh'
                className='object-cover'
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogFeaturedHero;
