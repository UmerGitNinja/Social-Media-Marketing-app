import { Typography } from "@mui/material";
import Badge from "@mui/material-next/Badge";
import React from "react";
import FindIndex from "@/actions/find-index-price";
import {
  SharesCustomMarks,
  FollowersCustomMarks,
  ViewsCustomMarks,
  CommentsCustomMarks,
  LikesCustomMarks,
} from "@/lib/Tiktok-custom-marks";
import {
  SharePrices,
  FollowerPrices,
  ViewPrices,
  CommentPrices,
  LikePrices,
} from "@/lib/Tiktok-Prices";
import useTiktokMenu from "@/hooks/useTiktokMenu";
import limitDecimalPlaces from "@/actions/limit-number-decimal";

interface OrderDetailProps {
  ArtistName: string;
}

const OrderDetail: React.FC<OrderDetailProps> = ({ ArtistName }) => {
  const {
    postsCount,
    LikesValue,
    FollowersValue,
    SharesValue,
    CommentsValue,
    ViewsValue,
  } = useTiktokMenu();
  const ViewsPrice = FindIndex(ViewsCustomMarks, ViewsValue);
  const FollowersPrice = FindIndex(FollowersCustomMarks, FollowersValue);
  const LikesPrice = FindIndex(LikesCustomMarks, LikesValue);
  const SharesPrice = FindIndex(SharesCustomMarks, SharesValue);
  const CommentsPrice = FindIndex(CommentsCustomMarks, CommentsValue);

  const Total = (SharePrices[SharesPrice] + FollowerPrices[FollowersPrice] + ViewPrices[ViewsPrice] + CommentPrices[CommentsPrice] + LikePrices[LikesPrice]);
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
            badgeContent={postsCount -1}
          />
          <div className="flex flex-wrap items-start gap-2">
            <Typography className="font-semibold text-center font-sans text-[#3CACFE]">
              {ArtistName}
            </Typography>
            <div className="py-1 px-3 font-medium block md:hidden text-[#3CACFE] w-fit text-xs text-center border border-[#3CACFE] rounded-full">
              Selected
            </div>
          </div>
        </div>
        <div className="text-center">
          <span className="text-neutral-500 text-sm">Order Detail</span>
          <h2 className="font-semibold text-xl text-[#3CACFE]">
            ${Total.toFixed(2)}
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
          <span className="font-light">{ViewsValue} Views</span>
          {postsCount > 1 && ViewsValue > 0 && (
              <div className="py-1 px-3 font-medium block text-[#3CACFE] w-fit text-xs text-center border border-[#3CACFE] rounded-full">
                {postsCount - 1} X {ViewsValue} Views
              </div>
            )}
            </div>
          <strong className="text-lg font-medium">
            ${limitDecimalPlaces(ViewPrices[ViewsPrice], 2)}
          </strong>
        </div>
        <div className="flex items-center justify-between text-white pt-4">
        <div className="inline-flex gap-3">
          <span className="font-light">{LikesValue} Likes</span>
          {postsCount > 1 && LikesValue > 0 && (
              <div className="py-1 px-3 font-medium block text-[#3CACFE] w-fit text-xs text-center border border-[#3CACFE] rounded-full">
                {postsCount - 1} X {LikesValue} Likes
              </div>
            )}
            </div>
          <strong className="text-lg font-medium">
            ${limitDecimalPlaces(LikePrices[LikesPrice], 2)}
          </strong>
        </div>
        <div className="flex items-center justify-between text-white pt-4">
          <div className="inline-flex gap-3">
            <span className="font-light">{SharesValue} Shares</span>
            {postsCount > 1 && SharesValue > 0 && (
              <div className="py-1 px-3 font-medium block text-[#3CACFE] w-fit text-xs text-center border border-[#3CACFE] rounded-full">
                {postsCount - 1} X {SharesValue} Shares
              </div>
            )}
          </div>
          <strong className="text-lg font-medium">
            ${limitDecimalPlaces(SharePrices[SharesPrice], 2)}
          </strong>
        </div>
        <div className="flex items-center justify-between text-white pt-4">
          <div className="inline-flex gap-3">
            <span className="font-light">{SharesValue} Comments</span>
            {postsCount > 1 && CommentsValue > 0 && (
              <div className="py-1 px-3 font-medium block text-[#3CACFE] w-fit text-xs text-center border border-[#3CACFE] rounded-full">
                {postsCount - 1} X {CommentsValue} Comments
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
