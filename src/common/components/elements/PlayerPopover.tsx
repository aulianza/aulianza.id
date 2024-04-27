import { Popover, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment } from 'react';

import { NowPlayingProps } from '@/common/types/spotify';

interface PlayerPopoverProps {
  isShow: boolean;
  playing: NowPlayingProps;
}
const PlayerPopover = ({ isShow, playing }: PlayerPopoverProps) => {
  const { albumImageUrl, album, title, artist } = playing;

  return (
    <Transition
      as={Fragment}
      show={isShow}
      enter='transition ease-out duration-200'
      enterFrom='opacity-0 translate-y-1'
      enterTo='opacity-100 translate-y-0'
      leave='transition ease-in duration-150'
      leaveFrom='opacity-100 translate-y-0'
      leaveTo='opacity-0 translate-y-1'
    >
      <Popover.Panel className='absolute bottom-10 left-0 z-20 w-60'>
        <div className='flex flex-col gap-5 overflow-hidden rounded-lg bg-neutral-100 p-4 shadow-lg ring-1 ring-black ring-opacity-5 dark:bg-neutral-800 dark:text-white'>
          {albumImageUrl && (
            <Image
              className='rounded-md'
              unoptimized
              alt={album}
              src={albumImageUrl}
              width={500}
              height={500}
            />
          )}

          <div className='space-y-2'>
            <div className='space-y-1 '>
              <div className='text-[15px] text-green-500'>{title}</div>
              <div className='text-sm text-neutral-700 dark:text-neutral-300'>
                {artist}
              </div>
            </div>
            <div className='flex flex-col text-[13px]'>
              <span className='text-neutral-500 dark:text-neutral-500'>
                Album:
              </span>
              <span className='text-neutral-600 dark:text-neutral-400'>
                {album}
              </span>
            </div>
          </div>
        </div>
      </Popover.Panel>
    </Transition>
  );
};

export default PlayerPopover;
