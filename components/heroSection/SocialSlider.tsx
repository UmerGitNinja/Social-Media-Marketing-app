"use client";
import Image from "next/image";
import Socials from "../Social-Slider/socials";
import { useEffect, useState } from "react";
import Search from "../searchComonent/Search";
import { SearchArtists } from "@/hooks/useSearchArtist";
import createrFetcher from "@/lib/Creater-fetcher";
import SearchInstaUsers from "@/lib/search-insta-users";
import useSearchStreamer from "@/hooks/useSearchStreamer";
import SearchUsers from "@/lib/search-users";
import { useRouter } from "next/navigation";


const Data = [
  {
    label: "Spotify",
    icon: "/spotify.svg",
    Despription: "Enter your Spotify Artist username",
    Hook: SearchArtists,
    PathName: "/spotify"
  },
  {
    label: "Tiktok",
    icon: "/tiktok.svg",
    Despription: "Enter your Tiktok username",
    Fetcher: createrFetcher,
    PathName: "/tiktok"
  },
  {
    label: "Instagram",
    icon: "/insta.svg",
    Despription: "Enter your Instagram username",
    Fetcher: SearchInstaUsers,
    PathName: "/instagram"
  },
  {
    label: "Twitch",
    icon: "/twitch.svg",
    Despription: "Enter your Twitch username",
    Hook: useSearchStreamer,
    PathName: "/twitch"
  },
  {
    label: "X",
    icon: "/x.svg",
    Despription: "Enter your Twitter username",
    Fetcher: SearchUsers,
    PathName: "/twitter"
  },
];

const SocialSlider = () => {
  const [placeholder, setPlaceholder] = useState("");
  const [data, setData] = useState(Data);
  const [isActive, setIsActive] = useState(false);
  const [className, setClassName] = useState("");
  const [pathName, setPathName] = useState("")

  useEffect(() => {
    setPlaceholder(data[2].Despription);
    if (isActive) {
      setPathName(data[2].PathName)
    }

    const intervalId = setInterval(() => {
      setClassName("-translate-y-2 ");
    }, 500);

    return () => clearInterval(intervalId);
  }, [isActive, data]);
  const router = useRouter()
  const handleclick = (check: number, index?: number) => {
    setClassName("grayscale");
    console.log("Placeholder=", placeholder);
    if (check === 1 || index === 3) {
      const [first, ...rest] = data;

      rest.push(first);
      setData([...rest]);
      // setPlaceholder(rest[2].Despription);
    } else if (check === 0 || index === 1) {
      const [last, ...rest] = data.reverse();
      rest.push(last);
      // setPlaceholder(rest[2].Despription);
      setData([...rest.reverse()]);
    }
  };
  return (
    <div className="flex-center space-y-8 p-4  flex-col w-full">
      <div className="flex-center space-x-6">
        <div
          className="w-fit bg-slate-300 rounded-lg p-1 cursor-pointer"
          onClick={() => {
            setIsActive(!isActive), handleclick(0);
          }}
        >
          <Image
            loading="eager"
            src={"/arrow-left.svg"}
            width={28}
            height={28}
            alt="arrow"
          />
        </div>
        <div className="flex-center w-[400px] max-md:w-[300px] h-[150px] rounded-lg space-x-8 overflow-hidden transition-all delay-250 duration-1000">
          {data.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setIsActive(!isActive), handleclick(3, index);
              }}
            >
              <Socials
                key={index}
                name={item.label}
                icon={item.icon}
                link={pathName}
                background={` ${
                  (data.length - 1) / 2 === index
                    ? `${className}  `
                    : `grayscale opacity-50 `
                }`}
              />
            </div>
          ))}
        </div>
        <div
          className="w-fit bg-slate-300 rounded-lg p-1 cursor-pointer"
          onClick={() => {
            setIsActive(!isActive), handleclick(1);
          }}
        >
          <Image src={"/arrow-right.svg"} width={28} height={28} alt="arrow" />
        </div>
      </div>
      {/* <Search placeholder={placeholder}   /> */}
    </div>
  );
};

export default SocialSlider;
