import { Combobox, Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { Fragment, useContext, useEffect, useState } from 'react';
import {
  BiMoon as DarkModeIcon,
  BiSearch as SearchIcon,
  BiSun as LightModeIcon,
} from 'react-icons/bi';
import { useDebounce } from 'usehooks-ts';

import { MENU_ITEMS } from '@/common/constant/menu';
import { CommandPaletteContext } from '@/common/context/CommandPaletteContext';
import { MenuItemProps } from '@/common/types/menu';

interface MenuOptionItemProps extends MenuItemProps {
  click?: () => void;
  closeOnSelect: boolean;
}

interface MenuOptionProps {
  title: string;
  children: MenuOptionItemProps[];
}

export default function CommandPalette() {
  const router = useRouter();

  const { isOpen, setIsOpen } = useContext(CommandPaletteContext);
  const [query, setQuery] = useState('');

  const queryDebounce = useDebounce(query, 300);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        setIsOpen(!isOpen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const menuOptions: MenuOptionProps[] = [
    {
      title: 'THEME',
      children: [
        {
          icon:
            resolvedTheme === 'dark' ? (
              <LightModeIcon size={20} />
            ) : (
              <DarkModeIcon size={20} />
            ),
          title: `Switch to ${
            resolvedTheme === 'dark' ? 'Light' : 'Dark'
          } Mode`,
          click: () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark'),
          href: '#',
          isExternal: false,
          closeOnSelect: false,
        },
      ],
    },
    {
      title: 'PAGES',
      children: MENU_ITEMS?.map((menu) => ({
        ...menu,
        closeOnSelect: true,
      })),
    },
  ];

  const filterMenuOptions: MenuOptionProps[] = queryDebounce
    ? menuOptions.map((menu) => ({
        ...menu,
        children: menu.children.filter((item) =>
          item.title.toLowerCase().includes(queryDebounce.toLowerCase())
        ),
      }))
    : menuOptions;

  const handleSelect = (menu: MenuOptionItemProps) => {
    setQuery('');

    if (menu.closeOnSelect) setIsOpen(false);

    if (menu.click) {
      menu.click();
      return;
    }

    if (menu.isExternal) {
      window.open(menu.href, '_blank');
    } else {
      router.push(menu?.href as string);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.target.value);

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        onClose={setIsOpen}
        className='fixed inset-0 z-[999] overflow-y-auto p-4 pt-[25vh]'
      >
        <Transition.Child
          as={Fragment}
          enter='transition-opacity duration-200 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-100 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-neutral-600/90 dark:bg-neutral-900/90' />
        </Transition.Child>

        <Dialog.Panel>
          <Transition.Child
            as={Fragment}
            enter='transition-transform duration-200 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='transition-transform duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Combobox
              onChange={(menu: MenuOptionItemProps) => handleSelect(menu)}
              as='div'
              className='relative mx-auto max-w-lg overflow-hidden rounded-xl border-2 border-neutral-300 bg-white shadow-3xl ring-1 ring-black/5 dark:divide-neutral-600 dark:border-neutral-800 dark:bg-neutral-950'
            >
              <div className='flex gap-3 items-center border-b border-neutral-300 dark:border-neutral-800 px-4'>
                <SearchIcon size={22} />
                <Combobox.Input
                  onChange={handleSearch}
                  className='h-14 w-full border-0 bg-transparent text-neutral-800 placeholder-neutral-500 focus:outline-none focus:ring-0 dark:text-neutral-200'
                  placeholder='Press Cmd + K anytime to access this command palette'
                />
              </div>

              <div className='max-h-80 overflow-y-auto py-2 px-1'>
                {filterMenuOptions.map((menu) => (
                  <div
                    key={menu.title}
                    className={clsx(
                      menu?.children?.length === 0 && 'hidden',
                      'py-1'
                    )}
                  >
                    <div className='my-2 px-5 text-xs text-neutral-500'>
                      {menu?.title}
                    </div>
                    <Combobox.Options static className='space-y-1'>
                      {menu?.children?.map((child, index) => (
                        <Combobox.Option key={index.toString()} value={child}>
                          {({ active }) => (
                            <div
                              className={clsx(
                                active
                                  ? 'bg-neutral-200 text-neutral-600 dark:bg-neutral-700/60 dark:text-white'
                                  : 'text-neutral-600 dark:text-neutral-300',
                                'mx-2 flex cursor-pointer items-center gap-3 rounded-md py-2 px-4'
                              )}
                            >
                              {child?.icon && <span>{child?.icon}</span>}
                              <span>{child?.title}</span>
                            </div>
                          )}
                        </Combobox.Option>
                      ))}
                    </Combobox.Options>
                  </div>
                ))}
              </div>

              {queryDebounce &&
                filterMenuOptions.map((item) => item.children).flat(1)
                  .length === 0 && (
                  <p className='p-4 mb-4 text-sm text-neutral-500 text-center'>
                    No results found.
                  </p>
                )}
            </Combobox>
          </Transition.Child>
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  );
}
