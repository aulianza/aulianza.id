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
      className='flex w-full items-center gap-2 px-4 py-2 text-neutral-700 hover:text-neutral-900 dark:text-neutral-400 hover:dark:text-neutral-300 lg:transition-all lg:duration-300 lg:hover:scale-105 lg:hover:rounded-lg lg:hover:bg-gray-200 lg:hover:dark:bg-zinc-800 '
    >
      {resolvedTheme === 'light' ? (
        <DarkModeIcon size={22} />
      ) : (
        <LightModeIcon size={22} />
      )}

      <div className='ml-0.5 flex'>
        {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
      </div>
    </button>
  );
};

export default ToggleMode;
