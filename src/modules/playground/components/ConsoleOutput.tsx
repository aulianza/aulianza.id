import clsx from 'clsx';

interface ConsoleOutputProps {
  output: string;
  isError: boolean;
  isFullScreen?: boolean;
}

const ConsoleOutput = ({
  output,
  isError,
  isFullScreen = false,
}: ConsoleOutputProps) => {
  return (
    <div
      className={clsx(
        'bg-neutral-900 text-neutral-50 py-3 px-4 overflow-y-auto',
        isFullScreen ? `h-[70vh]` : 'h-[500px]',
        isError && `!text-red-400`
      )}
    >
      <pre className={clsx('text-sm')}>{output}</pre>
    </div>
  );
};

export default ConsoleOutput;
