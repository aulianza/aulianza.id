import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

import { MenuContext } from '@/common/context/MenuContext';
import useIsMobile from '@/common/hooks/useIsMobile';

import MobileMenu from './MobileMenu';
import MobileMenuButton from './MobileMenuButton';
import ProfileHeader from './ProfileHeader';
import Status from '../elements/Status';
import ThemeToggleButton from '../elements/ThemeToggleButton';

interface ProfileProps {
  isScrolled?: boolean;
}

const Profile = ({ isScrolled = false }: ProfileProps) => {
  const isMobile = useIsMobile();

  const getImageSize = () => {
    let size = isMobile ? 40 : 100;
    if (!isMobile && isScrolled) {
      size = 80;
    }
    return size;
  };

  const [expandMenu, setExpandMenu] = useState<boolean>(false);

  const hideNavbar = () => {
    setExpandMenu(false);
  };

  useEffect(() => {
    if (expandMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expandMenu]);

  return (
    <MenuContext.Provider value={{ hideNavbar }}>
      <div
        className={clsx(
          'fixed z-20 w-full bg-light p-5 shadow-sm dark:border-b dark:border-neutral-800 dark:bg-dark sm:shadow-none lg:relative lg:border-none lg:!bg-transparent lg:p-0',
          expandMenu && 'pb-0',
        )}
      >
        <div className='flex items-start justify-between md:px-2 lg:flex-col lg:space-y-4'>
          <ProfileHeader expandMenu={expandMenu} imageSize={getImageSize()} />

          {!isMobile && (
            <div className='flex w-full items-center justify-between'>
              <Status />
              <ThemeToggleButton />
            </div>
          )}

          {isMobile && (
            <div
              className={clsx(
                'mt-2 flex items-center gap-5 lg:hidden',
                expandMenu &&
                  'h-[120px] flex-col-reverse !items-end justify-between pb-1',
              )}
            >
              <ThemeToggleButton />
              <MobileMenuButton
                expandMenu={expandMenu}
                setExpandMenu={setExpandMenu}
              />
            </div>
          )}
        </div>

        {isMobile && (
          <AnimatePresence>{expandMenu && <MobileMenu />}</AnimatePresence>
        )}
      </div>
    </MenuContext.Provider>
  );
};

export default Profile;
