import React, { FC } from 'react';
import Icon from 'supercons';

import SectionHeading from '@/common/components/elements/SectionHeading';

import ViewOptions from './ViewOptions';

interface BlogListHeaderProps {
  viewOption: string;
  setViewOption: (option: string) => void;
}

const BlogListHeader: FC<BlogListHeaderProps> = ({
  viewOption,
  setViewOption,
}) => {
  return (
    <div className='flex items-center justify-between text-[15px] mb-5'>
      <SectionHeading
        title='Latest Articles'
        icon={<Icon glyph='rss' size={32} />}
      />
      <div className='flex gap-2 px-1 cursor-pointer'>
        <ViewOptions
          option={viewOption}
          setViewOption={setViewOption}
          icon='list'
        />{' '}
        <ViewOptions
          option={viewOption}
          setViewOption={setViewOption}
          icon='grid'
        />
      </div>
    </div>
  );
};

export default BlogListHeader;
