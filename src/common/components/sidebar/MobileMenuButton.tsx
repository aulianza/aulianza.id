import { HiMenu as MenuIcon } from 'react-icons/hi';
import { MdClose as CloseIcon } from 'react-icons/md';

interface MobileMenuButtonProps {
  expandMenu: boolean;
  setExpandMenu: (expand: boolean) => void;
}

const MobileMenuButton = ({
  expandMenu,
  setExpandMenu,
}: MobileMenuButtonProps) => {
  return (
    <div className='lg:hidden flex items-center justify-end'>
      <button
        className='block hover:text-gray-900 dark:text-white'
        onClick={() => setExpandMenu(!expandMenu)}
      >
        {!expandMenu ? <MenuIcon size={30} /> : <CloseIcon size={30} />}
      </button>
    </div>
  );
};

export default MobileMenuButton;
