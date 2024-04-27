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
    <div className='flex items-center justify-between rounded-b-md border border-t-0 border-neutral-700 bg-neutral-900 px-2 py-1'>
      <div className='items-center  text-sm text-neutral-500'>
        &copy; <a href='https://aulianza.id'>aulianza</a>
      </div>
      {isFullScreen ? (
        <Tooltip title='Close'>
          <ExitFullScreenIcon
            size={22}
            onClick={onCloseFullScreen}
            className=' cursor-pointer text-neutral-500'
            data-umami-event='Open Fullscreen Playground'
          />
        </Tooltip>
      ) : (
        <Tooltip title='Fullscreen'>
          <FullScreenIcon
            size={22}
            onClick={onFullScreen}
            className=' cursor-pointer text-neutral-500'
            data-umami-event='Exit Fullscreen Playground'
          />
        </Tooltip>
      )}
    </div>
  );
};

export default PanelFooter;
