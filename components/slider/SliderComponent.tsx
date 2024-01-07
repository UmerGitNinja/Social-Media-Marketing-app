import Image from "next/image";
import SliderCard from "./SliderCard";

const carddata = [
  {
    imageUrl: "/Images/1.webp",
    name: "Mary Amundson",
    review:
      "Had some questions and customer support responded within a couple hours. The campaign I ordered was completed within 3 days...",
  },
  {
    imageUrl: "/images/2.webp",
    name: "Steve Broderick",
    review:
      "Viewpals is excellent to promote yourself on TikTok, YouTube. I have seen highly noticeable instant results in my stats...",
  },
  {
    imageUrl: "/images/3.webp",
    name: "Hector Sanders",
    review:
      "Reliable service - been using them since my friend first recommended.",
  },
  {
    imageUrl: "/images/4.webp",
    name: "Harvey D.Blessing",
    review:
      "Reliable service - been using them since my friend first recommended.",
  },
  {
    imageUrl: "/images/5.webp",
    name: "Park Jeimi",
    review:
      "Viewpals are very supportive and work to make all transactions quick and to the buyers requirement...",
  },
  {
    imageUrl: "/images/1.webp",
    name: "Mary Amundson",
    review:
      "Had some questions and customer support responded within a couple hours. The campaign I ordered was completed within 3 days...",
  },

  {
    imageUrl: "/images/2.webp",
    name: "Steve Broderick",
    review:
      "Viewpals is excellent to promote yourself on TikTok, YouTube. I have seen highly noticeable instant results in my stats...",
  },
  {
    imageUrl: "/images/3.webp",
    name: "Hector Sanders",
    review:
      "Reliable service - been using them since my friend first recommended.",
  },
];

const SliderComponent = () => {
  return (
    <section className="p-8 flex flex-col gap-4 md:gap-10">
      <div className="text-center flex flex-col gap-8">
        <p className="text-green-500 font-bold">Why choose Viewpals</p>
        <h1 className="text-2xl md:text-[50px] font-bold text-gray-200">
          Trusted by 2,850+ happy Clients
        </h1>
      </div>

      <div className="grid grid-cols-4 gap-x-[450px] h-[550px] overflow-hidden max-md:gap-x-[400px] ">
        {carddata.map((data, index) => (
          <div key={index} className="">
            <SliderCard {...data} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SliderComponent;
