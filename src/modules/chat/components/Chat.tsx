import { getDatabase, onValue, push, ref } from 'firebase/database';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { firebase } from '@/common/libs/firebase';
import { MessageProps } from '@/common/types/chat';

import ChatAuth from './ChatAuth';
import ChatInput from './ChatInput';
import ChatList from './ChatList';

const Chat = () => {
  const { data: session } = useSession();

  const [messages, setMessages] = useState<MessageProps[]>([]);

  const database = getDatabase(firebase);
  const databaseChat = process.env.NEXT_PUBLIC_FIREBASE_CHAT_DB as string;

  const handleSendMessage = (message: string) => {
    const messagesRef = ref(database, databaseChat);
    const messageId = uuidv4();

    push(messagesRef, {
      id: messageId,
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
      message,
      created_at: new Date().toISOString(),
    });
  };

  useEffect(() => {
    const messagesRef = ref(database, databaseChat);
    onValue(messagesRef, (snapshot) => {
      const messagesData = snapshot.val();
      if (messagesData) {
        const messagesArray = Object.values(messagesData) as MessageProps[];
        setMessages(messagesArray);
      }
    });
  }, [database]);

  return (
    <>
      <ChatList messages={messages} />
      {session ? <ChatInput onSendMessage={handleSendMessage} /> : <ChatAuth />}
    </>
  );
};

export default Chat;
