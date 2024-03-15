import { TbMoodSadSquint as MoodIcon } from 'react-icons/tb';

type EmptyStatePageProps = {
  message: string;
};

const EmptyState = ({ message }: EmptyStatePageProps) => {
  return (
    <div className='flex flex-col items-center justify-center space-y-3 py-5 text-neutral-400 dark:text-neutral-500'>
      <MoodIcon size={48} />
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;
