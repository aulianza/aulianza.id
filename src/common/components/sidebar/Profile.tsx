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
          'z-20 fixed shadow-sm sm:shadow-none lg:border-none dark:border-b dark:border-neutral-800 bg-light dark:bg-dark lg:!bg-transparent w-full p-5 lg:relative lg:p-0',
          expandMenu && 'pb-0'
        )}
      >
        <div className='flex items-start justify-between lg:flex-col lg:space-y-4 md:px-2'>
          <ProfileHeader expandMenu={expandMenu} imageSize={getImageSize()} />

          {!isMobile && (
            <div className='flex items-center w-full justify-between'>
              <Status />
              <ThemeToggleButton />
            </div>
          )}

          {isMobile && (
            <div
              className={clsx(
                'flex lg:hidden items-center gap-5 mt-2',
                expandMenu &&
                  '!items-end flex-col-reverse justify-between h-[120px] pb-1'
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
