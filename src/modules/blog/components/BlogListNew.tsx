import {
  BlogOverviewEntryFragmentFragment,
  PagesDocumentEntryFragment,
} from '@/__generated__/graphql'
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

      <div className='space-y-5'>
        <div className='grid gap-4 md:grid-cols-2'>
          {props.blogs.map(
            (item: BlogOverviewEntryFragmentFragment, index: number) => (
              <BlogCardNew key={item.slug} blogItem={item} />
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogListNew
