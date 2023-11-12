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
    <div className='flex items-center w-full sm:w-auto '>
      <div className='relative w-full'>
        <SearchIcon
          size={18}
          className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
        />
        <input
          type='text'
          placeholder='Search...'
          className='w-full py-2 px-10 border-2 dark:border-neutral-600 rounded-lg transition-all duration-300 text-sm font-sora'
          value={searchTerm}
          onChange={onSearchChange}
        />
        {searchTerm && (
          <ClearIcon
            size={20}
            className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer'
            onClick={onClearSearch}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
