import { useContext } from 'react';
import { BiCommand as CommandIcon } from 'react-icons/bi';
import { SiJavascript } from 'react-icons/si';
import { useWindowSize } from 'usehooks-ts';

import { MENU_ITEMS } from '@/common/constant/menu';
import { CommandPaletteContext } from '@/common/context/CommandPaletteContext';

import Menu from './Menu';
import MenuItem from './MenuItem';

const Navigation = () => {
  const { setIsOpen } = useContext(CommandPaletteContext);
  const { width } = useWindowSize();
  const isMobile = width < 480;

  const filterdMenu = MENU_ITEMS?.filter((item) => item?.isShow);

  const handleOpenCommandPalette = () => {
    setIsOpen(true);
  };

  const cn = 'group-hover:-rotate-12 transition-all duration-300';

  return (
    <div>
      <Menu list={filterdMenu} />
      <div className='py-1'>
        <MenuItem
          title='Playground'
          href='/playground'
          icon={<SiJavascript className={cn} size={18} />}
          isExternal={false}
        />
      </div>
      <MenuItem
        title={isMobile ? 'Command' : 'cmd + k'}
        href='#'
        icon={<CommandIcon className={cn} size={20} />}
        isExternal={false}
        onClick={() => handleOpenCommandPalette()}
      >
        <div className='relative inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-200 text-green-800 '>
          <div className='absolute -ml-2 w-[4.9rem] rounded-full h-5 border-2 border-green-300 animate-badge-pulse'></div>
          <span>AI Powered</span>
        </div>
      </MenuItem>
    </div>
  );
};

export default Navigation;
