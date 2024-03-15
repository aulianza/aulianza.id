import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiExternalLink as LinkIcon } from 'react-icons/fi';

import Tooltip from '@/common/components/elements/Tooltip';
import { STACKS } from '@/common/constant/stacks';
import { SubContentMetaProps } from '@/common/types/learn';

const ContentDetailHeader = ({
  title,
  category,
  source,
  difficulty,
  language,
  source_url,
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
          className='shadow-bottom top-0 z-10 border-b border-neutral-300 bg-light py-6 backdrop-blur dark:border-neutral-600 dark:bg-dark lg:sticky'
          initial='initial'
          animate='animate'
          variants={titleVariants}
          transition={transition}
        >
          <h1 className='text-lg font-semibold lg:text-xl'>{title}</h1>
        </motion.div>
      )}
      <div className='mb-6 flex flex-col items-start justify-between gap-2 border-b border-dashed border-neutral-600 pb-6 pt-3 text-[14px] text-neutral-600 dark:text-neutral-400 sm:flex-row lg:items-center'>
        <div># {category}</div>
        <div className='mt-1 flex items-center gap-4'>
          {source && source_url && (
            <Link href={source_url} target='_blank' passHref>
              <div className='flex items-center gap-2 font-medium text-neutral-700 dark:text-neutral-300 '>
                <LinkIcon size={18} />
                <span className='text-[15px] transition-all duration-300 dark:text-teal-500 hover:dark:text-teal-400'>
                  View in {source}
                </span>
              </div>
            </Link>
          )}
          {difficulty && (
            <Tooltip title={`Difficulty: ${difficulty}`}>
              <div className='rounded-full bg-neutral-200 px-2 py-1 text-xs font-medium text-neutral-500 dark:bg-neutral-700 dark:text-neutral-400'>
                {difficulty}
              </div>
            </Tooltip>
          )}
          {language && <Tooltip title={language}>{STACKS[language]}</Tooltip>}
        </div>
      </div>
    </>
  );
};

export default ContentDetailHeader;
