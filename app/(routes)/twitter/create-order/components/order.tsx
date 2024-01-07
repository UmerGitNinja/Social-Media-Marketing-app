"use client";

import React from "react";
import OrderMenu from "./order-menu";
import OrderDetail from "./order-detail";
import { useSearchParams } from "next/navigation";

const Order: React.FC = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("label");
  return (
    <div className="flex items-center h-full bg-[#06141D] lg:flex-row flex-col">
      <div className="h-full w-full py-8 px-4 flex flex-col gap-8 flex-1 justify-center items-center text-white">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-5xl font-thin">{name}</h1>
        </div>
        <OrderDetail />
      </div>
      <OrderMenu/>
    </div>
  );
};

export default Order;
