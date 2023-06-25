import { MouseEvent } from 'react';

type PaginationButtonProps = {
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
  text: string;
  icon?: JSX.Element;
};

const PaginationButton = ({ onClick, text, icon }: PaginationButtonProps) => {
  return (
    <div
      className='flex items-center cursor-pointer font-medium gap-1 text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-600 py-2 px-4 rounded-lg hover:bg-neutral-100 hover:dark:bg-neutral-700 transition-all duration-300'
      onClick={onClick}
    >
      {text === 'Previous' && <span>{icon}</span>}
      <span>{text}</span>
      {text === 'Next' && <span>{icon}</span>}
    </div>
  );
};

export default PaginationButton;
