import Skeleton from 'react-loading-skeleton';

import Card from '../elements/Card';
import SkeletonLoader from '../elements/SkeletonLoader';

const BlogCardSkeleton = () => {
  return (
    <SkeletonLoader>
      <Card className='border border-neutral-200 dark:border-neutral-800 min-w-[350px] dark:bg-neutral-800'>
        <div className='h-48 rounded-t-xl'>
          <Skeleton
            height={192}
            containerClassName='flex'
            className='!rounded-t-xl !rounded-b-none'
          />
        </div>
        <div className='flex flex-col p-5 space-y-3 h-[126px]'>
          <Skeleton count={2} />
          <div className='flex gap-4'>
            <Skeleton
              className='h-4 !rounded-full'
              containerClassName='w-1/3'
            />
            <Skeleton
              className='h-4 !rounded-full'
              containerClassName='w-1/3'
            />
            <Skeleton
              className='h-4 !rounded-full'
              containerClassName='w-1/3'
            />
          </div>
        </div>
      </Card>
    </SkeletonLoader>
  );
};

export default BlogCardSkeleton;
