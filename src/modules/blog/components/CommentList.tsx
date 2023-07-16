import { useMemo } from 'react';
import useSWR from 'swr';

import EmptyState from '@/common/components/elements/EmptyState';
import Loading from '@/common/components/elements/Loading';
import { CommentItemProps } from '@/common/types/blog';
import { fetcher } from '@/services/fetcher';

import CommentItem from './CommentItem';

type CommentListProps = {
  id: number;
  totalComments: number;
};

const CommentList = ({ id, totalComments }: CommentListProps) => {
  const { data, isLoading } = useSWR(`/api/comments?post_id=${id}`, fetcher);

  const commentsData: CommentItemProps[] = useMemo(() => {
    return data?.data || [];
  }, [data]);

  if (isLoading) return <Loading />;

  return (
    <section className='space-y-5 pt-4 pb-6'>
      {totalComments >= 1 ? (
        <>
          <div className='font-semibold text-xl pb-5'>
            {totalComments} Comment{totalComments > 1 && 's'}
          </div>
          {commentsData?.map((comment) => (
            <CommentItem key={comment?.id_code} {...comment} />
          ))}
        </>
      ) : (
        <EmptyState message='No Comment.' />
      )}
    </section>
  );
};

export default CommentList;
