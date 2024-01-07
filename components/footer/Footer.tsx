import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4">
      <div className="flex justify-between items-center max-md:flex-col gap-2 text-white/75">
        <div className="flex items-center gap-2 ">
          <Image src="/logo.svg" width={32} height={32} alt="logo" />
          <h1 className="md:text-2xl text-xl font-semibold text-white ">
            ViewPals
          </h1>
        </div>
        <div>
          <Link href={"/"}>Privacy Policy</Link>
          <Link href={"/"}>Terms of use</Link>
        </div>
        <Link href={"/"}>Support@Viewpals.co</Link>
      </div>
      <div className="pt-2 mt-5 flex-center text-white border-t border-white/35 ">
        <p>
          © 2023 <Link href={"/"}>Viewpals.co</Link> All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
