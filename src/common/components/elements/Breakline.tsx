import React, { FC } from 'react';

type BreaklineProps = {
  className?: string;
  [propName: string]: any;
};

const Breakline: FC<BreaklineProps> = ({ className, ...others }) => {
  return (
    <div
      className={`border-t dark:border-neutral-700 border-gray-300 my-4 ${className}`}
      {...others}
    ></div>
  );
};

export default Breakline;
