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
    <div className='flex items-center justify-between border-b border-neutral-300 p-4 text-lg font-medium text-neutral-700 dark:border-neutral-700 dark:text-neutral-300'>
      <div className='flex items-center gap-4'>
        <div className='flex gap-2'>
          <div
            onClick={toggleChat}
            className='group flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-red-500 text-black'
            data-umami-event='Chat Widget: Close'
          >
            <CloseIcon size={13} className='hidden group-hover:flex' />
          </div>
          <div
            onClick={toggleChat}
            className='group flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-yellow-500 text-black'
            data-umami-event='Chat Widget: Minimaze'
          >
            <MinimizeIcon size={13} className='hidden group-hover:flex' />
          </div>
          <div
            onClick={handleMaximize}
            className='group flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-full bg-green-500 text-black'
            data-umami-event='Chat Widget: Maximaze'
          >
            <MaximizeIcon
              size={10}
              className='hidden rotate-90 group-hover:flex'
            />
          </div>
        </div>
        <h4 className=' text-base'>Guestbook</h4>
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
