import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

import Chat from './Chat';
import ChatWidgetHeader from './ChatWidgetHeader';

interface ChatWidgetProps {
  isOpen: boolean;
  toggleChat: () => void;
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
        className='fixed z-20 bottom-0 md:bottom-12 md:right-5 shadow-lg'
        onClose={toggleChat}
      >
        <div className='bg-neutral-50 dark:bg-neutral-900 border border-neutral-400 dark:border-neutral-600 rounded-xl w-full md:w-[400px]'>
          <ChatWidgetHeader />
          <Chat isWidget={true} />
        </div>
      </Dialog>
    </Transition>
  );
};

export default ChatWidget;
