import { InstagramUserData } from "@/types";
import React from "react";
import _ from "lodash";
import SearchItem from "./Search-item";

const SearchMenu = ({ data }: { data: InstagramUserData[] }) => {

  if (_.isEmpty(data)) {
    return null;
  }

  return (
    <div className="absolute top-[105%] z-50 right-0 left-0 max-h-80 rounded-md scrollbar-w-1.5 scrollbar-rounded-md overflow-y-scroll scrollbar scrollbar-thumb-rounded-md scrollbar-track-neutral-400 scrollbar-thumb-[#EC4899]">
      {data.map((data, index) => (
        <SearchItem
          key={index}
          label={data?.username ?? ""}
          Url={data?.profile_pic_url ?? ""}
          CreatorId={data?.id}
          Private={data?.is_private ?? false}
        />
      ))}
    </div>
  );
};

export default SearchMenu;
