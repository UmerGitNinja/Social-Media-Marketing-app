"use client";
import React, { useEffect } from "react";
import _ from "lodash";
import useTiktokMenu from "@/hooks/useTiktokMenu";
import useCreaterPosts from "@/hooks/useCreaterPosts";
import { CreaterData } from "@/types";
import PostsList from "./post-list";

interface PostsMenuProps {
  CreatorId?: string;
}

const PostMenu: React.FC<PostsMenuProps> = ({ CreatorId }) => {
  const { CreaterData } = useCreaterPosts(CreatorId);
  const postsData: CreaterData = CreaterData;
  const { setPostsCount, postsCount, setCheckedPosts, checkedPosts } =
    useTiktokMenu();

  const handleCheckboxChange = (label: string, isChecked: boolean) => {
    setCheckedPosts(label);
    setPostsCount(isChecked ? postsCount + 1 : postsCount - 1);
  };
 
  if (_.isEmpty(postsData)) {
    return null;
  }
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4 max-h-60 overflow-y-scroll scroll-track-[#121212] scrollbar-w-1.5 scrollbar-rounded-md scrollbar scrollbar-thumb-rounded-md scrollbar-thumb-[3cacfe]">
      {postsData?.videos?.map((data, index) => (
        <PostsList
          key={index}
          title={data?.title}
          onCheckBoxChange={handleCheckboxChange}
          Url={
            data?.origin_cover
          }
        />
      ))}
    </div>
  );
};

export default PostMenu;
