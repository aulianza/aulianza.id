import { BsGrid as GridIcon, BsListUl as ListIcon } from 'react-icons/bs';

import SectionHeading from '@/common/components/elements/SectionHeading';

import ViewOptions from './ViewOptions';

interface BlogListHeaderProps {
  viewOption: string;
  setViewOption: (option: string) => void;
}

const BlogListHeader = ({ viewOption, setViewOption }: BlogListHeaderProps) => {
  return (
    <div className='flex items-center justify-between text-[15px] mb-5'>
      <SectionHeading title='Latest Articles' />
      <div className='flex gap-2 px-1 cursor-pointer'>
        <ViewOptions
          option={viewOption}
          setViewOption={setViewOption}
          type='list'
          icon={<ListIcon size={24} className='p-0.5' />}
        />{' '}
        <ViewOptions
          option={viewOption}
          setViewOption={setViewOption}
          type='grid'
          icon={<GridIcon size={24} className='p-0.5' />}
        />
      </div>
    </div>
  );
};

export default BlogListHeader;
