import React, { FC } from 'react';
import Icon from 'supercons';
import { useTheme } from 'next-themes';

import useHasMounted from '@/common/hooks/use-has-mounted';

const ToggleMode: FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const hasMounted = useHasMounted();

  const isDarkTheme =
    hasMounted && (resolvedTheme === 'dark' || resolvedTheme === 'system');
  const toggleTheme = () =>
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');

  const switchText = 'Switch to ';

  return (
    <button
      onClick={toggleTheme}
      className='flex items-center gap-2 py-2 px-3 w-full lg:hover:dark:bg-zinc-800 lg:hover:bg-gray-200 lg:hover:rounded-lg lg:hover:scale-105 lg:transition-all lg:duration-300 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300'
    >
      <Icon glyph={isDarkTheme ? 'idea' : 'moon-fill'} size={22} />
      <div className='flex lg:text-[15px]'>
        <span className='hidden xl:block xl:mr-1'>{switchText}</span>
        {isDarkTheme ? 'Light Mode' : 'Dark Mode'}
      </div>
    </button>
  );
};

export default ToggleMode;
