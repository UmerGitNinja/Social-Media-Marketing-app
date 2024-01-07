import { Typography } from "@mui/material";
import Badge from "@mui/material-next/Badge";
import React from "react";
import FindIndex from "@/actions/find-index-price";
import {
  FollowersCustomMarks,
  ViewsCustomMarks,
  CommentsCustomMarks,
  LikesCustomMarks,
} from "@/lib/insta-custom-marks";
import {
  FollowerPrices,
  ViewPrices,
  CommentPrices,
  LikePrices,
} from "@/lib/Insta-Prices";
import useInstaMenu from "@/hooks/useInstaMenu";
import limitDecimalPlaces from "@/actions/limit-number-decimal";

interface OrderDetailProps {
  userName: string;
}

const OrderDetail: React.FC<OrderDetailProps> = ({ userName }) => {
  const {
    postsCount,
    LikesValue,
    FollowersValue,
    CommentsValue,
    ViewsValue,
  } = useInstaMenu();
  const ViewsPrice = FindIndex(ViewsCustomMarks, ViewsValue);
  const FollowersPrice = FindIndex(FollowersCustomMarks, FollowersValue);
  const LikesPrice = FindIndex(LikesCustomMarks, LikesValue);
  const CommentsPrice = FindIndex(CommentsCustomMarks, CommentsValue);

  const Total = FollowerPrices[FollowersPrice] + ((ViewPrices[ViewsPrice] + CommentPrices[CommentsPrice] + LikePrices[LikesPrice])* (postsCount - 1));
  return (
    <div className=" flex flex-col bg-[#202020] rounded-lg w-full max-w-[500px]">
      <div className="flex items-center justify-between w-full px-6 py-4">
        <div className="flex items-center gap-4">
          <Badge
            color="success"
            sx={{
              "& .MuiBadge-badge": {
                background: "#EC4899",
                width: 20,
                height: 20,
              },
            }}
            size="large"
            overlap="circular"
            badgeContent={postsCount -1}
          />
          <div className="flex flex-wrap items-start gap-2">
            <Typography className="font-semibold text-center font-sans text-[#EC4899]">
              {userName}
            </Typography>
            <div className="py-1 px-3 font-medium block md:hidden text-[#EC4899] w-fit text-xs text-center border border-[#EC4899] rounded-full">
              Selected
            </div>
          </div>
        </div>
        <div className="text-center">
          <span className="text-neutral-500 text-sm">Order Detail</span>
          <h2 className="font-semibold text-xl text-[#EC4899]">
            ${Total.toFixed(2)}
          </h2>
        </div>
      </div>
      <div className="flex flex-col px-8 pb-8 border-t-[1px] border-[#EC4899]">
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
              <div className="py-1 px-3 font-medium block text-[#EC4899] w-fit text-xs text-center border border-[#EC4899] rounded-full">
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
              <div className="py-1 px-3 font-medium block text-[#EC4899] w-fit text-xs text-center border border-[#EC4899] rounded-full">
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
            <span className="font-light">{CommentsValue} Comments</span>
            {postsCount > 1 && CommentsValue > 0 && (
              <div className="py-1 px-3 font-medium block text-[#EC4899] w-fit text-xs text-center border border-[#EC4899] rounded-full">
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
