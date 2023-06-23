import React, { FC, useMemo, useState } from 'react';
import clsx from 'clsx';
import useSWR from 'swr';
import { useWindowSize } from 'usehooks-ts';
import { motion } from 'framer-motion';

import BlogCard from './BlogCard';
import Pagination from './Pagination';
import BlogListHeader from './BlogListHeader';
import EmptyState from '@/common/components/elements/EmptyState';
import Loading from '@/common/components/elements/Loading';

import { BlogItemProps } from '@/common/types/blog';
import { fetcher } from '@/services/fetcher';

import { useBlogViewStore } from '@/common/stores/useBlogViewStore';

type BlogList = {
  showHeader?: boolean;
  showPagination?: boolean;
  perPage?: number;
};

const BlogList: FC<BlogList> = ({
  perPage = 6,
  showHeader = true,
  showPagination = true,
}) => {
  const { width } = useWindowSize();
  const isMobile = width < 468;

  const { viewOption, setViewOption } = useBlogViewStore();

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(perPage);

  const { data, isLoading } = useSWR(
    `/api/blog?page=${page}&per_page=${pageSize}`,
    fetcher
  );

  const blogData: BlogItemProps[] = useMemo(() => {
    return data?.data?.posts || [];
  }, [data]);

  const handleNextPage = () => {
    setPage(page + 1);
    scrollToTop();
  };

  const handlePrevPage = () => {
    setPage(page - 1);
    scrollToTop();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isLoading) return <Loading />;

  if (!isLoading && blogData.length === 0) {
    return <EmptyState message='No Data' />;
  }

  return (
    <>
      {showHeader && !isMobile && (
        <BlogListHeader viewOption={viewOption} setViewOption={setViewOption} />
      )}

      <div
        className={clsx(
          'gap-5 sm:gap-4',
          viewOption === 'list' || isMobile
            ? 'flex flex-col'
            : 'grid grid-cols-2 sm:!gap-5'
        )}
      >
        {blogData?.map((item: BlogItemProps, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <BlogCard view={viewOption} {...item} />
          </motion.div>
        ))}
      </div>

      {showPagination && (
        <Pagination
          page={page}
          onPrevPage={handlePrevPage}
          onNextPage={handleNextPage}
          blogData={blogData}
          pageSize={pageSize}
        />
      )}
    </>
  );
};

export default BlogList;
