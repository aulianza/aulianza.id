import { BiSearchAlt as SearchIcon, BiX as ClearIcon } from 'react-icons/bi';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClearSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  onSearchChange,
  onClearSearch,
}) => {
  return (
    <div className='flex w-full items-center sm:w-auto '>
      <div className='relative w-full'>
        <SearchIcon
          size={18}
          className='absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400'
        />
        <input
          type='text'
          placeholder='Search...'
          className='w-full rounded-lg border-2 px-10 py-2  text-sm transition-all duration-300 dark:border-neutral-600'
          value={searchTerm}
          onChange={onSearchChange}
        />
        {searchTerm && (
          <ClearIcon
            size={20}
            className='absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-gray-400'
            onClick={onClearSearch}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
