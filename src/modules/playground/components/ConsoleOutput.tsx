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
        'overflow-y-auto bg-neutral-900 px-4 py-3 text-neutral-50',
        isFullScreen ? `h-[70vh]` : 'h-[500px]',
        isError && `!text-red-400`,
      )}
    >
      <code
        className={clsx('text-sm')}
        style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}
      >
        {output}
      </code>
    </div>
  );
};

export default ConsoleOutput;
