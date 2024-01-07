import { TikTokUser } from "@/types";
import React from "react";
//import _ from "lodash";
import SearchItem from "./Search-Item";

const SearchMenu = ({ data }: { data: TikTokUser[] }) => {
  if (data.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-[105%] z-50 right-0 left-0 h-80 rounded-md scrollbar-w-1.5 scrollbar-rounded-md overflow-y-scroll scrollbar scrollbar-thumb-rounded-md scrollbar-track-neutral-400 scrollbar-thumb-[#3CACFE]">
      {data.map((data, index) => (
        <SearchItem
          key={index}
          label={data?.user?.nickname}
          Url={data?.user?.avatarMedium}
          CreatorId={data?.user?.id}
          Followers={data?.stats?.followerCount}
          Private={data?.user?.privateAccount}
        />
      ))}
    </div>
  );
};

export default SearchMenu;
