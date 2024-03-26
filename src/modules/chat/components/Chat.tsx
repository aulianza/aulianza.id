/* eslint-disable react-hooks/exhaustive-deps */
import { getDatabase, onValue, ref, remove, set } from 'firebase/database'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { firebase } from '@/common/libs/firebase'
import { MessageProps } from '@/common/types/chat'

import ChatAuth from './ChatAuth'
import ChatInput from './ChatInput'
import ChatList from './ChatList'

const Chat = ({ isWidget = false }: { isWidget?: boolean }) => {
  const { data: session } = useSession()

  const [messages, setMessages] = useState<MessageProps[]>([])

  const database = getDatabase(firebase)
  const databaseChat = process.env.NEXT_PUBLIC_FIREBASE_CHAT_DB as string

  const handleSendMessage = (message: string) => {
    const messageId = uuidv4()
    const messageRef = ref(database, `${databaseChat}/${messageId}`)

    set(messageRef, {
      id: messageId,
      name: session?.user?.name,
      email: session?.user?.email,
      image: session?.user?.image,
      message,
      created_at: new Date().toISOString(),
      is_show: true,
    })
  }

  const handleDeleteMessage = (id: string) => {
    const messageRef = ref(database, `${databaseChat}/${id}`)

    if (messageRef) {
      remove(messageRef)
    }
  }

  useEffect(() => {
    const messagesRef = ref(database, databaseChat)
    onValue(messagesRef, (snapshot) => {
      const messagesData = snapshot.val()
      if (messagesData) {
        const messagesArray = Object.values(messagesData) as MessageProps[]
        const sortedMessage = messagesArray.sort((a, b) => {
          const dateA = new Date(a.created_at)
          const dateB = new Date(b.created_at)
          return dateA.getTime() - dateB.getTime()
        })
        setMessages(sortedMessage)
      }
    })
  }, [database])

  return (
    <>
      <ChatList
        isWidget={isWidget}
        messages={messages}
        onDeleteMessage={handleDeleteMessage}
      />
      {session ? (
        <ChatInput onSendMessage={handleSendMessage} isWidget={isWidget} />
      ) : (
        <ChatAuth />
      )}
    </>
  )
}

export default Chat
