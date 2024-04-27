import { Listbox, Transition } from '@headlessui/react';
import { useTheme } from 'next-themes';
import { Fragment, useEffect, useState } from 'react';
import { LuChevronsUpDown } from 'react-icons/lu';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const toggleTheme = () =>
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Listbox>
      <div className='relative mt-1 '>
        <Listbox.Button className='group relative w-full cursor-pointer rounded-lg border-[1.8px] bg-white py-2 pl-4 pr-10 text-left text-neutral-600 focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 sm:text-[15px]'>
          <span className='flex items-center gap-2 truncate'>
            {resolvedTheme === 'dark' ? (
              <>
                <MdDarkMode size={20} />
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <MdLightMode size={20} />
                <span>Light Mode</span>
              </>
            )}
          </span>
          <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2.5'>
            <LuChevronsUpDown
              className='h-5 w-5 text-neutral-500 transition-all duration-300 group-hover:text-neutral-600 group-hover:dark:text-neutral-400'
              aria-hidden='true'
            />
          </span>
        </Listbox.Button>
        <Transition as={Fragment} leaveFrom='opacity-100' leaveTo='opacity-0'>
          <Listbox.Options className='absolute mt-1.5 max-h-60 w-full overflow-auto rounded-md border border-neutral-200 bg-white py-1 text-base ring-1 ring-black/5 focus:outline-none dark:border-neutral-800 dark:bg-neutral-900 sm:text-sm'>
            <Listbox.Option
              className='relative cursor-pointer select-none py-1.5 pl-11 pr-4 text-neutral-600 hover:text-neutral-700 dark:text-neutral-400 hover:dark:text-neutral-300'
              value={`theme-${resolvedTheme}`}
              onClick={toggleTheme}
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}
                  >
                    {resolvedTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                  </span>
                  <span className='absolute inset-y-0 left-0 flex items-center pl-4'>
                    {resolvedTheme === 'dark' ? (
                      <MdLightMode size={20} />
                    ) : (
                      <MdDarkMode size={20} />
                    )}
                  </span>
                </>
              )}
            </Listbox.Option>
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};

export default ThemeSwitcher;
