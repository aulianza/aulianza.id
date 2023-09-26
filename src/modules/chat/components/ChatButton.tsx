import { PiChatCircleDotsBold as ChatIcon } from 'react-icons/pi';

import useChatStore from '@/common/stores/useChatStore';

import ChatWidget from './ChatWidget';

const ChatButton = () => {
  const { isOpen, toggleChat } = useChatStore();

  return (
    <>
      <button
        onClick={toggleChat}
        className='hidden lg:flex group fixed flex items-center gap-1 bottom-12 right-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-600 to-neutral-500 dark:from-neutral-700 dark:to-neutral-800 text-white p-2.5 rounded-full shadow-xl hover:scale-[103%] transition-all duration-300 border border-neutral-600 group-hover:!px-4'
        data-umami-event='Toggle Chat Widget'
      >
        <ChatIcon size={20} />
      </button>
      <ChatWidget isOpen={isOpen} toggleChat={toggleChat} />
    </>
  );
};

export default ChatButton;
