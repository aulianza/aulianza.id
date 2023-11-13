import Skeleton from 'react-loading-skeleton';

import Card from '../elements/Card';
import SkeletonLoader from '../elements/SkeletonLoader';

const BlogFeaturedHeroSkeleton = () => {
  return (
    <SkeletonLoader>
      <Card className='min-w-[326px]'>
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
