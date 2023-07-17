import { useEffect, useRef } from 'react';

import Image from '@/common/components/elements/Image';
import { formatDate } from '@/common/helpers';
import { CommentItemProps } from '@/common/types/blog';

const CommentItem = ({ body_html, created_at, user }: CommentItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const codeElements = contentRef.current.getElementsByTagName('code');
      for (let i = 0; i < codeElements.length; i++) {
        const codeElement = codeElements[i];
        codeElement.classList.add('break-words');
        codeElement.classList.add('text-xs');
        codeElement.classList.add('whitespace-pre-wrap');
      }
    }
  }, [body_html]);

  return (
    <div className='flex gap-5 dark:text-neutral-400 break-all'>
      <div className='flex-shrink-0'>
        <Image
          src={user?.profile_image_90}
          alt={user?.name}
          width={40}
          height={40}
          rounded='rounded-full'
          className='border border-neutral-200 dark:border-neutral-800'
        />
      </div>
      <div className='flex flex-col w-full gap-2 px-5 py-4 border rounded-md border-neutral-300 dark:border-neutral-700'>
        <div className='flex flex-col sm:flex-row sm:items-center gap-2'>
          <div className='font-medium dark:text-neutral-300'>{user?.name}</div>
          <div className='hidden sm:block dark:text-neutral-700'>•</div>
          <div className='text-xs dark:text-neutral-500'>
            {formatDate(created_at, 'MMM dd, yyyy, HH:mm')}
          </div>
        </div>
        <div
          ref={contentRef}
          className='leading-[1.8] max-w-[600px]'
          dangerouslySetInnerHTML={{ __html: body_html }}
        />
      </div>
    </div>
  );
};

export default CommentItem;
