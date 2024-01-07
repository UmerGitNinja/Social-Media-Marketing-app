import { Slider } from "@mui/material";

interface PriceSliderProps {
  setValue: (value: number) => void;
  ValueArray: any;
  disabled?: boolean;
}
const PriceSlider = ({ setValue, ValueArray, disabled }: PriceSliderProps) => {
  return (
    <Slider
      onChange={(e, value) =>
        setValue(
          typeof value === "number" && ValueArray[value]
            ? ValueArray[value].value
            : 0
        )
      }
      valueLabelDisplay="off"
      marks
      min={0}
      step={1}
      disabled={disabled}
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
          border: "2px solid #3878E1",
        },
      }}
      className="text-blue-500 h-2 !rounded-sm max-w-full"
    />
  );
};

export default PriceSlider;
