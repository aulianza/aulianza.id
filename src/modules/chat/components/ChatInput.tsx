import clsx from 'clsx';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { FiSend as SendIcon } from 'react-icons/fi';

import { ChatInputProps } from '@/common/types/chat';

import ChatUserInfo from './ChatUserInfo';

const ChatInput = ({
  onSendMessage,
  isWidget,
}: ChatInputProps & { isWidget?: boolean }) => {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();

    if (isSending) return;

    setIsSending(true);

    try {
      await onSendMessage(message);
      setMessage('');
    } catch (error) {
      // console.error('Error sending message:', error);
    } finally {
      setIsSending(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <form className='flex items-center gap-x-1 border-t border-neutral-300 p-4 pb-3 dark:border-neutral-800'>
        <input
          type='text'
          value={message}
          onChange={handleChange}
          placeholder='Type a message...'
          className='flex-grow rounded-md border p-2 focus:outline-none dark:border-neutral-600'
          disabled={isSending}
          ref={inputRef}
          autoFocus
        />
        <button
          type='submit'
          onClick={handleSendMessage}
          className={clsx(
            'ml-2 rounded-md bg-sky-600 p-3 text-white',
            !message.trim() && 'cursor-not-allowed !bg-neutral-600',
          )}
          disabled={isSending || !message.trim()}
          data-umami-event='Chat Widget: Send Chat'
        >
          <SendIcon size={18} />
        </button>
      </form>
      <ChatUserInfo isWidget={isWidget} />
    </>
  );
};

export default ChatInput;
