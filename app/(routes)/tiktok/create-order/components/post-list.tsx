import { Checkbox } from "@mui/material";
import Image from "next/image";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
interface PostsListProps {
  Url:string;
  title:string;
  onCheckBoxChange: (label: string, isChecked: boolean) => void;
}

const PostsList: React.FC<PostsListProps> = ({onCheckBoxChange,Url,title}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onCheckBoxChange(title, isChecked);
  };

  return (
    <div className="relative h-32">
      <Image src={Url} alt={"Video thumbnail"} unoptimized sizes="(max-width: 360px) 100vw, 360px" fill className="object-cover"/>

    <Checkbox
      sx={{
        color: "3cacfe",
        borderRadius: "50%",
        "&.Mui-checked": {
          color: "3cacfe",
          borderRadius: "50%",
        },
      }}
      id="Song-Check"
      icon={<FaRegCircle size={20} />}
      checkedIcon={<FaCircleCheck size={20} />}
      className="text-[3cacfe] absolute top-[5%] right-1"
      onChange={handleCheckboxChange}
    />
    </div>
  );
};

export default PostsList;