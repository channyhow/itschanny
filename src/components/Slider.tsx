import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBackForward from '@mui/icons-material/ArrowForward';
import { Shell } from "./Shell";
import { ImageInfo } from "../types";

interface SliderProps {
  images: ImageInfo[];
}

const Slider = ({ images }: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      } else if (event.key === "ArrowLeft") {
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      className="slider"
      style={{ textAlign: "center", width: "100%", overflow: "hidden" }}
      {...handlers}
    >
      <Shell
        className={""}
        display={"flex"}
        padding={""}
        width={""}
        height={""}
        flexDirection="column"
        alignItems="flex-end"
        scale=""
        currentSection={""}
        justifyContent={"center"}
      >
        <div style={{width:"100%", display:"flex", justifyContent:"flex-end"}}>
          <button
            onClick={prevSlide}
            style={{ background: "transparent", border: "none" }}
          >
            <ArrowBackIcon />
          </button>{" "}
          <button
            onClick={nextSlide}
            style={{ background: "transparent", border: "none" }}
          >
            <ArrowBackForward />
          </button>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
margin:'2rem 0'
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                display: index === currentSlide ? "block" : "none",
                width: "100%",
                transition: "opacity 0.5s ease",
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                style={{
                  width: img.width,
                  maxWidth: "1400px",
                  // maxHeight: "500px",
                  height: img.height,
                  objectFit: img.objectFit || "cover",
                  objectPosition: img.objectPosition || "center",
                }}
              />
            </div>
          ))}
        </div>
      </Shell>
    </div>
  );
};

export default Slider;
