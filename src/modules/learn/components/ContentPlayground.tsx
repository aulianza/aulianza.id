import { SiJavascript } from 'react-icons/si';

import Playground from '@/modules/playground';

const ContentPlayground = ({ initialCode }: { initialCode: string }) => {
  return (
    <>
      <div className='mb-5 flex items-center gap-3 border-t border-gray-300 pt-6 dark:border-neutral-700'>
        <SiJavascript size={22} className='text-yellow-400' />
        <h5 className='text-lg font-medium'>JavaScript Playground</h5>
      </div>
      <Playground initialCode={initialCode} />
    </>
  );
};

export default ContentPlayground;
