import React, { useMemo } from 'react';
import useSWR from 'swr';

import BlogFeaturedHeroSkeleton from '@/common/components/skeleton/BlogFeaturedHeroSkeleton';
import { BlogItemProps } from '@/common/types/blog';
import { fetcher } from '@/services/fetcher';

import BlogFeaturedHero from './BlogFeaturedHero';

const BlogFeaturedSection = () => {
  const { data, isLoading } = useSWR(
    `/api/blog?page=1&per_page=4&categories=11`,
    fetcher
  );

  const featuredData: BlogItemProps[] = useMemo(() => {
    if (data?.status && data?.data?.posts && Array.isArray(data?.data?.posts)) {
      return data?.data?.posts;
    }
    return [];
  }, [data]);

  return (
    <>
      {!isLoading ? (
        <BlogFeaturedHero data={featuredData} />
      ) : (
        <BlogFeaturedHeroSkeleton />
      )}
    </>
  );
};

export default BlogFeaturedSection;
