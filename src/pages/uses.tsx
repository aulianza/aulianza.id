import { NextSeo } from 'next-seo';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import UsesLists from '@/modules/uses';

const PAGE_TITLE = 'Uses';
const PAGE_DESCRIPTION =
  'This page lists my daily essentials and serves as my personal reference.';

const UsesPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Ryan Aulia`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <UsesLists />
      </Container>
    </>
  );
};

export default UsesPage;
