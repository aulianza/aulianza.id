import clsx from 'clsx';
import { signOut, useSession } from 'next-auth/react';
import { HiOutlineLogout as SignOutIcon } from 'react-icons/hi';

const ChatUserInfo = ({ isWidget = false }: { isWidget?: boolean }) => {
  const { data: session } = useSession();

  const userName = session?.user?.name ?? null;
  const userEmail = session?.user?.email ?? null;

  return session ? (
    <div
      className={clsx(
        'flex flex-col md:flex-row items-start md:items-center gap-2 px-4 text-sm pb-3',
        isWidget && 'text-xs'
      )}
    >
      <div className='flex flex-wrap gap-1 text-neutral-500'>
        <p>Signed in as</p>
        <p className='font-medium'>{userName}</p>
        <p>({userEmail})</p>
      </div>
      {!isWidget && (
        <>
          <div className='hidden md:block text-neutral-500'>•</div>
          <div
            onClick={() => signOut()}
            className='flex items-center gap-1 text-red-500 cursor-pointer font-medium'
            data-umami-event='Sign Out from Chat Page'
          >
            <SignOutIcon size={16} className='cursor-pointer text-red-500' />
            <span>Sign Out</span>
          </div>
        </>
      )}
    </div>
  ) : null;
};

export default ChatUserInfo;
