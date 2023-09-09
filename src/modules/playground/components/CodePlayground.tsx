import clsx from 'clsx';
import { ReactNode } from 'react';
import { LuPlay as PlayIcon, LuTrash2 as ClearIcon } from 'react-icons/lu';
import {
  MdOutlineFullscreen as FullScreenIcon,
  MdOutlineFullscreenExit as ExitFullScreenIcon,
} from 'react-icons/md';

import Tooltip from '@/common/components/elements/Tooltip';

import CodeEditor from './CodeEditor';
import ConsoleOutput from './ConsoleOutput';

interface PlaygroundHeaderProps {
  title: string;
  children?: ReactNode;
}

interface CodePlaygroundProps {
  code: string;
  output: string;
  isFullScreen?: boolean;
  onFullScreen?: () => void;
  onCloseFullScreen?: () => void;
  onRunCode?: () => void;
  onSetCode: (code: string) => void;
  onSetOutput: (output: string) => void;
  isError?: boolean;
}

const CodePlayground = ({
  code,
  output,
  isFullScreen,
  onFullScreen,
  onCloseFullScreen,
  onRunCode,
  onSetCode,
  onSetOutput,
  isError = false,
}: CodePlaygroundProps) => {
  const handleClearCode = () => onSetCode('');
  const handleClearOutput = () => onSetOutput('');

  return (
    <div>
      <div className='flex flex-col md:flex-row bg-neutral-900'>
        <div className='w-full md:w-1/2 border border-neutral-700 rounded-tl-md'>
          <PlaygroundHeader title='JavaScript'>
            <div className='flex items-center gap-5'>
              <Tooltip title='Clear Editor'>
                <div className='cursor-pointer' onClick={handleClearCode}>
                  <ClearIcon size={18} className='text-red-400' />
                </div>
              </Tooltip>
              <Tooltip title='Run Code'>
                <div className='cursor-pointer' onClick={onRunCode}>
                  <PlayIcon
                    size={18}
                    className={clsx(
                      'text-sky-500',
                      !code && '!text-neutral-400'
                    )}
                  />
                </div>
              </Tooltip>
            </div>
          </PlaygroundHeader>
          <div>
            <CodeEditor
              code={code}
              height='500px'
              isFullScreen={isFullScreen}
              onChange={(newCode) =>
                newCode !== undefined && onSetCode(newCode)
              }
            />
          </div>
        </div>
        <div className='w-full md:w-1/2 border border-neutral-700 border-t-0 md:border-l-0 md:border-t rounded-tr-md'>
          <PlaygroundHeader title='Console'>
            <div className='flex items-center'>
              <Tooltip title='Clear Console'>
                <div className='cursor-pointer' onClick={handleClearOutput}>
                  <ClearIcon size={18} className='text-red-400' />
                </div>
              </Tooltip>
            </div>
          </PlaygroundHeader>
          <div>
            <ConsoleOutput
              output={output}
              isError={isError}
              isFullScreen={isFullScreen}
            />
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between bg-neutral-900 border border-neutral-700 border-t-0 py-1 px-2 rounded-b-md'>
        {/* !!! PLEASE DO NOT REMOVE THIS LINE OF WATERMARK, USE IT WISELY !!! */}
        <div className='text-sm font-sora items-center text-neutral-500'>
          &copy; <a href='https://aulianza.id'>aulianza</a>
        </div>
        {isFullScreen ? (
          <Tooltip title='Close'>
            <ExitFullScreenIcon
              size={22}
              onClick={onCloseFullScreen}
              className=' text-neutral-500 cursor-pointer'
            />
          </Tooltip>
        ) : (
          <Tooltip title='Fullscreen'>
            <FullScreenIcon
              size={22}
              onClick={onFullScreen}
              className=' text-neutral-500 cursor-pointer'
            />
          </Tooltip>
        )}
      </div>
    </div>
  );
};

export default CodePlayground;

const PlaygroundHeader = ({ title, children }: PlaygroundHeaderProps) => {
  return (
    <div className='flex justify-between py-2 px-3 border border-b-neutral-700 border-t-0 border-x-0'>
      <div className='py-1 px-2 bg-neutral-600 text-xs rounded-md text-neutral-50 font-sora'>
        {title}
      </div>
      {children && children}
    </div>
  );
};
