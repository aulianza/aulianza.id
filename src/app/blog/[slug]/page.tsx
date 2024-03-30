import { fetchBlogInfo } from '@/services/graphql/data-fetching'

export const revalidate = 300

const BlogPage = async ({ params: { slug } }: { params: { slug: string } }) => {
  const blog = await fetchBlogInfo(slug)

  return (
    <>
      <pre>{JSON.stringify(blog, null, 2)}</pre>
    </>
  )
}

export default BlogPage
