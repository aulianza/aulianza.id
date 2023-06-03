import React, { FC, useState } from 'react';
import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';

import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';
import ProfileHeader from './ProfileHeader';
import Status from '../elements/Status';

import useIsMobile from '@/common/hooks/use-is-mobile';
import { MenuContext } from '@/common/context/MenuContext';

const Profile: FC = () => {
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
          'z-10 absolute bg-light shadow-sm xl:shadow-none lg:border-none dark:border-b dark:border-neutral-800 dark:bg-dark w-full p-5 lg:relative lg:p-0',
          expandMenu && 'pb-0'
        )}
      >
        <div className='flex items-center lg:items-start justify-between lg:flex-col lg:space-y-3'>
          <ProfileHeader expandMenu={expandMenu} imageSize={imageSize} />

          {!isMobile && <Status />}

          {isMobile && (
            <MobileMenuButton
              expandMenu={expandMenu}
              setExpandMenu={setExpandMenu}
            />
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
