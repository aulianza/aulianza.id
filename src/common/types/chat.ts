export interface MessageProps {
  id: string;
  name: string;
  email: string;
  image?: string;
  message: string;
  created_at: string;
  is_show?: boolean;
}

export interface ChatListProps {
  messages: MessageProps[];
}

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export interface ChatInputProps {
  onSendMessage: (message: string) => void;
}
