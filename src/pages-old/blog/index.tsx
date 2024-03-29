import { NextPage } from 'next'
import { NextSeo } from 'next-seo'

import Container from '@/common/components/elements/Container'

const PAGE_TITLE = 'Blog'

const BlogPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Ryan Aulia`} />
      <Container className='xl:!-mt-5' data-aos='fade-up'>
        <h1>Hi</h1>
      </Container>
    </>
  )
}

export default BlogPage
