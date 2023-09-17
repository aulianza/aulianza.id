import { useEffect, useRef, useState } from 'react';

import { ChatListProps } from '@/common/types/chat';

import ChatItem from './ChatItem';

const ChatList = ({ messages }: ChatListProps) => {
  const chatListRef = useRef<HTMLDivElement | null>(null);
  const [hasScrolledUp, setHasScrolledUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (chatListRef.current) {
        const isScrolledToBottom =
          chatListRef.current.scrollHeight - chatListRef.current.clientHeight <=
          chatListRef.current.scrollTop + 5;

        if (isScrolledToBottom) {
          setHasScrolledUp(false);
        } else {
          setHasScrolledUp(true);
        }
      }
    };

    chatListRef.current?.addEventListener('scroll', handleScroll);

    const currentChatListRef = chatListRef.current;

    return () => {
      currentChatListRef?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (chatListRef.current && !hasScrolledUp) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [messages, hasScrolledUp]);

  return (
    <div className='rounded-lg px-1'>
      <div
        ref={chatListRef}
        className='overflow-y-auto h-[500px] space-y-5 py-4'
      >
        {messages.map((chat, index) => (
          <ChatItem key={index} {...chat} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
