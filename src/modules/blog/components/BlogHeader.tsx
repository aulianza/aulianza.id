import { motion } from 'framer-motion';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { FaRegEye as ViewIcon } from 'react-icons/fa';
import { HiOutlineClock as ClockIcon } from 'react-icons/hi';
import { TbMessage2 as CommentIcon } from 'react-icons/tb';
import { scroller } from 'react-scroll';

interface BlogHeaderProps {
  title: string;
  comments_count?: number;
  reading_time_minutes?: number;
  page_views_count?: number | null;
  published_at?: string;
}

const BlogHeader = ({
  title,
  comments_count = 0,
  page_views_count,
  published_at,
  reading_time_minutes,
}: BlogHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = () => {
    scroller.scrollTo('comments', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 250);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const transition = { duration: 0.3, ease: 'easeInOut' };
  const titleVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      {!isScrolled ? (
        <motion.h1
          className='text-2xl font-semibold'
          initial='initial'
          animate='animate'
          variants={titleVariants}
          transition={transition}
        >
          {title}
        </motion.h1>
      ) : (
        <motion.div
          className='lg:sticky top-0 bg-light dark:bg-dark py-6 z-10 shadow-bottom backdrop-blur border-b border-neutral-300 dark:border-neutral-600'
          initial='initial'
          animate='animate'
          variants={titleVariants}
          transition={transition}
        >
          <h1 className='text-lg lg:text-xl font-semibold'>{title}</h1>
        </motion.div>
      )}
      <div className='flex flex-col sm:flex-row gap-2 justify-between mb-6 pt-5 pb-6 border-b border-dashed border-neutral-600 text-neutral-600 dark:text-neutral-400 text-[14px]'>
        <div>
          Published on
          <span className='px-1 font-medium'>
            {moment(published_at).format('MMMM DD, YYYY')}
          </span>
        </div>

        <div className='flex items-center gap-5'>
          <div className='flex gap-1 items-center font-medium'>
            <ViewIcon size={18} />
            <div className='flex gap-1 ml-0.5'>
              <span>{page_views_count || '-'}</span>
              <span>Views</span>
            </div>
          </div>
          <div className='flex gap-1 items-center font-medium'>
            <ClockIcon size={18} />
            <div className='flex gap-1 ml-0.5'>
              <span>{reading_time_minutes}</span>
              <span>min read</span>
            </div>
          </div>
          <div
            className='hidden md:flex  gap-1 items-center font-medium cursor-pointer hover:dark:text-neutral-300'
            onClick={scrollToSection}
          >
            <CommentIcon size={20} />
            <div className='flex gap-1 ml-0.5'>
              <span>{comments_count}</span>
              <span>Comment{comments_count > 1 && 's'}</span>
            </div>
          </div>
        </div>

        <div
          className='flex md:hidden gap-1 items-center font-medium cursor-pointer hover:dark:text-neutral-300'
          onClick={scrollToSection}
        >
          <CommentIcon size={20} />
          <div className='flex gap-1 ml-0.5'>
            <span>{comments_count}</span>
            <span>Comment{comments_count > 1 && 's'}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
