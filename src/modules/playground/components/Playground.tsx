/* eslint-disable no-console */
import { ReactNode, useState } from 'react';
import { LuPlay as PlayIcon, LuTrash2 as ClearIcon } from 'react-icons/lu';
import { SiJavascript } from 'react-icons/si';

import Tooltip from '@/common/components/elements/Tooltip';

import CodeEditor from './CodeEditor';
import ConsoleOutput from './ConsoleOutput';

interface PlaygroundProps {
  isHeading?: boolean;
}

interface PlaygroundHeaderProps {
  title: string;
  children?: ReactNode;
}

const Playground = ({ isHeading = false }: PlaygroundProps) => {
  const [code, setCode] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [isError, setError] = useState<boolean>(false);

  const runCode = () => {
    try {
      setError(false);

      let capturedConsoleOutput = '';
      const originalConsoleLog = console.log;

      console.log = (message) => (capturedConsoleOutput += `${message}\n`);

      const result = new Function(code)();
      console.log = originalConsoleLog;

      setOutput(capturedConsoleOutput + (result?.toString() ?? ''));
    } catch (error) {
      setError(true);
      if (error instanceof Error) {
        setOutput(error.toString());
      } else {
        setOutput('An unknown error occurred.');
      }
    }
  };

  return (
    <>
      {isHeading && (
        <div className='flex flex-col md:items-center md:justify-center py-10 space-y-2'>
          <div className='flex items-center gap-3'>
            <SiJavascript size={24} className='text-yellow-400' />
            <h1 className='text-2xl font-medium font-sora'>
              JavaScript Playground
            </h1>
          </div>
          <p className='text-neutral-600 dark:text-neutral-400'>
            A no-fuss pure JavaScript playground with a live feedback loop
          </p>
        </div>
      )}
      <div>
        <div className='flex flex-col md:flex-row bg-neutral-900'>
          <div className='w-full md:w-1/2 border border-neutral-700 rounded-l-sm'>
            <PlaygroundHeader title='JavaScript'>
              <div className='flex items-center gap-5'>
                <Tooltip title='Clear Editor'>
                  <div className='cursor-pointer' onClick={() => setCode('')}>
                    <ClearIcon size={18} className='text-red-400' />
                  </div>
                </Tooltip>
                <Tooltip title='Run Code'>
                  <div className='cursor-pointer' onClick={runCode}>
                    <PlayIcon size={18} className='text-sky-500' />
                  </div>
                </Tooltip>
              </div>
            </PlaygroundHeader>
            <div>
              <CodeEditor
                code={code}
                height='500px'
                onChange={(newCode) =>
                  newCode !== undefined && setCode(newCode)
                }
              />
            </div>
          </div>
          <div className='w-full md:w-1/2 border border-neutral-700 border-t-0 md:border-l-0 md:border-t rounded-r-sm'>
            <PlaygroundHeader title='Console'>
              <div className='flex items-center'>
                <Tooltip title='Clear Console'>
                  <div className='cursor-pointer' onClick={() => setOutput('')}>
                    <ClearIcon size={18} className='text-red-400' />
                  </div>
                </Tooltip>
              </div>
            </PlaygroundHeader>
            <div>
              <ConsoleOutput output={output} isError={isError} height='500px' />
            </div>
          </div>
        </div>
        <div className='flex justify-end bg-neutral-900 border border-neutral-700 border-t-0 py-1 px-2'>
          <span className='text-sm font-sora text-neutral-500 '>
            by aulianza
          </span>
        </div>
      </div>
    </>
  );
};

export default Playground;

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
