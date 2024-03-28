'use client'
import { motion } from 'framer-motion'

interface Props {
  title: string
  description: string
}

export const PageHeader = ({ title, description }: Props) => {
  return (
    <div className='mb-16 mt-6 sm:mb-24 sm:mt-12'>
      <motion.h1 className='my-4 text-4xl font-bold md:text-5xl'>
        {title}
      </motion.h1>
      <motion.p className='mb-8 text-muted-foreground'>{description}</motion.p>
      <div
        className={
          'absolute inset-x-0 h-px w-full shrink-0 translate-y-2 bg-border sm:translate-y-6'
        }
      />
    </div>
  )
}
