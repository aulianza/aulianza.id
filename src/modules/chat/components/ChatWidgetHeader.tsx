import Router from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import { BiMinus as MinimizeIcon } from 'react-icons/bi';
import { HiOutlineLogout as SignOutIcon } from 'react-icons/hi';
import { LuMaximize2 as MaximizeIcon } from 'react-icons/lu';
import { MdClose as CloseIcon } from 'react-icons/md';

import useChatStore from '@/common/stores/useChatStore';
const ChatWidgetHeader = () => {
  const { data: session } = useSession();
  const { toggleChat } = useChatStore();

  const handleMaximize = () => Router.push('/guestbook');

  return (
    <div className='flex items-center justify-between text-lg font-medium p-4 text-neutral-700 dark:text-neutral-300 border-b border-neutral-400 dark:border-neutral-600'>
      <div className='flex items-center gap-4'>
        <div className='flex gap-2'>
          <div
            onClick={toggleChat}
            className='group flex items-center justify-center text-black w-3.5 h-3.5 bg-red-500 rounded-full cursor-pointer'
            data-umami-event='Chat Widget: Close'
          >
            <CloseIcon size={13} className='hidden group-hover:flex' />
          </div>
          <div
            onClick={toggleChat}
            className='group flex items-center justify-center text-black w-3.5 h-3.5 bg-yellow-500 rounded-full cursor-pointer'
            data-umami-event='Chat Widget: Minimaze'
          >
            <MinimizeIcon size={13} className='hidden group-hover:flex' />
          </div>
          <div
            onClick={handleMaximize}
            className='group flex items-center justify-center text-black w-3.5 h-3.5 bg-green-500 rounded-full cursor-pointer'
            data-umami-event='Chat Widget: Maximaze'
          >
            <MaximizeIcon
              size={10}
              className='hidden group-hover:flex rotate-90'
            />
          </div>
        </div>
        <h3 className='font-sora'>Guestbook</h3>
      </div>
      {session && (
        <SignOutIcon
          onClick={() => signOut()}
          size={22}
          className='cursor-pointer text-red-400'
          data-umami-event='Sign Out from Chat Widget'
        />
      )}
    </div>
  );
};

export default ChatWidgetHeader;
