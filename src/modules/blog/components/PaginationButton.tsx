import { MouseEvent } from 'react';

type PaginationButtonProps = {
  onClick: (event: MouseEvent<HTMLDivElement>) => void;
  text: string;
  icon?: JSX.Element;
};

const PaginationButton = ({ onClick, text, icon }: PaginationButtonProps) => {
  return (
    <div
      className='flex cursor-pointer items-center gap-1 rounded-lg border border-neutral-300 px-4 py-2 font-medium text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-400 hover:dark:bg-neutral-700'
      onClick={onClick}
    >
      {text === 'Previous' && <span>{icon}</span>}
      <span>{text}</span>
      {text === 'Next' && <span>{icon}</span>}
    </div>
  );
};

export default PaginationButton;
