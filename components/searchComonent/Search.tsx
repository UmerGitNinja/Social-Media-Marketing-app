"use client";

import { TikTokUser } from "@/types";
import { useState } from "react";
import SearchMenu from "./Search-menu";
import createrFetcher from "@/lib/Creater-fetcher";
interface SearchProps {
  placeholder: string;
}

const Search = ({ placeholder }: SearchProps) => {
  const [Query, setQuery] = useState("");
  const [CreatorData, setCreatorData] = useState<TikTokUser[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    try {
      setIsLoading(true);
      const data = await createrFetcher(Query);
      if (Array.isArray(data)) {
        setCreatorData(data);
      } else {
        console.error("Fetcher did not return an array");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  if (!Query && CreatorData) {
    setCreatorData(null);
  }

  return (
    <div className="flex max-md:flex-col  relative max-md:gap-3 py-4 max-md:p-4 w-full">
      <input
        type="text"
        name="search"
        // placeholder="Search for a creator"
        className=" outline-none  p-4 bg-white/85 placeholder:text-center md:placeholder:text-start rounded-xl w-full placeholder:text-black/75 placeholder:text-sm"
        // name="Query"
        placeholder={placeholder}
        onChange={(e) => setQuery(e.target.value)}
        value={Query}
      />
      <button
        className="md:absolute right-0.5 -top-2 md:translate-y-1/2 bg-green-500  px-4 py-3 rounded-xl text-black font-medium text-lg disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={handleButtonClick}
        disabled={isLoading}
        type="submit"
      >
        Grow My Account
      </button>
      {CreatorData !== null && <SearchMenu data={CreatorData || []} />}
    </div>
  );
};

export default Search;
