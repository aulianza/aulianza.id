import { PiChatCircleDotsBold as ChatIcon } from 'react-icons/pi';

import useChatStore from '@/common/stores/useChatStore';

import ChatWidget from './ChatWidget';

const ChatButton = () => {
  const { toggleChat } = useChatStore();

  return (
    <>
      <button
        onClick={toggleChat}
        className='hidden lg:flex fixed flex items-center gap-1 bottom-12 right-5 bg-gradient-to-br from-sky-400 to-blue-500 text-white py-2 px-4 rounded-full shadow-xl hover:scale-[103%] transition duration-300'
        data-umami-event='Toggle Chat Button'
      >
        <ChatIcon size={18} />
        <span>Chat</span>
      </button>
      <ChatWidget />
    </>
  );
};

export default ChatButton;
