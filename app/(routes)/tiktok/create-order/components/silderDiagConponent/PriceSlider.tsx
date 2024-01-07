"use client"

import useOrderMenu from '@/hooks/useOrderMenu';
import Slider from '@mui/material/Slider';

interface PriceSliderProps {
  setValue: (value: number) => void;
  ValueArray: any;
  disabled?: boolean;
}
const PriceSlider: React.FC<PriceSliderProps> = ({
  setValue,
  ValueArray,
  disabled,
}) => {
  
  return (
    <Slider
      onChange={(e, value) =>
        setValue(typeof value === "number" ? ValueArray[value].value : 0)
      }
      valueLabelDisplay="off"
      marks
      disabled={disabled}
      min={0}
      step={1}
      max={ValueArray.length - 1}
      style={{
        width: 600,
      }}
      sx={{
        "& .MuiSlider-thumb": {
          borderRadius: "100%",
          width: "20px",
          height: "20px",
          color: "white",
          boxShadow: "0 4px 4px rgba(60,92,254,.25)",
          border: "2px solid #3CACFE",
        },
        ".css-pm0kef-MuiSlider-root": {
          color: "#3CACFE"
        }
      }}
      className="!h-2 !rounded-sm !max-w-full"
    />
  );
};

export default PriceSlider;
