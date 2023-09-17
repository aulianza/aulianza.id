import { ChangeEvent, FormEvent, useState } from 'react';
import { FiSend as SendIcon } from 'react-icons/fi';

import { ChatInputProps } from '@/common/types/chat';

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState('');
  const [lastMessageTime, setLastMessageTime] = useState(0);

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();

    const currentTime = Date.now();
    if (currentTime - lastMessageTime < 1000) {
      // RY: User sent a message too quickly, implement rate limiting action
      alert('You are sending messages too quickly. Please wait a moment.');
      return;
    }

    onSendMessage(message);
    setMessage('');
    setLastMessageTime(currentTime);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <form className='flex items-center gap-x-1 p-4'>
      <input
        type='text'
        value={message}
        onChange={handleChange}
        placeholder='Type a message...'
        className='flex-grow border dark:border-neutral-600 rounded-md p-2 focus:outline-none'
      />
      <button
        type='submit'
        onClick={handleSendMessage}
        className='ml-2 bg-sky-600 text-white p-3 rounded-md'
      >
        <SendIcon size={18} />
      </button>
    </form>
  );
};

export default ChatInput;
