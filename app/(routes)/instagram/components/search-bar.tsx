"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import SearchInstaUsers from "@/lib/search-insta-users";
import { InstagramUserData } from "@/types";
import SearchMenu from "./search-menu";
import { CircularProgress } from "@mui/material";

const SearchBar = ()=> {
const [Query, setQuery] = useState("");

const [CreaterData, setCreaterData] = useState<InstagramUserData[] | null>(null);
const [isLoading, setIsLoading] = useState(false);
const router = useRouter();
const handleButtonClick = async () => {
  try {
    setIsLoading(true);
    const data = await SearchInstaUsers(Query);
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
        <Image alt="instagram-icon" src={"/insta.svg"} fill />
      </div>
      <div className="flex-[2.5] h-8 border-l-[1px] border-neutral-300">
        <input
          type="text"
          className="h-full outline-none placeholder:font-light text-lg md:text-1xl lg:text-2xl text-black px-2 placeholder:text-neutral-500 placeholder:text-sm lg:placeholder:text-xl sm:placeholder:text-base w-full"
          name="Query"
          placeholder="Enter Instagram username here..."
          onChange={(e)=> setQuery(e.target.value)}
          value={Query}
        />
      </div>

      <button
        type="submit"
        onClick={handleButtonClick}
        className="px-4 sm:text-xl text-sm sm:font-semibold font-medium whitespace-nowrap rounded-full py-2 sm:py-6 flex-1 sm:flex-[1.5] bg-gradient-to-r from-[#735fd1] to-[#DB447E]"
      >
        { isLoading ? <CircularProgress size={25} className="!text-white"/> :
        "Start Promotion"
      }
      </button>
      <SearchMenu data={CreaterData || []}/>
    </div>
  );
};

export default SearchBar;
