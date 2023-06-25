import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { MenuContext } from '@/common/context/MenuContext';
import useIsMobile from '@/common/hooks/useIsMobile';

import MobileMenu from './MobileMenu';
import MobileMenuButton from './MobileMenuButton';
import ProfileHeader from './ProfileHeader';
import Status from '../elements/Status';
import ThemeToggleButton from '../elements/ThemeToggleButton';

const Profile = () => {
  const isMobile = useIsMobile();
  const imageSize = isMobile ? 40 : 100;

  const [expandMenu, setExpandMenu] = useState<boolean>(false);

  const hideNavbar = () => {
    setExpandMenu(false);
  };

  return (
    <MenuContext.Provider value={{ hideNavbar }}>
      <div
        className={clsx(
          'z-10 absolute shadow-sm xl:shadow-none lg:border-none dark:border-b dark:border-neutral-800 bg-light dark:bg-dark lg:!bg-transparent w-full p-5 lg:relative lg:p-0',
          expandMenu && 'pb-0'
        )}
      >
        <div className='flex items-start justify-between lg:flex-col lg:space-y-3'>
          <ProfileHeader expandMenu={expandMenu} imageSize={imageSize} />

          {!isMobile && (
            <div className='flex items-center w-full justify-between'>
              <Status />
              <ThemeToggleButton />
            </div>
          )}

          {/* RY: new profile avatar design idea  */}
          {/* {!isMobile && (
            <div className='fixed top-0 flex flex-col gap-2 px-6 py-8 max-w-[214px] xl:min-w-[214px] items-center text-center rounded-b-2xl bg-neutral-100 border dark:border-none dark:bg-neutral-800'>
              <Image
                src='/images/aulianza.png'
                alt='Ryan Aulia'
                width={expandMenu ? 75 : imageSize}
                height={expandMenu ? 75 : imageSize}
                rounded='rounded-full'
                className='lg:hover:scale-105 mb-3'
              />
              <h2 className='flex-grow text-lg lg:text-xl font-medium'>
                Ryan Aulia
              </h2>
              <Status />
            </div>
          )} */}

          {isMobile && (
            <div
              className={clsx(
                'flex items-center gap-5',
                expandMenu &&
                  '!items-end flex-col-reverse justify-between h-[120px]'
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
