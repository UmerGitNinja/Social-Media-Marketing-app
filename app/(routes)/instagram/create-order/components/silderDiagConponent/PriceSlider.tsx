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
        setValue(typeof value === "number" ? ValueArray[value].value : 0)
      }
      valueLabelDisplay="off"
      disabled={disabled}
      marks
      min={0}
      step={1}
      max={ValueArray.length - 1}
      color="secondary"
      style={{
        width: 600,
      }}
      sx={{
        "& .MuiSlider-thumb": {
          borderRadius: "100%",
          width: "20px",
          height: "20px",
          color: "white",
          boxShadow: "0 4px 4px rgba(236,72,153,.25)",
          border: "2px solid #EC4899",
        },
        ".css-mmp6pz-MuiSlider-root": {
          color: "#EC4899"
        }
      }}
      className="!h-2 !rounded-sm !max-w-full"
    />
  );
};

export default PriceSlider;
