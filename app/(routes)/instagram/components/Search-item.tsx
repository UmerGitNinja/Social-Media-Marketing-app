/* eslint-disable @next/next/no-img-element */
import React from "react";

interface SearchItemProps {
  Url: string;
  label: string;
  CreatorId: string;
  Private: boolean;
}

const SearchItem: React.FC<SearchItemProps> = ({
  Url,
  label,
  CreatorId,
  Private,
}) => {
  const imageUrl = `/api/image?url=${encodeURIComponent(Url)}`;
  return (
    <div className="flex justify-between p-4 bg-white border-b-[1px] border-grey-500">
      <div className="flex gap-4">
        <div className="relative w-12 h-12">
          <img
            alt="Artist-image"
            className="rounded-full w-full h-full object-cover"
            src={imageUrl}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-base text-zinc-700 font-semibold">{label}</h5>
        </div>
      </div>
      <a
 href={`/instagram/create-order?&Url=${encodeURIComponent(Url)}&label=${encodeURIComponent(label)}&CreatorId=${encodeURIComponent(CreatorId)}&Private=${encodeURIComponent(Private)}`}
        className="px-8 py-2 h-fit bg-[#EC4899] rounded-full max-md:px-4 max-md:py-1 max-md:text-sm text-white font-semibold"
      >
        Select
      </a>
    </div>
  );
};

export default SearchItem;
