"use client"
import Image from "next/image";
import React, { useState } from "react";
import SearchMenu from "./search-menu";
import fetcher from "@/lib/Creater-fetcher";
import { TikTokUser } from "@/types";
import { CircularProgress } from "@mui/material";

const SearchBar = () => {
  const [Query, setQuery] = useState("");
  const [CreatorData, setCreatorData] = useState<TikTokUser[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async () => {
    try {
      setIsLoading(true);
      const data = await fetcher(Query);
      setCreatorData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="flex relative z-50 rounded-full p-2 w-full bg-white items-center">
      <div className="relative z-50 flex-[0.5] w-8 h-8">
        <Image alt="Spotify-icon" src={"/tiktok.svg"} fill />
      </div>
      <div className="flex-[2.5] h-8 border-l-[1px] border-neutral-300">
        <input
          type="text"
          className="h-full outline-none placeholder:font-light text-lg md:text-1xl lg:text-2xl text-black px-2 placeholder:text-neutral-500 placeholder:text-sm lg:placeholder:text-xl sm:placeholder:text-base w-full"
          name="Query"
          placeholder="Enter your TikTok username here..."
          onChange={(e) => setQuery(e.target.value)}
          value={Query}
        />
      </div>

      <button
        onClick={handleButtonClick}
        disabled={isLoading}
        type="submit"
        className="px-4 sm:text-xl text-sm sm:font-semibold font-medium whitespace-nowrap rounded-full py-2 sm:py-6 flex-1 sm:flex-[1.5] bg-[#3CACFE]"
      >{ isLoading ? <CircularProgress size={25} className="text-white"/> :
        "Start Promotion"
      }
      </button>
      {CreatorData !== null && <SearchMenu data={CreatorData || []} />}
    </div>
  );
};

export default SearchBar;
