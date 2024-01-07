import Link from "next/link";
interface Props {
  label: string;
  className?: string;
}

const PromotionBtn = ({ label, className }: Props) => {
  return (
    <div className=" p-6">
      <Link
        href={"#search"}
        className={`py-4 px-6 md:text-lg font-medium text-[#202020]  bg-green-500 rounded-lg
        ${className}`}
      >
        {label}
      </Link>
    </div>
  );
};

export default PromotionBtn;
