import { create, SetState } from 'zustand';

interface ChatStoreProps {
  isOpen: boolean;
  toggleChat: () => void;
}

const useChatStore = create<ChatStoreProps>(
  (set: SetState<ChatStoreProps>) => ({
    isOpen: false,
    toggleChat: () => set((state) => ({ isOpen: !state.isOpen })),
  }),
);

export default useChatStore;
