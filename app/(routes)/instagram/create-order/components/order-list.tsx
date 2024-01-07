"use client";

import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControlLabel from "@mui/material/FormControlLabel";
import { CiCircleQuestion } from "react-icons/ci";
import { Checkbox, FormGroup, Slider, TextField } from "@mui/material";
import Dialogue from "./dialogue";
import Button from "./button";
import axios from "axios";
import limitDecimalPlaces from "@/actions/limit-number-decimal";
import toast from "react-hot-toast";
import FindIndex from "@/actions/find-index-price";
import { useRouter } from "next/navigation";
import PriceSlider from "./silderDiagConponent/PriceSlider";
import PostMenu from "./post-menu";
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

interface OrderListProps {
  disable?: boolean;
  expanded?: boolean;
  defaultExpanded?: boolean;
  onChange?: (event?: React.SyntheticEvent, isExpanded?: boolean) => void;
  onButtonClick?: (panel: string) => void;
  CreatorId?: string;
  ArtistName?: string;
  ListTwo?: boolean;
  ListThree?: boolean;
  ListFour?: boolean;
}

const OrderList: React.FC<OrderListProps> = ({
  disable,
  onButtonClick,
  defaultExpanded,
  expanded,
  onChange,
  CreatorId,
  ArtistName,
  ListTwo,
  ListThree,
  ListFour,
}) => {
  const {
    postsCount,
    setLikesValue,
    setFollowersValue,
    setCommentsValue,
    setViewsValue,
    ViewsValue,
    LikesValue,
    CommentsValue,
    checkedPosts,
    FollowersValue,
    isPrivate,
  } = useInstaMenu();
  const [Email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const ViewsPrice = FindIndex(ViewsCustomMarks, ViewsValue);
  const FollowersPrice = FindIndex(FollowersCustomMarks, FollowersValue);
  const LikesPrice = FindIndex(LikesCustomMarks, LikesValue);
  const CommentsPrice = FindIndex(CommentsCustomMarks, CommentsValue);
  const total =
    FollowerPrices[FollowersPrice] +
    (ViewPrices[ViewsPrice] +
      CommentPrices[CommentsPrice] +
      LikePrices[LikesPrice]) *
      (postsCount - 1);

  const Discount = limitDecimalPlaces(total * 0.05, 2);
  const OrderTotal = limitDecimalPlaces(total - Discount, 2);

  const router = useRouter();
  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await axios.post("/api/create-order", {
        OrderTotal,
        ViewsValue,
        LikesValue,
        CommentsValue,
        FollowersValue,
        ArtistName,
        Email,
        checkedPosts,
      });
      router.refresh();
      toast.success("Test success");
    } catch (error) {
      toast.error("something went wrong");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Accordion
        className="!rounded-lg py-2"
        defaultExpanded={defaultExpanded}
        sx={{
          background: "#202020",
        }}
        expanded={expanded}
        disabled={disable}
        onChange={typeof onChange === "function" ? onChange : () => {}}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="text-white " />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {(ListTwo || ListThree || ListFour) && (
            <div className="px-4">
              <span className="font-semibold text-white">
                {(ListTwo && "Your Order") ||
                  (ListThree && "Select Order") ||
                  (ListFour && "Confirm Details")}
              </span>
            </div>
          )}
        </AccordionSummary>
        {ListTwo && (
          <AccordionDetails>
            <div className="flex flex-col px-4 border-t-[1px] border-[#EC4899]">
              {isPrivate === "true" && (
                <div className="p-4 text-red-400 border rounded bg-red-400/10 border-red-400 mt-8">
                  Please make your account public if you require services such
                  as views, likes and comments.
                </div>
              )}
              <div className="pt-4">
                <div className="flex justify-between gap-2 items-center">
                  <div className="flex relative gap-2 items-center">
                    <span className="font-semibold text-white">
                      {FollowersValue} Followers
                    </span>
                    <span className="text-white group flex gap-2 font-extralight text-sm items-center">
                      <CiCircleQuestion size={25} className="text-white" />
                      <Dialogue
                        className="top-[100%] left-0 -translate-x-[25%]"
                        label="How does our Instagram Follower service work"
                        ListOne="Speed : We deliver a maximum of 1k to 3k Followers per day. Depending on the size of your order it may take several days for orders to be completed."
                        ListTwo="Start Time : Orders start within 0 - 24 Hours and length vary depending on the size of your order."
                      />
                    </span>
                  </div>
                  <span className="text-white text-sm font-light">
                    ${FollowerPrices[FollowersPrice]}
                  </span>
                </div>
                <PriceSlider
                  setValue={setFollowersValue}
                  ValueArray={FollowersCustomMarks}
                />
              </div>
              <div className="pt-4">
                <div className="flex justify-between gap-2 items-center">
                  <div className="flex gap-2 items-center relative">
                    <span className="font-semibold text-white">
                      {ViewsValue} Views
                    </span>
                    <span className="text-white group flex gap-2 font-extralight text-sm items-center">
                      <CiCircleQuestion size={25} className="text-white" />
                      (select post in next step)
                      <Dialogue
                        className="left-0 -translate-x-[22%] top-[100%]"
                        label="Do you want more views under your Instagram posts and give the algorithm a secret boost?"
                        ListOne="Start Time: Instagram view orders usually start within 0 - 6 Hours and are completed within 24 hours for the majority of orders."
                        ListTwo="Speed: Most views orders are completed within one day and start within a couple hours after your order has been made."
                      />
                    </span>
                  </div>
                  <span className="text-white text-sm font-light">
                    ${ViewPrices[ViewsPrice]}
                  </span>
                </div>
                <PriceSlider
                  setValue={setViewsValue}
                  ValueArray={ViewsCustomMarks}
                  disabled={isPrivate === "true"}
                />
              </div>

              <div className="pt-4">
                <div className="flex justify-between gap-2 items-center">
                  <div className="flex gap-2 items-center">
                    <span className="font-semibold text-white">
                      {LikesValue} Likes
                    </span>
                    <span className="text-white relative group flex gap-2 font-extralight text-sm items-center">
                      <CiCircleQuestion size={25} className="text-white" />
                      (select post in next step)
                      <Dialogue
                        className="top-[100%] left-0 -translate-x-[50%]"
                        label="Looking to buy Instagram Likes?"
                        ListOne="Speed : We deliver a maximum of 1k to 3k Likes per day. Depending on the size of your order it may take several days for orders to be completed."
                        ListTwo="Start Time : Orders start within 0 - 24 Hours and length vary depending on the size of your order."
                      />
                    </span>
                  </div>
                  <span className="text-white text-sm font-light">
                    ${LikePrices[LikesPrice]}
                  </span>
                </div>
                <PriceSlider
                  setValue={setLikesValue}
                  ValueArray={LikesCustomMarks}
                  disabled={isPrivate === "true"}
                />
              </div>
              <div className="pt-4">
                <div className="flex justify-between gap-2 items-center">
                  <div className="flex relative gap-2 items-center">
                    <span className="font-semibold text-white">
                      {CommentsValue} Comments
                    </span>
                    <span className="text-white group flex gap-2 font-extralight text-sm items-center">
                      <CiCircleQuestion size={25} className="text-white" />
                      (select post in next step)
                      <Dialogue
                        className="top-[100%] left-0 -translate-x-[25%]"
                        label="Do you want more comments under your Instagram posts and give the algorithm a secret boost?"
                        ListOne="Start Time: Instagram Comment orders usually start within 0 - 6 Hours and are completed within 24 hours for the majority of orders."
                        ListTwo="Speed: Most comments orders are completed within one day and start within a couple hours after your order has been made."
                      />
                    </span>
                  </div>
                  <span className="text-white text-sm font-light">
                    ${CommentPrices[CommentsPrice]}
                  </span>
                </div>
                <PriceSlider
                  setValue={setCommentsValue}
                  ValueArray={CommentsCustomMarks}
                  disabled={isPrivate === "true"}
                />
              </div>
              <div className="flex justify-between items-center text-white py-3 border-b-[1px] border-[#EC4899]">
                <span className="font-medium text-sm">Discount</span>
                <span className="font-light text-sm">-${Discount}</span>
              </div>
              <div className="flex justify-between text-white w-full py-3">
                <h2 className="flex-1">Order Total</h2>
                <div className="flex-1 flex flex-col items-end">
                  <span className="text-lg font-medium">${OrderTotal}</span>
                  <span className="text-xs font-light">Approx. </span>
                </div>
              </div>
              <Button
                Label={
                  CommentsValue === 0 && LikesValue === 0 && ViewsValue === 0
                    ? "Next: Confirm Details"
                    : "Next: Select Post(s)"
                }
                onClick={() =>
                  CommentsValue === 0 && LikesValue === 0 && ViewsValue === 0
                    ? onButtonClick?.("panel3")
                    : onButtonClick?.("panel2")
                }
                disabled={
                  LikesValue === 0 &&
                  CommentsValue === 0 &&
                  FollowersValue === 0 &&
                  ViewsValue === 0
                }
              />
            </div>
          </AccordionDetails>
        )}
        {ListThree && (
          <AccordionDetails>
            <div className="px-4 py-3 flex flex-col gap-4 text-white border-t-[1px] border-[#EC4899]">
              <span className="text-sm font-light">
                Your Likes, Views and Comments are calculated per Post.
              </span>
              <h3 className="text-base font-semibold text-[#EC4899]">
                Select Post(s)
              </h3>
              <PostMenu CreatorId={CreatorId} />
              <Button
                Label="Confirm Payment"
                disabled={postsCount - 1 === 0}
                onClick={() => onButtonClick?.("panel3")}
              />
            </div>
          </AccordionDetails>
        )}
        {ListFour && (
          <AccordionDetails>
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-4 px-4 border-t-[1px] pt-4 border-[#EC4899] text-white"
            >
              <p className="text-sm font-light">
                Please enter your email address. This is where we will send you
                updates on your Viewpals campaign.
              </p>
              <TextField
                id="outlined-basic"
                sx={{
                  "& label": {
                    color: "white",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "white",
                    },
                    color: "white",
                    "&:hover fieldset": {
                      borderColor: "#EC4899",
                    },
                  },
                }}
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={Email}
                required
                type="email"
                variant="outlined"
              />
              <FormGroup>
                <FormControlLabel
                  className="font-light text-sm select-none"
                  control={
                    <Checkbox
                      required
                      sx={{
                        color: "#EC4899",
                        borderRadius: "50%",
                        "&.Mui-checked": {
                          color: "#EC4899",
                          borderRadius: "50%",
                        },
                      }}
                      id="Song-Check"
                      className="text-[#EC4899]"
                    />
                  }
                  label={
                    <p className="text-sm font-light">
                      You agree to our
                      <a href="" className="underline ml-1">
                        Terms
                      </a>{" "}
                      &{" "}
                      <a href="" className="underline ml-1">
                        Refund Policy
                      </a>
                    </p>
                  }
                />
              </FormGroup>
              <Button
                Label="Continue to Payment"
                disabled={isLoading}
                className="self-center"
              />
              <p className="text-white text-xs text-light self-center mt-4">
                By clicking Pay button you agree to our
                <a href="#" className="text-[#EC4899] ml-1 underline">
                  Terms of use
                </a>
              </p>
            </form>
          </AccordionDetails>
        )}
      </Accordion>
    </div>
  );
};

export default OrderList;
