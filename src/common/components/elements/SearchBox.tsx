import { useContext } from 'react';
import { BiCommand as CommandIcon } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';

import { CommandPaletteContext } from '@/common/context/CommandPaletteContext';

const SearchBox = () => {
  const { setIsOpen } = useContext(CommandPaletteContext);

  const handleOpenCommandPalette = () => setIsOpen(true);

  return (
    <div className='flex items-center gap-3 rounded-lg border-[1.8px] border-neutral-300 bg-neutral-100 px-3 py-1 text-neutral-500 backdrop-blur dark:border-neutral-700 dark:bg-neutral-900'>
      <FiSearch size={28} />
      <span
        onClick={() => handleOpenCommandPalette()}
        className='w-full text-[15px] hover:cursor-text'
      >
        Search
      </span>
      <div className='flex items-center gap-0.5 rounded bg-neutral-200 px-1 py-0.5 text-xs dark:bg-neutral-800'>
        <CommandIcon className='mt-0.5' />
        <span>k</span>
      </div>
    </div>
  );
};

export default SearchBox;
