'use client'
import BlogFeaturedSection from './BlogFeaturedSection'
import {
  BlogOverviewEntryFragmentFragment,
  PagesDocumentEntryFragment,
} from '@/__generated__/graphql'
import { motion } from 'framer-motion'
import React from 'react'
import BlogCardNew from '@/modules/blog/components/BlogCardNew'
import { PageHeader } from '@/common/components/layouts/header/PageHeader'

interface Props {
  blogs: BlogOverviewEntryFragmentFragment[]
  page: PagesDocumentEntryFragment
}

const BlogListNew = (props: Props) => {
  const { page } = props
  const total_posts = props.blogs.length

  const featuredBlogs = [...props.blogs].filter((blog) => blog.isFeatured)

  return (
    <div className=''>
      <PageHeader
        title={page.title ?? ''}
        description={page.doxterContent ?? ''}
      />
      <BlogFeaturedSection featuredBlogs={featuredBlogs} />

      <div className='space-y-5'>
        <div className='mb-6 flex flex-col items-center justify-between gap-3 sm:flex-row'>
          <div className='flex items-center gap-2 px-1 font-sora text-xl font-medium'>
            <h4 className='text-neutral-800 dark:text-neutral-200'>
              Latest Articles
            </h4>
            {/*)}*/}
            <span className='rounded-full bg-neutral-300 px-2 py-1 font-sora text-xs text-neutral-900 dark:bg-neutral-700 dark:text-neutral-50'>
              {total_posts}
            </span>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
          {props.blogs.map(
            (item: BlogOverviewEntryFragmentFragment, index: number) => (
              <motion.div
                key={item.slug}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <BlogCardNew blogItem={item} />
              </motion.div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogListNew
