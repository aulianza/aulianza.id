import Skeleton from 'react-loading-skeleton';

import Card from '../elements/Card';
import SkeletonLoader from '../elements/SkeletonLoader';

const BlogFeaturedHeroSkeleton = () => {
  return (
    <SkeletonLoader>
      <Card className='border border-neutral-200 dark:border-neutral-800 min-w-[326px] dark:bg-neutral-800'>
        <Skeleton
          height={400}
          containerClassName='flex'
          className='!rounded-xl'
        />
      </Card>
    </SkeletonLoader>
  );
};

export default BlogFeaturedHeroSkeleton;
