import Image from 'next/image';
import { BsSpotify as SpotifyIcon } from 'react-icons/bs';
import useSWR from 'swr';

import { fetcher } from '@/services/fetcher';

import AnimatedBars from './AnimatedBars';

const NowPlayingBar = () => {
  const { data } = useSWR<{
    songUrl: string;
    albumImageUrl: string;
    album: string;
    title: string;
    artist: string;
  }>('/api/now-playing', fetcher);

  const handleOpenSongUrl = (url?: string) => {
    url && window.open(url, '_blank');
  };

  return (
    <div className='hidden lg:block fixed bottom-0 w-full z-[99999]'>
      <div className='flex justify-between bg-green-400 dark:bg-green-500 py-0.5 px-4 text-neutral-800 dark:text-neutral-900 font-sora text-[14px]'>
        {data?.songUrl ? (
          <div className='flex items-center gap-2'>
            <AnimatedBars />
            <div className='pt-0.5 hidden sm:block'>Now Playing :</div>
            <div className='flex gap-2 items-center transition-all duration-300'>
              {data?.albumImageUrl && (
                <Image
                  className='rounded-sm'
                  unoptimized
                  alt={data?.album}
                  src={data?.albumImageUrl}
                  width={18}
                  height={18}
                />
              )}
              <div
                className='flex gap-1 hover:underline hover:cursor-pointer pt-0.5'
                onClick={() => handleOpenSongUrl(data?.songUrl)}
              >
                <span>{data?.artist} -</span>
                <span>{data?.title}</span>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-1'>
            <SpotifyIcon size={16} className='mr-1' />
            <div className='pt-0.5'>Not Playing</div>
          </div>
        )}

        {data?.songUrl && (
          <div className='flex items-center gap-1'>
            <SpotifyIcon size={16} className='mr-0.5' />
            <span className='pt-0.5'>Listening on aulianza-devices</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default NowPlayingBar;
