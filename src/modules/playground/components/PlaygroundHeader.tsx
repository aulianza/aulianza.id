import { SiJavascript } from 'react-icons/si';

const PlaygroundHeader = () => {
  return (
    <div className='flex flex-col md:items-center md:justify-center py-10 space-y-2'>
      <div className='flex items-center gap-3'>
        <SiJavascript size={24} className='text-yellow-400' />
        <h1 className='text-2xl font-medium font-sora'>
          JavaScript Playground
        </h1>
      </div>
      <p className='text-neutral-600 dark:text-neutral-400'>
        A no-fuss pure JavaScript playground with a live feedback loop
      </p>
    </div>
  );
};

export default PlaygroundHeader;
