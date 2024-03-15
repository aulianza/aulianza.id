import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type BlogViewState = {
  viewOption: string;
  setViewOption: (option: string) => void;
};

export const useBlogViewStore = create<BlogViewState>()(
  devtools(
    persist(
      (set) => ({
        viewOption: 'grid',
        setViewOption: (option) => set(() => ({ viewOption: option })),
      }),
      {
        name: 'blog-view',
      },
    ),
  ),
);
