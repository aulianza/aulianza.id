import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { BiCommand as CommandIcon } from 'react-icons/bi'
import { FiMenu as MenuIcon } from 'react-icons/fi'
import {
  MdClose as CloseIcon,
  MdVerified as VerifiedIcon,
} from 'react-icons/md'

import { MENU_ITEMS } from '@/common/constant/menu'
import { CommandPaletteContext } from '@/common/context/CommandPaletteContext'

import Image from '../../elements/Image'
import ThemeToggleButton from '../../elements/ThemeToggleButton'
import Tooltip from '../../elements/Tooltip'
import Profile from '../../sidebar/Profile'

const HeaderTop = () => {
  const { setIsOpen } = useContext(CommandPaletteContext)
  const [showMenu, setShowMenu] = useState(false)

  const router = useRouter()

  const menus = MENU_ITEMS.filter(
    (item) => item.isShow && item.title !== 'Home',
  )

  return (
    <header>
      <div className='mx-8 hidden items-center justify-between gap-5 py-8 lg:flex'>
        <div className='flex items-center gap-5'>
          <Image
            src='/images/aulianza-new.png'
            alt='Ryan Aulia'
            width={40}
            height={40}
            rounded='rounded-full'
            className='rotate-3 border-2 border-neutral-400 dark:border-neutral-600 lg:hover:scale-105'
          />
          {!showMenu && (
            <div className='flex items-center gap-3'>
              <Link href='/' passHref>
                <h2 className='flex-grow font-sora text-lg font-medium lg:text-xl'>
                  Ryan Aulia
                </h2>
              </Link>
              <Tooltip title='Verified'>
                <VerifiedIcon
                  size={18}
                  className='text-blue-400'
                  data-aos='flip-right'
                />
              </Tooltip>
            </div>
          )}
        </div>

        <div className='flex items-center justify-between gap-5'>
          {showMenu && (
            <div className='flex items-center gap-6' data-aos='flip-up'>
              {menus.map((menu, index) => (
                <Link
                  key={index}
                  href={menu.href}
                  passHref
                  className={clsx(
                    'text-neutral-700 hover:text-neutral-800 dark:text-neutral-400 hover:dark:text-neutral-100',
                    router.pathname === menu?.href &&
                      '!text-neutral-800 dark:!text-neutral-100',
                  )}
                >
                  <div>{menu.title}</div>
                </Link>
              ))}
            </div>
          )}

          {!showMenu && (
            <>
              <ThemeToggleButton />
              <CommandIcon
                onClick={() => setIsOpen(true)}
                className='cursor-pointer'
                size={20}
              />
            </>
          )}

          <button
            className='flex items-center gap-2 rounded-md border p-2 backdrop-blur dark:border-neutral-700 dark:bg-neutral-900'
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <CloseIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </div>
      <div className='block lg:hidden'>
        <Profile />
      </div>
    </header>
  )
}

export default HeaderTop
