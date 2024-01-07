"use client";
import React, { useEffect } from "react";
import _ from "lodash";
import useInstaMenu from "@/hooks/useInstaMenu";
import useUserPosts from "@/hooks/useUserPosts";
import { PostData } from "@/types";
import PostsList from "./post-list";
import Button from "./button";

interface PostsMenuProps {
  CreatorId?: string;
}

const PostMenu: React.FC<PostsMenuProps> = ({ CreatorId }) => {
  const { data } = useUserPosts(CreatorId);
  const postsData: PostData[] = data;
  const { setPostsCount, postsCount, setCheckedPosts, checkedPosts } =
    useInstaMenu();

  const handleCheckboxChange = (label: string, isChecked: boolean) => {
    setCheckedPosts(label);
    setPostsCount(isChecked ? postsCount + 1 : postsCount - 1);
  };

  useEffect(() => {
    console.log(postsData);
  }, [postsData]);
  if (_.isEmpty(postsData)) {
    return null;
  }
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-4 max-h-60 overflow-y-scroll scroll-track-[#121212] scrollbar-w-1.5 scrollbar-rounded-md scrollbar scrollbar-thumb-rounded-md scrollbar-thumb-[#EC4899]">
      {postsData?.map((data, index) => (
        <PostsList
          key={index}
          title={data?.caption?.text}
          onCheckBoxChange={handleCheckboxChange}
          Url={data?.thumbnail_url}
        />
      ))}
    </div>
  );
};

export default PostMenu;
