/* eslint-disable react-hooks/exhaustive-deps */
import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { LuPlay as PlayIcon, LuTrash2 as ClearIcon } from 'react-icons/lu';
import {
  ImperativePanelHandle,
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from 'react-resizable-panels';

import useIsMobile from '@/common/hooks/useIsMobile';

import CodeEditor from './CodeEditor';
import ConsoleOutput from './ConsoleOutput';
import PanelFooter from './PanelFooter';
import PanelHeader from './PanelHeader';

interface CodePlaygroundProps {
  id?: string | undefined;
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
  id = undefined,
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
  const editorRef = useRef<ImperativePanelHandle>(null);
  const isMobile = useIsMobile();

  const panelDirection = isMobile ? 'vertical' : 'horizontal';

  const handleClearCode = () => onSetCode('');
  const handleClearOutput = () => onSetOutput('');

  const onLayout = (sizes: number[]) => {
    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
  };

  const handlePanelResize = () => {
    const panel = editorRef.current;
    if (panel !== null) {
      isMobile && panel.resize(50);
    }
  };

  useEffect(() => {
    isMobile && handlePanelResize();
  }, [isMobile]);

  return (
    <>
      <div className='flex flex-auto rounded-t-md border border-neutral-700 bg-neutral-900'>
        <PanelGroup
          autoSaveId={id}
          direction={panelDirection}
          onLayout={onLayout}
          style={{ height: isMobile ? '100vh' : '100%' }}
        >
          <Panel
            ref={editorRef}
            defaultSize={50}
            minSize={20}
            collapsible={true}
          >
            <PanelHeader title='JavaScript'>
              <div className='flex items-center gap-5'>
                <div
                  className='cursor-pointer'
                  onClick={handleClearCode}
                  data-umami-event='Clear Editor Playground'
                >
                  <ClearIcon
                    size={18}
                    className={clsx('text-neutral-400', code && 'text-red-400')}
                  />
                </div>
                <div
                  className='cursor-pointer'
                  onClick={onRunCode}
                  data-umami-event='Run Code Playground'
                >
                  <PlayIcon
                    size={18}
                    className={clsx(
                      'text-sky-500',
                      !code && '!text-neutral-400',
                    )}
                  />
                </div>
              </div>
            </PanelHeader>
            <CodeEditor
              code={code}
              height='500px'
              isFullScreen={isFullScreen}
              onChange={(newCode) =>
                newCode !== undefined && onSetCode(newCode)
              }
            />
          </Panel>
          <PanelResizeHandle className='w-2 bg-neutral-700' />
          <Panel defaultSize={50} minSize={20} collapsible={true}>
            <PanelHeader title='Console'>
              <div className='flex items-center'>
                <div
                  className='cursor-pointer'
                  onClick={handleClearOutput}
                  data-umami-event='Clear Output Playground'
                >
                  <ClearIcon
                    size={18}
                    className={clsx(
                      'text-neutral-400',
                      output && 'text-red-400',
                    )}
                  />
                </div>
              </div>
            </PanelHeader>
            <ConsoleOutput
              output={output}
              isError={isError}
              isFullScreen={isFullScreen}
            />
          </Panel>
        </PanelGroup>
      </div>
      <PanelFooter
        isFullScreen={isFullScreen}
        onCloseFullScreen={onCloseFullScreen}
        onFullScreen={onFullScreen}
      />
    </>
  );
};

export default CodePlayground;
