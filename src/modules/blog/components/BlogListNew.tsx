import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import EmptyState from '@/common/components/elements/EmptyState';
import Pagination from '@/common/components/elements/Pagination';
import BlogCardNewSkeleton from '@/common/components/skeleton/BlogCardNewSkeleton';
import { BlogItemProps } from '@/common/types/blog';
import { fetcher } from '@/services/fetcher';

import BlogCardNew from './BlogCardNew';
import BlogFeaturedSection from './BlogFeaturedSection';

const BlogListNew = () => {
  const [page, setPage] = useState<number>(1);
  const router = useRouter();

  const { data, mutate, isLoading } = useSWR(
    `/api/blog?page=${page}&per_page=6`,
    fetcher
  );

  const { posts: blogData = [], total_pages: totalPages = 1 } =
    data?.data ?? {};

  const handlePageChangeAndLoadData = async (newPage: number) => {
    await mutate();
    router.push(`/blog?page=${newPage}`, undefined, { shallow: true });
    setPage(newPage);
  };

  useEffect(() => {
    const queryPage = Number(router.query.page);
    if (!isNaN(queryPage) && queryPage !== page) {
      setPage(queryPage);
    }
  }, [page, router.query.page]);

  const renderEmptyState = () =>
    !isLoading && data?.status === false && <EmptyState message='No Post' />;

  return (
    <div className='space-y-10'>
      <BlogFeaturedSection />

      <div className='space-y-5'>
        <div className='flex justify-between items-center'>
          <h2 className='text-xl font-sora font-medium px-1'>
            Latest Articles
          </h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
          {!isLoading ? (
            <>
              {blogData.map((item: BlogItemProps, index: number) => (
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

        {!isLoading && data?.status && (
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            onPageChange={handlePageChangeAndLoadData}
          />
        )}

        {renderEmptyState()}
      </div>
    </div>
  );
};

export default BlogListNew;
