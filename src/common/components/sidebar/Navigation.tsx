import { useContext } from 'react';
import { BiCommand as CommandIcon } from 'react-icons/bi';

import { MENU_ITEMS, SOCIAL_MEDIA } from '@/common/constant/menu';
import { CommandPaletteContext } from '@/common/context/CommandPaletteContext';

import Menu from './Menu';
import MenuItem from './MenuItem';
import Breakline from '../elements/Breakline';

const Navigation = () => {
  const { setIsOpen } = useContext(CommandPaletteContext);

  const filterdMenu = MENU_ITEMS?.filter((item) => item?.isShow);
  const filteredSocialMedia = SOCIAL_MEDIA?.filter((item) => item?.isShow);

  const handleOpenCommandPalette = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Menu list={filterdMenu} />

      <div className='pt-1'>
        <MenuItem
          title='/cmd'
          href='#'
          icon={<CommandIcon size={20} />}
          isExternal={false}
          onClick={() => handleOpenCommandPalette()}
        />
      </div>

      <Breakline />
      <Menu title="Let's Connect" list={filteredSocialMedia} />
    </>
  );
};

export default Navigation;
