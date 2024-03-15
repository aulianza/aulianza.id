import useSWR from 'swr';

import Breakline from '@/common/components/elements/Breakline';
import MDXComponent from '@/common/components/elements/MDXComponent';
import { calculateReadingTime } from '@/common/helpers';
import { BlogDetailProps } from '@/common/types/blog';
import { fetcher } from '@/services/fetcher';

import BlogHeader from './BlogHeader';

const BlogDetail = ({
  id,
  title,
  date,
  slug,
  content,
  tags_list,
}: BlogDetailProps) => {
  const { data: viewsData } = useSWR(
    `/api/views?slug=${slug}&id=${id}`,
    fetcher,
  );

  const viewsCount = viewsData?.views || 0;
  const tagList = tags_list || [];

  const readingTimeMinutes = calculateReadingTime(content?.rendered) ?? 0;

  return (
    <>
      <BlogHeader
        title={title?.rendered}
        comments_count={0}
        reading_time_minutes={readingTimeMinutes}
        published_at={date}
        page_views_count={viewsCount}
      />
      <div className='space-y-6 leading-[1.8] dark:text-neutral-300 '>
        {content?.rendered && <MDXComponent>{content?.markdown}</MDXComponent>}
      </div>
      {tagList?.length >= 1 && (
        <div className='my-10 space-y-2'>
          <h6 className='text-lg font-medium'>Tags:</h6>
          <div className='flex flex-wrap gap-2 pt-2'>
            {tagList?.map((tag) => (
              <div
                key={tag?.term_id}
                className='rounded-full bg-neutral-200 px-4 py-1 text-[14px] font-medium text-neutral-600 dark:bg-neutral-700 dark:text-neutral-200'
              >
                <span className='mr-1 font-semibold'>#</span>
                {tag?.name.charAt(0).toUpperCase() + tag?.name.slice(1)}
              </div>
            ))}
          </div>
        </div>
      )}
      <Breakline className='!my-10' />
    </>
  );
};

export default BlogDetail;
