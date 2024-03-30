import Container from '@/common/components/elements/Container'
import BlogListNew from '@/modules/blog'
import { getBlogOverviewDocument } from '@/services/graphql/documents.blogs'
import { client } from '@/services/graphql/graphql'
import { Metadata } from 'next'
import { generateSiteTitle } from '@/core/metadata'
import { fetchPageInfo } from '@/services/graphql/data-fetching'

const BlogPage = async () => {
  const pageInfo = await fetchPageInfo('blog')

  if (pageInfo === null) return null

  const blogEntriesResponse = await client.query({
    query: getBlogOverviewDocument,
  })

  const blogEntries = blogEntriesResponse.data.blogsEntries

  return (
    <>
      <Container addPaddingTop className='xl:!-mt-5 '>
        <BlogListNew page={pageInfo} blogs={blogEntries} />
      </Container>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await fetchPageInfo('blog')

  return {
    title: generateSiteTitle({
      title: page?.title ?? 'unknown',
    }),
  }
}

export default BlogPage

export const dynamic = 'force-dynamic'
