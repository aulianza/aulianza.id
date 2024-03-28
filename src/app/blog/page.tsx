import Container from '@/common/components/elements/Container'
import BlogListNew from '@/modules/blog'
import { getBlogOverviewDocument } from '@/services/graphql/documents.blogs'
import { client } from '@/services/graphql/graphql'

const BlogPage = async () => {
  const blogEntriesResponse = await client.query({
    query: getBlogOverviewDocument,
  })
  const blogEntries = blogEntriesResponse.data.blogsEntries

  return (
    <>
      <Container addPaddingTop className='xl:!-mt-5 ' data-aos='fade-up'>
        <BlogListNew blogs={blogEntries} />
      </Container>
    </>
  )
}

export default BlogPage

export const dynamic = 'force-dynamic'
