import clsx from 'clsx';
import { signIn } from 'next-auth/react';
import { BsGithub as GithubIcon } from 'react-icons/bs';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';

import Button from '@/common/components/elements/Button';

const Providers = [
  {
    id: 'google',
    icon: <GoogleIcon size={18} />,
    bgColor: '!bg-white',
    textColor: 'text-black',
    label: 'Sign in with Google',
  },
  {
    id: 'github',
    icon: <GithubIcon size={18} />,
    bgColor: '!bg-black',
    textColor: 'text-white',
    label: 'Sign in with Github',
  },
];

const ChatAuth = ({ isWidget = false }: { isWidget?: boolean }) => {
  return (
    <div className='flex flex-col border-t border-neutral-300 py-1 dark:border-neutral-900'>
      <div className='mb-1 space-y-5 px-4 py-3 text-center text-neutral-700 dark:text-neutral-400'>
        <p className='text-sm'>
          Please sign in to start. Don't worry, your data is safe.
        </p>
        <div
          className={clsx(
            'flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-5',
            isWidget && '!flex-col !gap-4',
          )}
        >
          {Providers?.map((button) => (
            <Button
              key={button.id}
              onClick={() => signIn(button.id)}
              className={`flex w-full items-center justify-center border ${button.bgColor} py-2.5 shadow-sm transition duration-300 hover:scale-[101%] lg:w-fit ${isWidget && '!w-full'}`}
              data-umami-event={`Sign In to Chat: ${button.label}`}
            >
              {button.icon}
              <span className={button.textColor}>{button.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatAuth;
