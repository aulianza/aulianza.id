import { SiJavascript } from 'react-icons/si';

import Playground from '@/modules/playground';

const ContentPlayground = ({ initialCode }: { initialCode: string }) => {
  return (
    <>
      <div className='flex items-center gap-3 pt-6 mb-5 border-t dark:border-neutral-700 border-gray-300'>
        <SiJavascript size={22} className='text-yellow-400' />
        <h5 className='text-lg font-medium'>JavaScript Playground</h5>
      </div>
      <Playground initialCode={initialCode} />
    </>
  );
};

export default ContentPlayground;
