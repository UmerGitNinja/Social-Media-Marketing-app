import { UserData } from "@/types";
import React from "react";
import _ from "lodash";
import SearchItem from "./Search-item";

const SearchMenu = ({ data }: { data: UserData[] }) => {

  if (_.isEmpty(data)) {
    return null;
  }

  return (
    <div className="absolute top-[105%] z-50 right-0 left-0 max-h-80 rounded-md scrollbar-w-1.5 scrollbar-rounded-md overflow-y-scroll scrollbar scrollbar-thumb-rounded-md scrollbar-track-neutral-400 scrollbar-thumb-[#3CACFE]">
      {data.map((data, index) => (
        <SearchItem
          key={index}
          label={data?.name}
          Url={data?.profile_image_url_https}
          CreatorId={data?.id}

          Private={data?.is_protected}
        />
      ))}
    </div>
  );
};

export default SearchMenu;
