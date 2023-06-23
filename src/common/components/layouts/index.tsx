import React, { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { useTheme } from 'next-themes';

import Sidebar from './partials/Sidebar';
// import Footer from './partials/Footer';

import useHasMounted from '@/common/hooks/use-has-mounted';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { resolvedTheme } = useTheme();
  const hasMounted = useHasMounted();

  const isDarkTheme =
    hasMounted && (resolvedTheme === 'dark' || resolvedTheme === 'system');

  return (
    <div
      className={clsx(
        'max-w-6xl mx-auto lg:px-8 lg:py-4 xl:py-10',
        isDarkTheme ? 'dark:text-darkText' : ''
      )}
    >
      <div className='flex flex-col lg:flex-row lg:gap-5'>
        <header className='lg:w-1/5'>
          <Sidebar />
        </header>
        <main className='lg:w-4/5 max-w-[854px] transition-all duration-300'>
          {children}
          {/* <Footer /> */}
        </main>
      </div>
    </div>
  );
};

export default Layout;
