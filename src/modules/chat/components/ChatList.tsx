import { useEffect, useRef, useState } from 'react';

import { ChatListProps } from '@/common/types/chat';

import ChatItem from './ChatItem';

interface ChatListPropsNew extends ChatListProps {
  isWidget?: boolean;
  onDeleteMessage: (id: string) => void;
}

const ChatList = ({
  messages,
  isWidget = false,
  onDeleteMessage,
}: ChatListPropsNew) => {
  const chatListRef = useRef<HTMLDivElement | null>(null);
  const [hasScrolledUp, setHasScrolledUp] = useState(false);
  const [chatListHeight, setChatListHeight] = useState('500px');

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

  useEffect(() => {
    const handleResize = () => {
      const newHeight = isWidget ? '500px' : `${window.innerHeight - 360}px`;
      setChatListHeight(newHeight);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isWidget]);

  return (
    <div className='rounded-lg px-1'>
      <div
        ref={chatListRef}
        className='space-y-5 overflow-y-auto py-4'
        style={{ height: chatListHeight }}
      >
        {messages?.map((chat, index) => (
          <ChatItem key={index} onDelete={onDeleteMessage} {...chat} />
        ))}
      </div>
    </div>
  );
};

export default ChatList;
