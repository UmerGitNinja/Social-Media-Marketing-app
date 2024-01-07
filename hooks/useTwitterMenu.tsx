import { UserData } from "@/types";
import { create } from "zustand";

export interface useTwitterMenuInterface {
  tweetsCount: number;
  setTweetsCount: (count: number) => void;
  checkedTweets: string[];
  setCheckedTweets: (video: string) => void;
  ViewsValue: number;
  setViewsValue: (count: number) => void;
  FollowersValue: number;
  setFollowersValue: (count: number) => void;
  LikesValue: number;
  setLikesValue: (count: number) => void;
  RetweetsValue: number;
  setRetweetsValue: (count: number) => void;
  CommentsValue: number;
  setCommentsValue: (count: number) => void;
  CreaterData: UserData | null;
  setCreaterData: (data: UserData | null) => void;
}

const useTwitterMenu = create<useTwitterMenuInterface>((set) => ({
  tweetsCount: 1,
  setTweetsCount: (count: number) => set(() => ({ tweetsCount: count })),
  checkedTweets: [],
  setCheckedTweets: (video: string) =>
    set((state) => ({ checkedTweets: [...state.checkedTweets, video] })),
  ViewsValue: 0,
  setViewsValue: (count: number) => set(() => ({ ViewsValue: count })),
  LikesValue: 0,
  setLikesValue: (count: number) => set(() => ({ LikesValue: count })),
  FollowersValue: 0,
  setFollowersValue: (count: number) => set(() => ({ FollowersValue: count })),
  RetweetsValue: 0,
  setRetweetsValue: (count: number) => set(() => ({ RetweetsValue: count })),
  CommentsValue: 0,
  setCommentsValue: (count: number) => set(() => ({ CommentsValue: count })),
  CreaterData: null,
  setCreaterData: (data: UserData | null) => set(() => ({ CreaterData: data })),
}));

export default useTwitterMenu;
