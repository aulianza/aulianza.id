import React from 'react';
import Skeleton from 'react-loading-skeleton';

import Card from '../elements/Card';
import SkeletonLoader from '../elements/SkeletonLoader';

const ProductCardSkeleton = () => {
  return (
    <SkeletonLoader>
      <Card className='border border-neutral-200 dark:border-neutral-800'>
        <div className='h-48 rounded-t-xl'>
          <Skeleton
            height={192}
            containerClassName='flex'
            className='!rounded-t-xl !rounded-b-none'
          />
        </div>
        <div className='flex flex-col p-5 space-y-3 h-[164px]'>
          <Skeleton className='h-6' containerClassName='w-4/5' />
          <Skeleton count={2} />
          <div className='flex gap-2'>
            <Skeleton
              className='h-5 !rounded-full'
              containerClassName='w-1/4'
            />
            <Skeleton
              className='h-5 !rounded-full'
              containerClassName='w-1/4'
            />
          </div>
        </div>
      </Card>
    </SkeletonLoader>
  );
};

export default ProductCardSkeleton;
