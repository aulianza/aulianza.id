import { useTheme } from 'next-themes';
import { BiMoon as DarkModeIcon, BiSun as LightModeIcon } from 'react-icons/bi';

import useHasMounted from '@/common/hooks/useHasMounted';

const ToggleMode = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  const isDarkTheme =
    hasMounted && (resolvedTheme === 'dark' || resolvedTheme === 'system');

  const toggleTheme = () =>
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');

  return (
    <button
      onClick={toggleTheme}
      className='flex items-center gap-2 py-2 px-4 w-full lg:hover:dark:bg-zinc-800 lg:hover:bg-gray-200 lg:hover:rounded-lg lg:hover:scale-105 lg:transition-all lg:duration-300 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300 '
    >
      {resolvedTheme === 'light' ? (
        <DarkModeIcon size={22} />
      ) : (
        <LightModeIcon size={22} />
      )}

      <div className='flex ml-0.5'>
        {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
      </div>
    </button>
  );
};

export default ToggleMode;
