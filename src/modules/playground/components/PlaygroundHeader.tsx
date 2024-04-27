import { SiJavascript } from 'react-icons/si';

const PlaygroundHeader = () => {
  return (
    <div className='flex flex-col space-y-2 py-10 md:items-center md:justify-center'>
      <div className='flex items-center gap-3'>
        <SiJavascript size={24} className='text-yellow-400' />
        <h1 className=' text-2xl font-medium'>JavaScript Playground</h1>
      </div>
      <p className='text-neutral-600 dark:text-neutral-400'>
        A no-fuss pure JavaScript playground with feedback
      </p>
    </div>
  );
};

export default PlaygroundHeader;
