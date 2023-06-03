import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';

import About from '@/modules/about';

import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';

const PAGE_TITLE = 'About';
const PAGE_DESCRIPTION = 'A short story of me';

const AboutPage: NextPage = () => {
  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Ryan Aulia`} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <About />
      </Container>
    </>
  );
};

export default AboutPage;
