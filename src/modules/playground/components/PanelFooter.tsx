import {
  MdOutlineFullscreen as FullScreenIcon,
  MdOutlineFullscreenExit as ExitFullScreenIcon,
} from 'react-icons/md';

import Tooltip from '@/common/components/elements/Tooltip';

interface PanelFooterProps {
  isFullScreen?: boolean;
  onCloseFullScreen?: () => void;
  onFullScreen?: () => void;
}

const PanelFooter = ({
  isFullScreen,
  onCloseFullScreen,
  onFullScreen,
}: PanelFooterProps) => {
  return (
    <div className='flex items-center justify-between bg-neutral-900 border border-neutral-700 border-t-0 py-1 px-2 rounded-b-md'>
      <div className='text-sm font-sora items-center text-neutral-500'>
        &copy; <a href='https://aulianza.id'>aulianza</a>
      </div>
      {isFullScreen ? (
        <Tooltip title='Close'>
          <ExitFullScreenIcon
            size={22}
            onClick={onCloseFullScreen}
            className=' text-neutral-500 cursor-pointer'
            data-umami-event='Open Fullscreen Playground'
          />
        </Tooltip>
      ) : (
        <Tooltip title='Fullscreen'>
          <FullScreenIcon
            size={22}
            onClick={onFullScreen}
            className=' text-neutral-500 cursor-pointer'
            data-umami-event='Exit Fullscreen Playground'
          />
        </Tooltip>
      )}
    </div>
  );
};

export default PanelFooter;
