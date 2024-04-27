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
        'z-2 fixed bottom-0 w-full p-3',
        !expand && 'flex justify-end',
      )}
    >
      {!expand ? (
        <div
          className='m-2 cursor-pointer rounded-full bg-neutral-950 transition-all duration-100'
          onClick={handleMusicToggle}
        >
          <SpotifyIcon size={44} className='animate-pulse text-green-500' />
        </div>
      ) : (
        <div className='mt-5 flex items-center justify-between rounded-md bg-green-400 px-3 py-2  text-neutral-800 dark:bg-green-500 dark:text-neutral-900 '>
          <div className='flex items-center gap-3'>
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
              className='flex flex-col pt-0.5 hover:cursor-pointer hover:underline'
              onClick={() => handleOpenSongUrl(data?.songUrl)}
            >
              <div className='text-sm font-medium'>{trimmedSongTitle}</div>
              <div className='flex items-center gap-2 text-xs'>
                <AnimatedBars />
                <span className='pt-1 text-[14px] text-neutral-800'>
                  {trimmedSongArtist}
                </span>
              </div>
            </div>
          </div>
          <div className='flex gap-3 pr-0.5'>
            <CloseIcon
              size={28}
              className='cursor-pointer pt-0.5 text-neutral-900'
              onClick={handleMusicToggle}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NowPlayingCard;
