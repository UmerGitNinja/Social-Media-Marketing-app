interface PromotionProps {
  heading: string;
  text: string;
}

const Promotion = ({ text, heading }: PromotionProps) => {
  return (
    <div className="flex-center flex-col text-center bg-[#202020] py-6 px-4 w-[150px] h-[180px] space-y-2 rounded-lg drop-shadow-[2px_2px_2px_rgba(34,197,94,0.7)] lg:w-[270px] md:h-[250px] ">
      <h3 className="text-2xl md:text-4xl font-bold text-green-500">
        {heading}
      </h3>
      <p className="text-white/75 ">{text}</p>
    </div>
  );
};

export default Promotion;
