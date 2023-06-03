import React, { FC } from 'react';

import ImageCarousel from '@/common/components/elements/ImageCarousel';
import SectionHeading from '@/common/components/elements/SectionHeading';

import { CLIENT_IMAGES } from '@/common/constant/clients';

const Services: FC = () => {
  return (
    <section className='space-y-3'>
      <SectionHeading title="What I've been working on" />
      <p className='leading-loose text-neutral-800 dark:text-neutral-300'>
        I assist brands, companies, institutions, and startups in creating
        exceptional digital experiences for their businesses through strategic
        development services. Here are a few notable clients I have collaborated
        with.
      </p>
      <ImageCarousel images={CLIENT_IMAGES} interval={4000} />
    </section>
  );
};

export default Services;
