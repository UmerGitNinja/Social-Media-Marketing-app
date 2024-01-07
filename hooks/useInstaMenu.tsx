import { create } from "zustand";

export interface useInstaMenuInterface {
  postsCount: number;
  setPostsCount: (count: number) => void;
  checkedPosts: string[];
  setCheckedPosts: (video: string) => void;
  ViewsValue: number;
  setViewsValue: (count: number) => void;
  FollowersValue: number;
  setFollowersValue: (count: number) => void;
  LikesValue: number;
  setLikesValue: (count: number) => void;
  CommentsValue: number;
  setCommentsValue: (count: number) => void;
  isPrivate?: string;
  setIsPrivate: (isPrivate: string) => void;
}

const useInstaMenu = create<useInstaMenuInterface>((set) => ({
  postsCount: 1,
  setPostsCount: (count: number) => set(() => ({ postsCount: count })),
  checkedPosts: [],
  setCheckedPosts: (video: string) =>
    set((state) => ({ checkedPosts: [...state.checkedPosts, video] })),
  ViewsValue: 0,
  setViewsValue: (count: number) => set(() => ({ ViewsValue: count })),
  LikesValue: 0,
  setLikesValue: (count: number) => set(() => ({ LikesValue: count })),
  FollowersValue: 0,
  setFollowersValue: (count: number) => set(() => ({ FollowersValue: count })),
  CommentsValue: 0,
  setCommentsValue: (count: number) => set(() => ({ CommentsValue: count })),
  isPrivate: undefined,
  setIsPrivate: (isPrivate: string) => set(() => ({ isPrivate: isPrivate })),
}));

export default useInstaMenu;
