"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition, useState } from "react";

interface SocialsProps {
  name: string;
  link: string;
  icon: string;
  background?: string;
  textColor?: string;
  borderColor?: string;
  DropShadow?: string;
}

const Socials = ({
  name,
  icon,
  link,
  background,
  textColor,
}: SocialsProps) => {
  const router = useRouter()
  return (
    <div
    onClick={()=> router.push(link)}
      className={`flex-center flex-col space-y-2 cursor-pointer transition-all delay-250 duration-500  ${background} `}
    >
      <div className={`bg-gray-400 p-4 w-20 rounded-lg `}>
        <Image
          src={icon}
          alt={name}
          width={50}
          height={50}
          className={`"lg:w-[70px] lg:h-auto  bg-transparent $}`}
        />
      </div>

      <p
        className={`mt-2  text-white/75 ${textColor} text-sm font-semibold text-center `}
      >
        {name}
      </p>
    </div>
  );
};

export default Socials;
