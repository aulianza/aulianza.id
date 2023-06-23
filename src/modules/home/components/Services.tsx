import React, { FC } from 'react';
import Router from 'next/router';
import Icon from 'supercons';

import SectionHeading from '@/common/components/elements/SectionHeading';
import Button from '@/common/components/elements/Button';

const Services: FC = () => {
  return (
    <section className='space-y-5'>
      <div className='space-y-3'>
        <SectionHeading title="What I've been working on" />
        <p className='leading-loose text-neutral-800 dark:text-neutral-300'>
          I assist brands, companies, institutions, and startups in creating
          exceptional digital experiences for their businesses through strategic
          development services.
        </p>
      </div>
      <div className='p-8 bg-neutral-100 dark:bg-neutral-800 border dark:border-none rounded-xl space-y-4'>
        <div className='flex gap-1 items-center'>
          <Icon glyph='send-fill' size={28} className='pt-1' />
          <h3 className='text-xl font-medium'>Lets work together!</h3>
        </div>
        <p className='leading-loose text-neutral-800 dark:text-neutral-300 pl-2'>
          i&apos;m open for freelance projects, feel free to email me to see how
          can we collaborate.
        </p>
        <Button onClick={() => Router.push('/contact')}>Contact me</Button>
      </div>
    </section>
  );
};

export default Services;
