type BreaklineProps = {
  className?: string;
  [propName: string]: string | undefined;
};

const Breakline = ({ className = '', ...others }: BreaklineProps) => {
  return (
    <div
      className={`my-4 border-t border-gray-200 dark:border-neutral-800 ${className}`}
      data-testid='breakline'
      {...others}
    ></div>
  );
};

export default Breakline;
