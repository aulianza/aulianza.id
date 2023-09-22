import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import BlogList from '@/modules/blog';

const PAGE_TITLE = 'Blog';
const PAGE_DESCRIPTION =
  'Learning to write, even though it turns out to be difficult';

const BlogPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Ryan Aulia`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <BlogList />
      </Container>
    </>
  );
};

export default BlogPage;
