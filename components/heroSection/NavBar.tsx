import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBarLinks = [
  {
    name: "Twitter",
    href: "/twitter",
  },
  {
    name: "TikTok",
    href: "/tiktok",
  },
  {
    name: "Spotify",
    href: "/spotify",
  },
  {
    name: "Twitch",
    href: "/twitch",
  },
  {
    name: "Instagram",
    href: "/instagram",
  },
];

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" width={32} height={32} alt="logo" />
        <h1 className="md:text-2xl text-xl font-semibold text-white ">
          ViewPals
        </h1>
      </div>

      <div className="flex justify-center items-center gap-x-16">
        <div className="max-lg:hidden md:space-x-16 ">
          {NavBarLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white text-md font-medium transition hover:text-green-500"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <Link
          href={"/"}
          className="bg-green-500 text-black px-4 py-2 rounded-lg font-medium"
        >
          My Order
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
