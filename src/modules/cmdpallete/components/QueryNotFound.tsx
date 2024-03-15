import { BiLogoGoogle as GoogleIcon } from 'react-icons/bi';
import { HiOutlineChat as AiIcon } from 'react-icons/hi';

import Button from '@/common/components/elements/Button';

interface QueryNotFoundProps {
  query: string;
  onAskAiAssistant: () => void;
  onFindGoogle: () => void;
}

const QueryNotFound = ({
  query,
  onAskAiAssistant,
  onFindGoogle,
}: QueryNotFoundProps) => {
  return (
    <div className='flex flex-col items-center space-y-6 px-5 pb-10 pt-5 '>
      <div className='space-y-2 text-center text-neutral-500'>
        <p>
          No result found about
          <span className='ml-1 mr-2 italic text-neutral-600 dark:text-neutral-400'>
            `{query}`
          </span>
          in this website.
        </p>
        <p className='text-neutral-600 dark:text-neutral-400'>
          Ask my AI Assistant or find in Google instead?
        </p>
      </div>
      <div className='flex w-full flex-col justify-center gap-3 lg:flex-row'>
        <Button
          onClick={onAskAiAssistant}
          className='justify-center !bg-green-600'
          data-umami-event='Click Ask AI Assistant'
        >
          <AiIcon size={20} /> Ask AI Assistant
        </Button>
        <Button
          onClick={onFindGoogle}
          className='justify-center !bg-indigo-600'
          data-umami-event='Click Find in Google'
        >
          <GoogleIcon size={20} />
          Find in Google
        </Button>
      </div>
      <p className='text-sm text-neutral-500'>
        Press `ESC` to close this window
      </p>
    </div>
  );
};

export default QueryNotFound;
