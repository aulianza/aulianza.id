import Container from '@/common/components/elements/Container'
import BlogListNew from '@/modules/blog'
import { getBlogOverviewDocument } from '@/services/graphql/documents.blogs'
import { client } from '@/services/graphql/graphql'
import { Metadata } from 'next'
import { generateSiteTitle } from '@/core/metadata'
import { getPageDetailDocument } from '@/services/graphql/documents.pages'

const getPageInfo = async () => {
  const pageInfo = await client.query({
    query: getPageDetailDocument,
    variables: { slug: ['blog'] },
  })

  return pageInfo.data.pagesEntries[0]
}
const BlogPage = async () => {
  const blogEntriesResponse = await client.query({
    query: getBlogOverviewDocument,
  })

  const pageInfo = await getPageInfo()

  const blogEntries = blogEntriesResponse.data.blogsEntries

  return (
    <>
      <Container addPaddingTop className='xl:!-mt-5 '>
        <BlogListNew page={pageInfo} blogs={blogEntries} />
      </Container>
    </>
  )
}

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(): Promise<Metadata> {
  const page = await getPageInfo()

  return {
    title: generateSiteTitle({
      title: page.title,
    }),
  }
}

export default BlogPage

export const dynamic = 'force-dynamic'
