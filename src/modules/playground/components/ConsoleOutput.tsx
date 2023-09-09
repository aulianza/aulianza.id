import clsx from 'clsx';

interface ConsoleOutputProps {
  output: string;
  height?: string;
  isError: boolean;
}

const ConsoleOutput = ({ output, isError, height }: ConsoleOutputProps) => {
  return (
    <div
      className={clsx(
        'bg-neutral-900 text-neutral-50 py-3 px-4 overflow-y-auto',
        height && `h-[${height}]`,
        isError && `!text-red-400`
      )}
    >
      <pre className='text-sm'>{output}</pre>
    </div>
  );
};

export default ConsoleOutput;
