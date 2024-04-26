import { useEffect, useState } from 'react';

import useIsMobile from '@/common/hooks/useIsMobile';

import Breakline from '../../elements/Breakline';
import SearchBox from '../../elements/SearchBox';
import ThemeSwitcher from '../../elements/ThemeSwitcher';
import Navigation from '../../sidebar/Navigation';
import Profile from '../../sidebar/Profile';

const Sidebar = () => {
  const isMobile = useIsMobile();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id='sidebar'
      // className='flex flex-col space-y-6 transition-all duration-300 lg:py-8'
      className='sticky top-0 z-10 flex flex-col space-y-6 transition-all duration-300 lg:py-6'
    >
      <Profile isScrolled={isScrolled} />
      {!isMobile && (
        <div className='space-y-3'>
          <div className='pb-1'>
            <SearchBox />
          </div>
          <Navigation />
          <Breakline className='mx-1' />
          <div className='space-y-2.5 px-1'>
            <div className='px-3'>
              <span className='text-sm text-neutral-600'>Theme</span>
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
