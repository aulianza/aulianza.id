import { fetchBlogInfo } from '@/services/graphql/data-fetching'
import { Metadata } from 'next'
import { generateSiteTitle } from '@/core/metadata'
import BlogItemHeader from '@/app/blog/[slug]/components/BlogItemHeader'

export const revalidate = 300

const BlogPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const blog = await fetchBlogInfo(slug)

  // @TODO: Redirects
  if (!blog) return null

  return (
    <>
      <BlogItemHeader blog={blog} />
    </>
  )
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const blog = await fetchBlogInfo(slug)

  const title = blog?.title ?? ''

  // @TODO: Add proper metadata
  return {
    title: generateSiteTitle({ title }),
    description: blog?.description ?? '',
  }
}

export default BlogPage
