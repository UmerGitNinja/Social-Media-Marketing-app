import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";

interface SongsListProps {
  label: string;
  image?: string;
  onCheckBoxChange: (label: string, isChecked: boolean) => void;
}

const TweetsList: React.FC<SongsListProps> = ({
  label,
  onCheckBoxChange,
  image,
}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    onCheckBoxChange(label, isChecked);
  };

  return (
    <div className="flex items-center gap-4 border-b-[1px] border-[#3CACFE] pb-4">
      {image && (
        <div className="relative h-12 w-12">
          <Image
            alt="Twitter-img"
            unoptimized
            className="rounded-full object-cover"
            src={image}
            fill
          />
        </div>
      )}
      <div className="flex-1">
        <FormGroup>
          <FormControlLabel
            className="font-light text-sm select-none"
            control={
              <Checkbox
                sx={{
                  color: "#22B83A",
                  borderRadius: "50%",
                  "&.Mui-checked": {
                    color: "#22B83A",
                    borderRadius: "50%",
                  },
                }}
                id="Song-Check"
                icon={<FaRegCircle size={20} className="text-[#3CACFE]" />}
                checkedIcon={
                  <FaCircleCheck size={20} className="text-[#3CACFE]" />
                }
                className="text-green-500"
                onChange={handleCheckboxChange}
              />
            }
            label={label}
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default TweetsList;
