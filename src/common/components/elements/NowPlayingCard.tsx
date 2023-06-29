import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { BsSpotify as SpotifyIcon } from 'react-icons/bs';
import { MdClose as CloseIcon } from 'react-icons/md';
import useSWR from 'swr';

import { NowPlayingProps } from '@/common/types/spotify';
import { fetcher } from '@/services/fetcher';

import AnimatedBars from './AnimatedBars';

const NowPlayingCard = ({ isExpand = false }: { isExpand?: boolean }) => {
  const { data } = useSWR<NowPlayingProps>('/api/now-playing', fetcher);

  const [expand, setExpand] = useState(isExpand);

  const trimmedSongTitle =
    data?.title &&
    data?.title.slice(0, 40) + (data?.title?.length > 40 ? '...' : '');

  const trimmedSongArtist =
    data?.artist &&
    data?.artist.slice(0, 20) + (data?.artist?.length > 20 ? '...' : '');

  const handleOpenSongUrl = (url?: string) => {
    url && window.open(url, '_blank');
  };

  const handleMusicToggle = () => setExpand(!expand);

  if (!data?.songUrl) return null;

  return (
    <div
      className={clsx(
        'fixed bottom-0 p-3 z-2 w-full',
        !expand && 'flex justify-end'
      )}
    >
      {!expand ? (
        <div
          className='bg-neutral-950 rounded-full m-2 transition-all duration-100 cursor-pointer'
          onClick={handleMusicToggle}
        >
          <SpotifyIcon size={44} className='text-green-500 animate-pulse' />
        </div>
      ) : (
        <div className='flex items-center justify-between py-2 px-3 mt-5 bg-green-400 dark:bg-green-500 text-neutral-800 dark:text-neutral-900 font-sora rounded-md '>
          <div className='flex gap-3 items-center'>
            {data?.albumImageUrl && (
              <Image
                className='rounded-md'
                unoptimized
                alt={data?.album}
                src={data?.albumImageUrl}
                width={60}
                height={60}
              />
            )}
            <div
              className='flex flex-col hover:underline hover:cursor-pointer pt-0.5'
              onClick={() => handleOpenSongUrl(data?.songUrl)}
            >
              <div className='font-medium text-sm'>{trimmedSongTitle}</div>
              <div className='flex gap-2 items-center text-xs'>
                <AnimatedBars />
                <span className='text-neutral-800 text-[14px] pt-1'>
                  {trimmedSongArtist}
                </span>
              </div>
            </div>
          </div>
          <div className='flex gap-3 pr-0.5'>
            <CloseIcon
              size={28}
              className='text-neutral-900 pt-0.5 cursor-pointer'
              onClick={handleMusicToggle}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NowPlayingCard;
