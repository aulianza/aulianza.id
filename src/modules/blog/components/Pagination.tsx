import React, { FC } from 'react';

import { BlogItemProps } from '@/common/types/blog';

import PaginationButton from './PaginationButton';

type PaginationProps = {
  page: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  blogData: BlogItemProps[];
  pageSize: number;
};

const Pagination: FC<PaginationProps> = ({
  page,
  onPrevPage,
  onNextPage,
  blogData,
  pageSize,
}) => {
  return (
    <div className='flex items-center justify-between gap-5 my-6 text-neutral-400 dark:text-neutral-600 text-sm'>
      {page !== 1 && (
        <PaginationButton
          onClick={onPrevPage}
          text='Previous'
          icon='back'
          size={28}
        />
      )}
      <div>Page {page}</div>
      {blogData.length >= pageSize && (
        <PaginationButton
          onClick={onNextPage}
          text='Next'
          icon='enter'
          size={28}
        />
      )}
    </div>
  );
};

export default Pagination;
