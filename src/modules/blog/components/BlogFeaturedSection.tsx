import React from 'react'

import { BlogOverviewEntryFragmentFragment } from '@/__generated__/graphql'

import BlogFeaturedHero from './BlogFeaturedHero'

interface Props {
  featuredBlogs: BlogOverviewEntryFragmentFragment[]
}

const BlogFeaturedSection = (props: Props) => {
  return (
    <>
      <BlogFeaturedHero data={props.featuredBlogs} />
    </>
  )
}

export default BlogFeaturedSection
