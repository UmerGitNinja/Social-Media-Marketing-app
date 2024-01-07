import { Typography } from "@mui/material";
import Badge from "@mui/material-next/Badge";
import React from "react";
import FindIndex from "@/actions/find-index-price";
import {
  LikeCustomMarks,
  RetweetCustomMarks,
  CommentCustomMarks,
  ViewCustomMarks,
  FollowerCustomMarks,
} from "@/lib/twitter-custom-marks";
import {
  LikePrices,
  RetweetPrices,
  CommentPrices,
  ViewPrices,
  FollowerPrices,
} from "@/lib/Twitter-Prices";
import useTwitterMenu from "@/hooks/useTwitterMenu";
import limitDecimalPlaces from "@/actions/limit-number-decimal";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

const OrderDetail: React.FC = () => {
  const {
    tweetsCount,
    LikesValue,
    FollowersValue,
    RetweetsValue,
    CommentsValue,
    ViewsValue,
    CreaterData,
  } = useTwitterMenu();
  const searchParams = useSearchParams();
  const image = searchParams.get("Url");
  const name = searchParams.get("label");
  const ViewsPrice = FindIndex(ViewCustomMarks, ViewsValue);
  const FollowersPrice = FindIndex(FollowerCustomMarks, FollowersValue);
  const LikesPrice = FindIndex(LikeCustomMarks, LikesValue);
  const RetweetsPrice = FindIndex(RetweetCustomMarks, RetweetsValue);
  const CommentsPrice = FindIndex(CommentCustomMarks, CommentsValue);
  const total =
   ((ViewPrices[ViewsPrice] + 
    LikePrices[LikesPrice] +
    RetweetPrices[RetweetsPrice] +
    CommentPrices[CommentsPrice]) * (tweetsCount-1)) +
    FollowerPrices[FollowersPrice] 
  return (
    <div className=" flex flex-col bg-[#202020] rounded-lg w-full max-w-[500px]">
      <div className="flex items-center justify-between w-full px-6 py-4">
        <div className="flex items-center gap-4">
          <Badge
            color="success"
            sx={{
              "& .MuiBadge-badge": {
                background: "#3CACFE",
                width: 20,
                height: 20,
              },
            }}
            size="large"
            overlap="circular"
            badgeContent={tweetsCount - 1}
          >
            <Image
              alt="ArtistImage"
              className="rounded-full "
              src={image || ""}
              unoptimized
              width={50}
              height={50}
            />
          </Badge>
          <div className="flex flex-wrap items-start gap-2">
            <Typography className="font-semibold text-center font-sans text-[#3CACFE]">
              {name}
            </Typography>
            <div className="py-1 px-3 font-medium block md:hidden text-[#3CACFE] w-fit text-xs text-center border border-[#3CACFE] rounded-full">
              Selected
            </div>
          </div>
        </div>
        <div className="text-center">
          <span className="text-neutral-500 text-sm">Order Detail</span>
          <h2 className="font-semibold text-xl text-[#3CACFE]">
            ${total.toFixed(2)}
          </h2>
        </div>
      </div>
      <div className="flex flex-col px-8 pb-8 border-t-[1px] border-[#3CACFE]">
        <div className="flex items-center justify-between text-white pt-4">
          <div className="inline-flex gap-3">
            <span className="font-light">{FollowersValue} Followers</span>
          </div>
          <strong className="text-lg font-medium">
            ${limitDecimalPlaces(FollowerPrices[FollowersPrice], 2)}
          </strong>
        </div>
        <div className="flex items-center justify-between text-white pt-4">
          <div className="inline-flex gap-3">
            <span className="font-light">{LikesValue} Likes</span>
            {tweetsCount > 1 && LikesValue > 0 && (
              <div className="py-1 px-3 font-medium block text-[#3CACFE] w-fit text-xs text-center border border-[#3CACFE] rounded-full">
                {tweetsCount - 1} X {LikesValue} Likes
              </div>
            )}
          </div>
          <strong className="text-lg font-medium">
            ${limitDecimalPlaces(LikePrices[LikesPrice], 2)}
          </strong>
        </div>
        <div className="flex items-center justify-between text-white pt-4">
          <div className="inline-flex gap-3">
            <span className="font-light">{RetweetsValue} Retweets</span>
            {tweetsCount > 1 && RetweetsValue > 0 && (
              <div className="py-1 px-3 font-medium block text-[#3CACFE] w-fit text-xs text-center border border-[#3CACFE] rounded-full">
                {tweetsCount - 1} X {RetweetsValue} Retweets
              </div>
            )}
          </div>
          <strong className="text-lg font-medium">
            ${limitDecimalPlaces(RetweetPrices[RetweetsPrice], 2)}
          </strong>
        </div>
        <div className="flex items-center justify-between text-white pt-4">
          <div className="inline-flex gap-3">
            <span className="font-light">{ViewsValue} Views</span>
            {tweetsCount > 1 && ViewsValue > 0 && (
              <div className="py-1 px-3 font-medium block text-[#3CACFE] w-fit text-xs text-center border border-[#3CACFE] rounded-full">
                {tweetsCount - 1} X {ViewsValue} Views
              </div>
            )}
          </div>
          <strong className="text-lg font-medium">
            ${limitDecimalPlaces(ViewPrices[ViewsPrice], 2)}
          </strong>
        </div>
        <div className="flex items-center justify-between text-white pt-4">
          <div className="inline-flex gap-3">
            <span className="font-light">{CommentsValue} Comments</span>
            {tweetsCount > 1 && CommentsValue > 0 && (
              <div className="py-1 px-3 font-medium block text-[#3CACFE] w-fit text-xs text-center border border-[#3CACFE] rounded-full">
                {tweetsCount - 1} X {CommentsValue} Comments
              </div>
            )}
          </div>
          <strong className="text-lg font-medium">
            ${limitDecimalPlaces(CommentPrices[CommentsPrice], 2)}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
