"use client";

import React, { useEffect } from "react";
import TweetsList from "./tweets-list";
import _ from "lodash";
import useTwitterMenu from "@/hooks/useTwitterMenu";
import { TwitterData } from "@/types";

interface TweetsMenuProps {
  data: TwitterData[];
}

const TweetsMenu: React.FC<TweetsMenuProps> = ({ data }) => {
  const { setTweetsCount, tweetsCount, setCheckedTweets } = useTwitterMenu();

  const filteredUserData = data?.filter(
    (data) =>
      data?.content?.itemContent?.tweet_results?.result?.legacy?.full_text !==
      undefined
  );
  const handleCheckboxChange = (label: string, isChecked: boolean) => {
    setCheckedTweets(label);

    setTweetsCount(isChecked ? tweetsCount + 1 : tweetsCount - 1);
  };
  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="flex flex-col w-full p-4 rounded-md gap-4 max-h-80 overflow-y-scroll scroll-track-[#121212] scrollbar-w-1.5 scrollbar-rounded-md scrollbar scrollbar-thumb-rounded-md scrollbar-thumb-[#3CACFE]">
      {filteredUserData?.map((data, index) => (
        <TweetsList
          key={index}
          label={
            data?.content.itemContent?.tweet_results?.result?.legacy?.full_text
          }
          image={
            data?.content.itemContent?.tweet_results?.result?.legacy?.entities
              .media?.[0]?.media_url_https
          }
          onCheckBoxChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
};

export default TweetsMenu;
