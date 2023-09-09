/* eslint-disable no-console */
import { useState } from 'react';
import { SiJavascript } from 'react-icons/si';

import ModalWrapper from '@/common/components/elements/ModalWrapper';

import CodePlayground from './CodePlayground';

interface PlaygroundProps {
  isHeading?: boolean;
}

const Playground = ({ isHeading = false }: PlaygroundProps) => {
  const [code, setCode] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [isError, setError] = useState<boolean>(false);
  const [isFullScreen, setFullScreen] = useState<boolean>(false);

  const handleFullScreen = () => {
    setFullScreen(!isFullScreen);
  };

  const handleRunCode = () => {
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

      <CodePlayground
        onFullScreen={handleFullScreen}
        code={code}
        output={output}
        isError={isError}
        onRunCode={handleRunCode}
        onSetCode={setCode}
        onSetOutput={setOutput}
      />

      <ModalWrapper isOpen={isFullScreen} onClose={handleFullScreen}>
        <CodePlayground
          isFullScreen={isFullScreen}
          onCloseFullScreen={handleFullScreen}
          code={code}
          output={output}
          isError={isError}
          onRunCode={handleRunCode}
          onSetCode={setCode}
          onSetOutput={setOutput}
        />
      </ModalWrapper>
    </>
  );
};

export default Playground;
