import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { ReactNode } from 'react';
import { useWindowSize } from 'usehooks-ts';

import useHasMounted from '@/common/hooks/useHasMounted';
import ChatButton from '@/modules/chat/components/ChatButton';

import HeaderSidebar from './header/HeaderSidebar';
import HeaderTop from './header/HeaderTop';
import NowPlayingBar from '../elements/NowPlayingBar';
import NowPlayingCard from '../elements/NowPlayingCard';
import TopBar from '../elements/TopBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();
  const { width } = useWindowSize();
  const isMobile = width < 480;

  const isDarkTheme =
    hasMounted && (resolvedTheme === 'dark' || resolvedTheme === 'system');

  const router = useRouter();
  const pageName = router.pathname.split('/')[1];

  const isFullPageHeader =
    pageName === 'playground' ||
    router.pathname.startsWith('/blog/') ||
    router.pathname.startsWith('/learn/');

  const isShowChatButton = pageName !== 'chat';

  return (
    <>
      <TopBar />
      <div
        className={clsx(
          'max-w-6xl mx-auto lg:px-8',
          isDarkTheme ? 'dark:text-darkText' : ''
        )}
      >
        {isFullPageHeader ? (
          <div className='flex flex-col xl:pb-8'>
            <HeaderTop />
            <main className='transition-all duration-300'>{children}</main>
          </div>
        ) : (
          <div className='flex flex-col lg:flex-row lg:gap-5 lg:py-4 xl:pb-8'>
            <HeaderSidebar />
            <main className='lg:w-4/5 max-w-[854px] transition-all duration-300'>
              {children}
            </main>
          </div>
        )}
      </div>
      {isShowChatButton && <ChatButton />}
      {isMobile ? <NowPlayingCard /> : <NowPlayingBar />}
    </>
  );
};

export default Layout;
