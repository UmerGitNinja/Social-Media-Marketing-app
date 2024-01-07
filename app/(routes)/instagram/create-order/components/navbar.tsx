"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { IoChevronBack } from "react-icons/io5";

const Navbar = () => {
  const router = useRouter()
  return (
    <nav className="w-full h-20 flex items-center justify-between pl-8 shadow-md bg-[#202020]">
      <button onClick={()=> router.push("/")} className="text-neutral-500 flex items-center"><IoChevronBack size={20}/>Back</button>
      <div className="flex gap-2 justify-center items-center mr-8 lg:mr-[50%]">
        <Image alt="Logo" src={"/logo.svg"} width={25} height={25} />
        <span className="font-bold text-[#E53A76]">Streamkick</span>
      </div>
    </nav>
  );
};

export default Navbar;
