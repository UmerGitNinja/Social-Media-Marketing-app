import React from "react";
import PromotionBtn from "./PromotionBtn";
import Image from "next/image";

interface Props {
  heading: string;
  subheading: string;
  description: string;
  image?: string;
}

const SharedText = ({ heading, subheading, description, image }: Props) => {
  return (
    <>
      <div className="space-y-4 md:space-y-10 max-md:text-center text-white max-w-[450px] ">
        <p className="text-green-500 font-semibold ">{subheading}</p>
        <h2 className="text-2xl md:text-4xl font-bold">{heading}</h2>
        <p className="text-sm md:text-xl">{description}</p>
        <PromotionBtn label="Start Promotion" />
      </div>
      {image && (
        <div>
          <Image src={image} alt="img" width={550} height={450} />
        </div>
      )}
    </>
  );
};

export default SharedText;
