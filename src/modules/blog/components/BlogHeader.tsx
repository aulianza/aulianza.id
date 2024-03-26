import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FaRegEye as ViewIcon } from 'react-icons/fa'
import { HiOutlineClock as ClockIcon } from 'react-icons/hi'

import { formatDate } from '@/common/helpers'

interface BlogHeaderProps {
  title: string
  comments_count?: number
  reading_time_minutes?: number
  page_views_count?: number | null
  published_at?: string
}

const BlogHeader = ({
  title,
  page_views_count,
  published_at,
  reading_time_minutes,
}: BlogHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 250)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const transition = { duration: 0.3, ease: 'easeInOut' }
  const titleVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  }

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
      <div className='mb-6 flex flex-col justify-between gap-2 border-b border-dashed border-neutral-600 pb-6 pt-5 text-[14px] text-neutral-600 dark:text-neutral-400 sm:flex-row'>
        <div>
          Published on
          <span className='px-1 font-medium'>
            {published_at ? formatDate(published_at) : ''}
          </span>
        </div>

        <div className='flex items-center gap-5'>
          <div className='flex items-center gap-1 font-medium'>
            <ViewIcon size={16} />
            <div className='ml-0.5 flex gap-1'>
              <span>{page_views_count?.toLocaleString() || '-'}</span>
              <span>Views</span>
            </div>
          </div>
          <div className='flex items-center gap-1 font-medium'>
            <ClockIcon size={16} />
            <div className='ml-0.5 flex gap-1'>
              <span>{reading_time_minutes}</span>
              <span>Minutes Read</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogHeader
