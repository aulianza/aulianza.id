import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

type BlogPageStore = {
  page: number;
  pageSize: number;
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
};

export const useBlogPageStore = create<BlogPageStore>()(
  devtools(
    persist(
      (set) => ({
        page: 1,
        pageSize: 6,
        setPage: (page) => set({ page }),
        setPageSize: (pageSize) => set({ pageSize }),
      }),
      {
        name: 'blog-page-store',
      },
    ),
  ),
);
