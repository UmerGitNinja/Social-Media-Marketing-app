"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import SearchUsers from "@/lib/search-users";
import { useRouter } from "next/navigation";
import _ from "lodash";
import { CircularProgress } from "@mui/material";
import SearchMenu from "./search-menu";
import { UserData } from "@/types";

const SearchBar = () => {
  const [Query, setQuery] = useState("");

  const [CreaterData, setCreaterData] = useState<UserData[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const handleButtonClick = async () => {
    try {
      setIsLoading(true);
      const data = await SearchUsers(Query);
      setCreaterData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(CreaterData);
  }, [CreaterData]);
  return (
    <div className="flex relative z-50 rounded-full p-2 w-full bg-white items-center">
      <div className="relative z-50 flex-[0.5] w-8 h-8">
        <Image alt="Spotify-icon" src={"/x.svg"} fill />
      </div>
      <div className="flex-[2.5] h-8 border-l-[1px] border-neutral-300">
        <input
          type="text"
          className="h-full outline-none placeholder:font-light text-lg md:text-1xl lg:text-2xl text-black px-2 placeholder:text-neutral-500 placeholder:text-sm lg:placeholder:text-xl sm:placeholder:text-base w-full"
          name="Query"
          placeholder="Enter Twitter username here..."
          onChange={(e) => setQuery(e.target.value)}
          value={Query}
        />
      </div>
      <button
        onClick={handleButtonClick}
        disabled={isLoading}
        type="submit"
        className="px-4 sm:text-xl text-sm sm:font-semibold font-medium whitespace-nowrap rounded-full py-2 sm:py-6 flex-1 sm:flex-[1.5] bg-[#3CACFE]"
      >
        {isLoading ? (
          <CircularProgress size={25} className="text-white" />
        ) : (
          "Start Promotion"
        )}
      </button>
      {CreaterData !== null && <SearchMenu data={CreaterData} />}
    </div>
  );
};

export default SearchBar;
