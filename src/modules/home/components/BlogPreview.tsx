import React, { FC } from 'react';
import Link from 'next/link';
import Icon from 'supercons';

import BlogList from '@/modules/blog/components/BlogList';
import BlogCarousel from './BlogCarousel';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { useWindowSize } from 'usehooks-ts';

const BlogPreview: FC = () => {
  const { width } = useWindowSize();
  const isMobile = width < 480;

  return (
    <section className='space-y-6'>
      <div className='flex items-center justify-between'>
        <SectionHeading
          title='Latest Articles'
          icon={<Icon glyph='rss' size={32} />}
        />
        <SectionSubHeading>
          <Link href='/blog'>
            <div className='flex gap-1 hover:gap-3 transition-all duration-300 cursor-pointer text-sm text-neutral-700 dark:text-neutral-400 hover:text-neutral-700 hover:dark:text-neutral-300 mt-1'>
              <div className='flex'>
                View All <span className='hidden sm:block ml-1'>Articles</span>
              </div>
              <Icon glyph='enter' size={22} />
            </div>
          </Link>
        </SectionSubHeading>
      </div>
      {isMobile ? (
        <BlogList perPage={2} showHeader={false} showPagination={false} />
      ) : (
        <BlogCarousel />
      )}
    </section>
  );
};

export default BlogPreview;
