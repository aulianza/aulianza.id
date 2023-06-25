import {
  BsArrowLeftShort as BackIcon,
  BsArrowRightShort as NextIcon,
} from 'react-icons/bs';

import { BlogItemProps } from '@/common/types/blog';

import PaginationButton from './PaginationButton';

type PaginationProps = {
  page: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  blogData: BlogItemProps[];
  pageSize: number;
};

const Pagination = ({
  page,
  onPrevPage,
  onNextPage,
  blogData,
  pageSize,
}: PaginationProps) => {
  return (
    <div className='flex items-center justify-between gap-5 my-6 text-neutral-400 dark:text-neutral-600 text-sm'>
      {page !== 1 && (
        <PaginationButton
          onClick={onPrevPage}
          text='Previous'
          icon={<BackIcon size={22} />}
        />
      )}
      <div>Page {page}</div>
      {blogData.length >= pageSize && (
        <PaginationButton
          onClick={onNextPage}
          text='Next'
          icon={<NextIcon size={22} />}
        />
      )}
    </div>
  );
};

export default Pagination;
