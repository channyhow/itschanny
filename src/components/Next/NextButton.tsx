import "./styles.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface NextButtonProps {
  onPrev: () => void;
  onNext: () => void;
  disablePrev: boolean;
  disableNext: boolean;
}

export const NextButton = ({
  onPrev,
  onNext,
  disableNext,
  disablePrev,
}: NextButtonProps) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width:'100px'
      }}
    >
      <button
        onClick={onPrev}
        disabled={disablePrev}
        style={{ background: "transparent", border: "none" }}
        aria-label="Previous Slide"
      >
        <ArrowBackIcon />
      </button>
      <button
        onClick={onNext}
        disabled={disableNext}
        style={{ background: "transparent", border: "none" }}
        aria-label="Next Slide"
      >
        <ArrowForwardIcon />
      </button>
    </div>
  );
};
