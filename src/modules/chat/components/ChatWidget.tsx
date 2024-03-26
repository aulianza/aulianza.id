import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

import Chat from './Chat'
import ChatWidgetHeader from './ChatWidgetHeader'

interface ChatWidgetProps {
  isOpen: boolean
  toggleChat: () => void
}

const ChatWidget = ({ isOpen, toggleChat }: ChatWidgetProps) => {
  return (
    <Transition
      show={isOpen}
      enter='transition duration-100 ease-out'
      enterFrom='transform scale-95 opacity-0'
      enterTo='transform scale-100 opacity-100'
      leave='transition duration-75 ease-out'
      leaveFrom='transform scale-100 opacity-100'
      leaveTo='transform scale-95 opacity-0'
      as={Fragment}
    >
      <Dialog
        as='div'
        className='fixed bottom-0 z-20 shadow-lg md:bottom-12 md:right-5'
        onClose={toggleChat}
      >
        <div className='shadow-3xl w-full rounded-xl border border-neutral-300 bg-neutral-50 ring-1 ring-black/5 backdrop-blur-2xl dark:divide-neutral-700 dark:border-neutral-600 dark:border-neutral-800 dark:bg-[#1b1b1b80] md:w-[400px]'>
          <ChatWidgetHeader />
          <Chat isWidget={true} />
        </div>
      </Dialog>
    </Transition>
  )
}

export default ChatWidget
