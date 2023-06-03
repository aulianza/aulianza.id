import React, { FC } from 'react';
import clsx from 'clsx';
import Icon from 'supercons';

type ViewOptionsProps = {
  option: string;
  setViewOption: (option: string) => void;
  icon: string;
};

const ViewOptions: FC<ViewOptionsProps> = ({ option, setViewOption, icon }) => {
  const isActive = option === icon;

  return (
    <div
      className={clsx(
        'flex items-center font-medium gap-1 text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-600 p-1 rounded-lg hover:bg-neutral-100 hover:dark:bg-neutral-700 transition-all duration-300',
        isActive && 'bg-neutral-200 dark:bg-neutral-700 dark:!text-neutral-200'
      )}
      onClick={() => setViewOption(icon)}
    >
      <Icon glyph={icon} size={28} />
    </div>
  );
};
export default ViewOptions;
