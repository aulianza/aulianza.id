import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import useSWR from 'swr';

import BlogCardNewSkeleton from '@/common/components/skeleton/BlogCardNewSkeleton';
import BlogFeaturedHeroSkeleton from '@/common/components/skeleton/BlogFeaturedHeroSkeleton';
import { BlogItemProps } from '@/common/types/blog';
import { fetcher } from '@/services/fetcher';

import BlogCardNew from './BlogCardNew';
import BlogFeaturedHero from './BlogFeaturedHero';

const BlogListNew = () => {
  const [page, setPage] = useState<number>(1);
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [pageSize, setPageSize] = useState<number>(9);

  const { data, isLoading } = useSWR(
    `/api/blog?page=${page}&per_page=${pageSize}`,
    fetcher
  );

  const blogData: BlogItemProps[] = useMemo(() => {
    if (data?.status && data?.data && Array.isArray(data?.data?.posts)) {
      return data.data.posts;
    }
    return [];
  }, [data]);

  return (
    <div className='space-y-10 sm:pb-10'>
      {!isLoading ? (
        <BlogFeaturedHero data={blogData} />
      ) : (
        <BlogFeaturedHeroSkeleton />
      )}

      <div className='space-y-5'>
        <h2 className='text-xl font-sora font-medium px-1'>Latest Article</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
          {!isLoading ? (
            <>
              {blogData?.map((item: BlogItemProps, index: number) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <BlogCardNew {...item} />
                </motion.div>
              ))}
            </>
          ) : (
            <>
              {new Array(3).fill(0).map((_, index) => (
                <BlogCardNewSkeleton key={index} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogListNew;
