import { motion } from 'framer-motion';
import moment from 'moment';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiExternalLink as LinkIcon } from 'react-icons/fi';

import { SubContentMetaProps } from '@/common/types/learn';

const ContentDetailHeader = ({
  title,
  source,
  source_url,
  updated_at,
}: SubContentMetaProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

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
          Last update on
          <span className='px-1 font-medium'>
            {moment(updated_at).format('MMMM DD, YYYY')}
          </span>
        </div>
        <div>
          {source && source_url && (
            <Link href={source_url} target='_blank' passHref>
              <div className='flex gap-2 items-center font-medium text-neutral-700 dark:text-neutral-300 '>
                <LinkIcon size={18} />
                <span className='text-[15px] dark:text-teal-500 hover:dark:text-teal-400 transition-all duration-300'>
                  View in {source}
                </span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default ContentDetailHeader;
