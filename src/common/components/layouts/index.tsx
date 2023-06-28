import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { ReactNode } from 'react';
import { useWindowSize } from 'usehooks-ts';

import useHasMounted from '@/common/hooks/useHasMounted';

import Sidebar from './partials/Sidebar';
import NowPlayingBar from '../elements/NowPlayingBar';
import NowPlayingCard from '../elements/NowPlayingCard';

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

  return (
    <>
      <div
        className={clsx(
          'max-w-6xl mx-auto lg:px-8 lg:py-4 xl:py-8',
          isDarkTheme ? 'dark:text-darkText' : ''
        )}
      >
        <div className='flex flex-col lg:flex-row lg:gap-5'>
          <header className='lg:w-1/5'>
            <Sidebar />
          </header>
          <main className='lg:w-4/5 max-w-[854px] transition-all duration-300'>
            {children}
          </main>
        </div>
      </div>
      {isMobile ? <NowPlayingCard /> : <NowPlayingBar />}
    </>
  );
};

export default Layout;
