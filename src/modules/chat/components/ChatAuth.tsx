import { signIn } from 'next-auth/react'
import { FcGoogle as GoogleIcon } from 'react-icons/fc'

import Button from '@/common/components/elements/Button'

const ChatAuth = () => {
  return (
    <div className='flex flex-col border-t border-neutral-300 dark:border-neutral-900'>
      <div className='mb-1 space-y-3 px-4 py-3 text-center text-neutral-700 dark:text-neutral-400'>
        <p className='text-sm'>Please sign in to typing</p>
        <Button
          onClick={() => signIn('google')}
          className='mb-2 mt-2 flex w-full items-center justify-center border !bg-white shadow-sm transition duration-300 hover:scale-[101%]'
          data-umami-event='Sign In to Chat: Google'
        >
          <GoogleIcon size={18} />
          <span className='text-black'>Sign in with Google</span>
        </Button>
      </div>
    </div>
  )
}

export default ChatAuth
