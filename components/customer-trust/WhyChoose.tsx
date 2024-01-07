import Image from "next/image";
import PromotionBtn from "../shared/PromotionBtn";

const data = [
  {
    icon: "/Images/star1.webp",
    title: "Affordable Rates",
  },
  {
    icon: "/Images/flash.webp",
    title: "Organic & safe",
  },
  {
    icon: "/Images/clipboard.webp",
    title: "Performance Guarantee",
  },
  {
    icon: "/Images/star2.webp",
    title: "4.4 on Trustpilot",
  },
  {
    icon: "/Images/efficiency.webp",
    title: "User Dashboard",
  },
  {
    icon: "/Images/pie-chart.webp",
    title: "Dedicated Manager",
  },
  {
    icon: "/Images/warning.webp",
    title: "Works for all channels",
  },
  {
    icon: "/Images/custom-support.webp",
    title: "24/7 Customer Support",
  },
];

const WhyChoose = () => {
  return (
    <section className="p-4 flex-center flex-col gap-20 ">
      <div className="space-y-6 text-center">
        <p className="text-green-500 font-bold">Why Choose Us?</p>
        <h3 className="text-2xl text-white font-bold">
          Why over 2,850 customers trust us every month
        </h3>
      </div>

      <div className="grid md:grid-cols-4 max-md:grid-cols-2 grid-cols-2 lg:w-[900px]  md:w-[600px] w-[300px] gap-10">
        {data.map((item) => (
          <div key={item.title} className="space-y-2">
            <div className="flex-center flex-col gap-2">
              <Image src={item.icon} alt={item.title} width={90} height={90} />
              <p className="text-green-500 text-sm font-semibold w-[80px] text-center">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      <PromotionBtn label="Start Promotion" />
    </section>
  );
};

export default WhyChoose;
