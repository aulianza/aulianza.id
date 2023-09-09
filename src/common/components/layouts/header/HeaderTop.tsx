import Link from 'next/link';
import React, { useContext } from 'react';
import { BiCommand as CommandIcon } from 'react-icons/bi';
import { MdVerified as VerifiedIcon } from 'react-icons/md';

import { MENU_ITEMS } from '@/common/constant/menu';
import { CommandPaletteContext } from '@/common/context/CommandPaletteContext';
import useIsMobile from '@/common/hooks/useIsMobile';

import Image from '../../elements/Image';
import ThemeToggleButton from '../../elements/ThemeToggleButton';
import Tooltip from '../../elements/Tooltip';
import MenuItem from '../../sidebar/MenuItem';
import Profile from '../../sidebar/Profile';

const HeaderTop = () => {
  const isMobile = useIsMobile();
  const { setIsOpen } = useContext(CommandPaletteContext);

  const filterdMenu = MENU_ITEMS?.filter((item) => item?.isShow);

  return (
    <header>
      {isMobile ? (
        <Profile />
      ) : (
        <div className='flex gap-5 items-center justify-between py-8 mx-8'>
          <div className='flex items-center gap-5'>
            <Image
              src='/images/aulianza.png'
              alt='Ryan Aulia'
              width={40}
              height={40}
              rounded='rounded-full'
              className='lg:hover:scale-105'
            />
            <div className='flex gap-2 items-center'>
              <Link href='/' passHref>
                <h2 className='flex-grow text-lg lg:text-xl font-sora font-medium'>
                  Ryan Aulia
                </h2>
              </Link>
              <Tooltip title='Verified'>
                <VerifiedIcon size={18} className='text-blue-400' />
              </Tooltip>
            </div>
          </div>

          <div className='flex items-center gap-5'>
            <div className='flex gap-1 items-center'>
              {filterdMenu?.map((item, index: number) => (
                <MenuItem key={index} {...item} hideIcon />
              ))}
            </div>
            <CommandIcon
              onClick={() => setIsOpen(true)}
              className='cursor-pointer'
              size={20}
            />
            <ThemeToggleButton />
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderTop;
