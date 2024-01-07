"use client";

import Image from "next/image";
import React from "react";

interface SearchItemProps {
  Url: string;
  label: string;
  Followers: number;
  ArtistId: string;
}

const SearchItem: React.FC<SearchItemProps> = ({
  Url,
  label,
  Followers,
  ArtistId,
}) => {
  return (
    <div className="flex justify-between p-4 bg-white border-b-[1px] border-grey-500">
      <div className="flex gap-4">
        <div className="relative w-12 h-12">
          <Image
            alt="Artist-image"
            className="rounded-full"
            src={Url ? Url : ""}
            fill
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-base text-zinc-700 font-semibold">{label}</h5>
          <span className="text-gray-500 text-sm font-light">
            {Followers} Followers
          </span>
        </div>
      </div>
      <a
        href={`/spotify/create-order?&Url=${encodeURIComponent(
          Url
        )}&label=${encodeURIComponent(label)}&ArtistId=${encodeURIComponent(
          ArtistId
        )}`}
        className="px-8 py-2 h-fit bg-[#6151EE] rounded-full max-md:px-4 max-md:py-1 max-md:text-sm text-white font-semibold"
      >
        Select
      </a>
    </div>
  );
};

export default SearchItem;
