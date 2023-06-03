import React, { FC, useMemo } from 'react';
import useSWR from 'swr';

import CommentItem from './CommentItem';
import Loading from '@/common/components/elements/Loading';
import EmptyState from '@/common/components/elements/EmptyState';

import { CommentItemProps } from '@/common/types/blog';
import { fetcher } from '@/services/fetcher';

type CommentListProps = {
  id: number;
};

const CommentList: FC<CommentListProps> = ({ id }) => {
  const { data, isLoading } = useSWR(`/api/comments?post_id=${id}`, fetcher);

  const commentsData: CommentItemProps[] = useMemo(() => {
    return data?.data || [];
  }, [data]);

  const totalComments = commentsData?.length;

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
