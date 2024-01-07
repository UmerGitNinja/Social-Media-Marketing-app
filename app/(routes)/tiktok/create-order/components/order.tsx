"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import OrderMenu from "./order-menu";
import OrderDetail from "./order-detail";
import useTiktokMenu from "@/hooks/useTiktokMenu";

interface OrderProps {
  image: string;
  name: string;
  CreaterId: string;
  Private: string;
}

const Order: React.FC<OrderProps> = ({ image, name, CreaterId, Private }) => {
  const { setIsPrivate } = useTiktokMenu();
  useEffect(() => {
    setIsPrivate(Private);
  }, [Private, setIsPrivate]);
  return (
    <div className="flex items-center h-full bg-[#121212] lg:flex-row flex-col">
      <div className="h-full w-full py-8 px-4 flex flex-col gap-8 flex-1 justify-center items-center text-white">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative w-32 h-32 lg:h-56 lg:w-56 shadow-md shadow-neutral-950 rounded-full">
            <Image
              alt="ArtistImage"
              className="rounded-full "
              src={image}
              unoptimized
              fill
            />
            <Image
              alt="tiktok"
              className="absolute bottom-[0%] left-[5%] w-8 h-8 lg:w-12 lg:h-12"
              src={"/tiktok.svg"}
              width={50}
              height={50}
            />
          </div>

          <h1 className="text-5xl font-thin">{name}</h1>
        </div>
        <OrderDetail ArtistName={name} />
      </div>
      <OrderMenu
        url={image}
        name={name}
        ArtistName={name}
        CreaterId={CreaterId}
      />
    </div>
  );
};

export default Order;
