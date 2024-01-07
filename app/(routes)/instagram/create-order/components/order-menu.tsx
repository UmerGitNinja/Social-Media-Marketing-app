"use client";

import OrderList from "./order-list";
import { useState } from "react";
import _ from "lodash";
import useInstaMenu from "@/hooks/useInstaMenu";

interface OrderMenuProps {
  url: string;
  name: string;
  CreaterId: string;
  ArtistName: string;
}
const OrderMenu: React.FC<OrderMenuProps> = ({
  url,
  name,
  CreaterId,
  ArtistName,
}) => {
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const handleChange =
    (panel: string) => (event?: React.SyntheticEvent, isExpanded?: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const handleButtonClick = (panel: string) => {
    setExpanded((prevExpandedPanel) =>
      prevExpandedPanel === panel ? false : panel
    );
  };
  const {
    postsCount,
    ViewsValue,
    FollowersValue,
    LikesValue,
    CommentsValue,
  } = useInstaMenu();
  const total = ViewsValue + LikesValue + CommentsValue;
  return (
    <div className="flex-1 pt-16 min-h-[91.6vh] max-w-full">
      <div className="md:px-32 px-4 flex flex-col gap-4">
        <OrderList
          ListTwo
          defaultExpanded={true}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          onButtonClick={handleButtonClick}
        />
        <OrderList
          ListThree
          CreatorId={CreaterId}
          disable={
            (total === 0) || (FollowersValue !== 0 && total === 0)
          }
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          onButtonClick={handleButtonClick}
        />
        <OrderList
          ListFour
          disable={total > 0 ? postsCount <= 1 : FollowersValue <= 0}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
         ArtistName={ArtistName}
        />
      </div>
    </div>
  );
};

export default OrderMenu;
