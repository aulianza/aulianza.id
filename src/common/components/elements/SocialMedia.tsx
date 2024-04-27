import Link from 'next/link';

import { MenuItemProps } from '@/common/types/menu';

import Tooltip from './Tooltip';

type SocialMediaProps = {
  items: MenuItemProps[];
};

const SocialMedia = ({ items }: SocialMediaProps) => {
  return (
    <div className='flex flex-col space-y-1'>
      <div className='mb-2 ml-2 mt-1  text-sm text-neutral-600 dark:text-neutral-500'>
        Let's Connect
      </div>
      <div className='flex justify-between px-5 pt-2'>
        {items?.map((item: MenuItemProps, index: number) => (
          <Link
            key={index}
            href={item?.href}
            target='_blank'
            data-umami-event={item?.eventName}
          >
            <Tooltip title={item?.title}>
              <div className='text-neutral-700 transition duration-300 hover:text-neutral-900 dark:text-neutral-400 hover:dark:text-neutral-300 lg:hover:scale-110'>
                {item?.icon}
              </div>
            </Tooltip>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;
