import { Slider } from "@mui/material";

interface PriceSliderProps {
  setValue: (value: number) => void;
  ValueArray: any;
}
const PriceSlider = ({ setValue, ValueArray }: PriceSliderProps) => {
  return (
    <Slider
      onChange={(e, value) =>
        setValue(typeof value === "number" ? ValueArray[value].value : 0)
      }
      valueLabelDisplay="off"
      marks
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
          boxShadow: "0 4px 4px rgba(102,123,154,.25)",
          border: "2px solid green",
        },
      }}
      className="text-green-500 h-2 !rounded-sm max-w-full"
    />
  );
};

export default PriceSlider;
