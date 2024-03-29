import Container from '@/common/components/elements/Container'
import BlogListNew from '@/modules/blog'
import { getBlogOverviewDocument } from '@/services/graphql/documents.blogs'
import { client } from '@/services/graphql/graphql'
import { Metadata, ResolvingMetadata } from 'next'
import { generateSiteTitle } from '@/core/metadata'
import { getPageDetailDocument } from '@/services/graphql/documents.pages'

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

export async function generateMetadata(
  {},
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const result = await client.query({
    query: getPageDetailDocument,
    variables: { slug: ['blog'] },
  })

  const page = result.data.pagesEntries[0]

  return {
    title: generateSiteTitle({
      title: page.title,
    }),
  }
}

export default BlogPage

export const dynamic = 'force-dynamic'
