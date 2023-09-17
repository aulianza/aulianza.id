import Image from 'next/image';
import { MdAdminPanelSettings as AdminIcon } from 'react-icons/md';

import { MessageProps } from '@/common/types/chat';

import ChatTime from './ChatTime';

const ChatItem = ({
  image,
  name,
  email,
  message,
  created_at,
}: MessageProps) => {
  const authorEmail = 'aulianza.dev@gmail.com';

  return (
    <div className='flex items-start gap-3 px-3'>
      {image && (
        <Image
          src={image}
          width={40}
          height={40}
          alt={name}
          className='rounded-full mt-1 border dark:border-neutral-800'
        />
      )}
      <div className='space-y-1'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-3'>
          <div className='flex gap-2 items-center'>
            <div className='font-medium text-sm text-neutral-700 dark:text-neutral-300'>
              {name}
            </div>
            {email === authorEmail && (
              <div className='flex items-center gap-0.5 text-violet-50 bg-gradient-to-bl from-purple-800 via-violet-900 to-purple-800 rounded-full px-1.5 py-0.5 text-medium'>
                <AdminIcon size={13} />
                <span className='text-[10px] font-sora'>Author</span>
              </div>
            )}
            <div className='hidden md:flex'>
              <ChatTime datetime={created_at} />
            </div>
          </div>
        </div>
        <p className='w-fit text-neutral-800 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-800 py-2 px-3 rounded-tl-none rounded-xl'>
          {message}
        </p>
        <div className='flex md:hidden'>
          <ChatTime datetime={created_at} />
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
