import { Popover } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';
import { BsSpotify as SpotifyIcon } from 'react-icons/bs';
import useSWR from 'swr';

import { DeviceProps, NowPlayingProps } from '@/common/types/spotify';
import { fetcher } from '@/services/fetcher';

import AnimatedBars from './AnimatedBars';
import DevicePopover from './DevicePopover';
import PlayerPopover from './PlayerPopover';

const NowPlayingBar = () => {
  const [isShowDeviceList, setShowDeviceList] = useState(false);
  const [isShowPlayingInfo, setShowPlayingInfo] = useState(false);

  const { data: playingData } = useSWR<NowPlayingProps>(
    '/api/now-playing',
    fetcher
  );

  const { data: devicesData = [] } = useSWR<DeviceProps[]>(
    '/api/available-devices',
    fetcher
  );

  const activeDevice = devicesData?.find((device) => device.is_active);

  const handleOpenSongUrl = (url?: string) => {
    url && window.open(url, '_blank');
  };

  if (!playingData?.songUrl) return null;

  return (
    <div className='hidden lg:block fixed bottom-0 w-full z-[99999]'>
      <div className='flex justify-between bg-green-400 dark:bg-green-500 pt-[2.5px] pb-0.5 px-4 text-neutral-800 dark:text-neutral-900 text-[14px]'>
        {playingData?.songUrl ? (
          <Popover className='relative'>
            <Popover.Button
              as='div'
              onMouseEnter={() => setShowPlayingInfo(true)}
              onMouseLeave={() => setShowPlayingInfo(false)}
            >
              <div className='flex items-center gap-2'>
                <AnimatedBars />
                <div className='hidden sm:block '>Now Playing :</div>
                <div className='flex gap-2 items-center transition-all duration-300'>
                  {playingData?.albumImageUrl && (
                    <Image
                      className='rounded-sm'
                      unoptimized
                      alt={playingData?.album}
                      src={playingData?.albumImageUrl}
                      width={18}
                      height={18}
                    />
                  )}
                  <div
                    className='flex gap-1 hover:underline hover:cursor-pointer'
                    onClick={() => handleOpenSongUrl(playingData?.songUrl)}
                  >
                    <span>{playingData?.artist} -</span>
                    <span>{playingData?.title}</span>
                  </div>
                </div>
              </div>
            </Popover.Button>
            <PlayerPopover isShow={isShowPlayingInfo} playing={playingData} />
          </Popover>
        ) : (
          <div className='flex items-center gap-1'>
            <SpotifyIcon size={16} className='mr-1' />
            <div>Not Playing</div>
          </div>
        )}

        {playingData?.songUrl && (
          <Popover className='relative'>
            <Popover.Button
              as='div'
              onMouseEnter={() => setShowDeviceList(true)}
              onMouseLeave={() => setShowDeviceList(false)}
            >
              <div className='flex items-center gap-1'>
                <SpotifyIcon size={16} className='mr-0.5' />
                <div>
                  Listening on{' '}
                  <span className='font-medium'>{activeDevice?.name}</span>
                </div>
              </div>
            </Popover.Button>
            <DevicePopover isShow={isShowDeviceList} devices={devicesData} />
          </Popover>
        )}
      </div>
    </div>
  );
};

export default NowPlayingBar;
