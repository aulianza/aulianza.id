import clsx from 'clsx';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { FiTrash2 as DeleteIcon } from 'react-icons/fi';
import { MdAdminPanelSettings as AdminIcon } from 'react-icons/md';

import { MessageProps } from '@/common/types/chat';

import ChatTime from './ChatTime';

interface ChatItemProps extends MessageProps {
  onDelete: (id: string) => void;
}

const ChatItem = ({
  id,
  image,
  name,
  email,
  message,
  created_at,
  onDelete,
}: ChatItemProps) => {
  const { data: session } = useSession();

  const authorEmail = 'aulianza.dev@gmail.com';

  const pattern = /@([^:]+):/g;
  const modifiedMessage = message?.split(pattern).map((part, index) => {
    if (index % 2 === 1) {
      return (
        <span key={index} className='text-yellow-600 dark:text-yellow-400'>
          @{part}
        </span>
      );
    }
    return part;
  });

  const handleDeleteMessage = () => {
    onDelete(id);
  };

  return (
    <div className='flex items-start gap-3 px-3'>
      {image && (
        <Image
          src={image}
          width={40}
          height={40}
          alt={name}
          className='mt-1 rounded-full border dark:border-neutral-800'
        />
      )}
      <div className='space-y-1'>
        <div className='flex flex-col items-start gap-3 md:flex-row md:items-center'>
          <div className='flex items-center gap-2'>
            <div className='text-sm font-medium text-neutral-700 dark:text-neutral-300'>
              {name}
            </div>
            {email === authorEmail && (
              <div className='text-medium flex items-center gap-0.5 rounded-full bg-gradient-to-bl from-purple-800 via-violet-900 to-purple-800 px-1.5 py-0.5 text-violet-50'>
                <AdminIcon size={13} />
                <span className='font-sora text-[10px]'>Author</span>
              </div>
            )}
            <div className='hidden md:flex'>
              <ChatTime datetime={created_at} />
            </div>
          </div>
        </div>
        <div className='group flex items-center gap-3'>
          <p
            className={clsx(
              'w-fit rounded-xl rounded-tl-none bg-neutral-200 px-3 py-2 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200',
              'group-hover:dark:bg-neutral-700',
            )}
          >
            {modifiedMessage}
          </p>
          <div className='flex items-center gap-3'>
            {(session?.user?.email === email ||
              session?.user?.email === authorEmail) && (
              <DeleteIcon
                size={17}
                className='hidden cursor-pointer text-red-500 group-hover:flex'
                onClick={handleDeleteMessage}
              />
            )}
          </div>
        </div>
        <div className='flex md:hidden'>
          <ChatTime datetime={created_at} />
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
