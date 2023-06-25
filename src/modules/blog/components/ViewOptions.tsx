import clsx from 'clsx';

type ViewOptionsProps = {
  option: string;
  setViewOption: (option: string) => void;
  type: string;
  icon: JSX.Element;
};

const ViewOptions = ({
  option,
  setViewOption,
  icon,
  type,
}: ViewOptionsProps) => {
  const isActive = option === type;

  return (
    <div
      className={clsx(
        'flex items-center font-medium gap-1 text-neutral-600 dark:text-neutral-400 border border-neutral-300 dark:border-neutral-600 p-1 rounded-lg hover:bg-neutral-100 hover:dark:bg-neutral-700 transition-all duration-300',
        isActive && 'bg-neutral-200 dark:bg-neutral-700 dark:!text-neutral-200'
      )}
      onClick={() => setViewOption(type)}
    >
      {icon}
    </div>
  );
};
export default ViewOptions;
