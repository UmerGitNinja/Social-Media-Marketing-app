import Image from "next/image";
import PromotionBtn from "../shared/PromotionBtn";

const StartGrowing = () => {
  return (
    <section className="p-4 space-y-14 md:mx-16 sm:mx-6 mx-4 lg:mx-24 my-10">
      <div className="flex-center">
        <Image
          src={"/trustpilot.svg"}
          alt="ratting"
          width={400}
          height={70}
          className="rounded-lg shadow-md shadow-[#22C55E]"
        />
      </div>
      <div className="bg-[#182747] rounded-xl">
        <div className="flex items-center text-center flex-col bg-[url('/Images/content-footer-mobile.webp')] lg:bg-[url('/Images/content-footer.webp')] bg-no-repeat bg-auto bg-center space-y-4 px-4 py-28">
          <h2 className="text-4xl font-semibold text-white">
            Start growing your channels with Viewpals
          </h2>
          <p className="text-sm md:text-lg text-gray-400">
            Join over 2,850+ users growing their channels with Viewpals
          </p>
          <PromotionBtn label="Get Started" className="p-5" />
        </div>
      </div>
    </section>
  );
};

export default StartGrowing;
