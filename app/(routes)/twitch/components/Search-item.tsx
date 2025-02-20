"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";

interface SearchItemProps {
  Url: string;
  label: string;
  StreamerId: string
  isLive: boolean
}

const SearchItem: React.FC<SearchItemProps> = ({ Url, label, StreamerId, isLive }) => {

  return (
    <div className="flex justify-between p-4 bg-white border-b-[1px] border-grey-500">
      <div className="flex gap-4 items-center">
        <div className="relative w-12 h-12">
          <Image alt="Artist-image" className="rounded-full" src={Url ? Url :""} fill />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-base text-zinc-700 font-semibold">{label}</h5>
        </div>
      </div>
      <a
        href={`/twitch/create-order?&Url=${encodeURIComponent(
          Url
        )}&label=${encodeURIComponent(label)}&StreamerId=${encodeURIComponent(
          StreamerId
        )}&isLive=${encodeURIComponent(isLive)}`}
        className="px-8 py-2 h-fit bg-[#3CACFE] rounded-full max-md:px-4 max-md:py-1 max-md:text-sm text-white font-semibold"
      >
        Select
      </a>
    </div>
  );
};

export default SearchItem;
