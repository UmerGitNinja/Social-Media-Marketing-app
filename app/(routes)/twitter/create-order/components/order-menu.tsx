"use client";

import OrderList from "./order-list";
import { useState } from "react";
import _ from "lodash";
import useTwitterMenu from "@/hooks/useTwitterMenu";

const OrderMenu: React.FC = () => {
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
    tweetsCount,
    LikesValue,
    FollowersValue,
    ViewsValue,
    RetweetsValue,
    CommentsValue,
    CreaterData,
  } = useTwitterMenu();
  const total = ViewsValue + LikesValue + RetweetsValue + CommentsValue;
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
          CreatorId={CreaterData?.id || ""}
          disable={
            (total === 0) || (FollowersValue !== 0 && total === 0)
          }
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
          onButtonClick={handleButtonClick}
        />
        <OrderList
          ListFour
          disable={total > 0 ? tweetsCount <= 1 : FollowersValue <= 0}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
          CreatorName={CreaterData?.name || ""}
        />
      </div>
    </div>
  );
};

export default OrderMenu;
