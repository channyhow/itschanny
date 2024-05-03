import { useState } from "react";
import jldesk from "./../assets/jlalbany/jlu2024desk.png";
import jlmob from "./../assets/jlalbany/jlu2024mob.png";
import sashadesk from "./../assets/sashayogaflow/sashayogaflow desktop.png";
import sashamob from "./../assets/sashayogaflow/sashayogaflow mobile.png";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Shell } from "./Shell";
// import { PageProps } from "../types";

// interface SliderProps {
//   Section: string;
// }
const slides = [
  {
    name: "jlalbany",
    images: [{ desktop: jldesk, mobile: jlmob }],
    description: "Project description here",
    techno: "React, CSS",
    url: "/jlalbany",
  },
  {
    name: "sasha yoga flow",
    images: [{ desktop: sashadesk, mobile: sashamob }],
    description: "Another project description",
    techno: "Vue, TailwindCSS",
    url: "/sashayogaflow",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev + slides.length - 1) % slides.length);
  };

  const { name, images, description, techno } = slides[currentSlide];

  return (
    <div
      className="slider"
      style={{ textAlign: "center", width: "100%", overflow: "hidden" }}
    >
      <Shell className={""} display={"flex"} padding={""} width={""} height={""} alignItems='flex-end' scale="" currentSection={""} >
        <button
          onClick={prevSlide}
          style={{ background: "transparent", border: "none" }}
        >
          <KeyboardArrowLeftIcon />
        </button>
        <div
          style={{
            // maxWidth: "1400px",
            // minWidth: "1250px",
            // height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "10px",
              }}
            ><div style={{  display: "flex",
            flexDirection: "row",}}><img
                src={img.desktop}
                alt={`${name} desktop view`}
                style={{
                  maxHeight:'700px',
                  // maxHeight: "100%",
                  // maxWidth: "100%",
                  objectFit: "contain",
                  margin: "0.5rem",
                  border:'3px solid #E2FF00'
                }}
              />{" "}
           
              <img
                src={img.mobile}
                alt={`${name} mobile view`}
                style={{
                  maxHeight:'700px',
                  // maxHeight: "100%",
                  // maxWidth: "100%",
                  objectFit: "contain",
                  margin: "0.5rem",
                  border:'3px solid #E2FF00'
                }}
              /> </div>
                <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  // alignItems: "flex-start",
                  justifyContent: "flex-end",
                }}
              >
                <h4>{name}</h4>
                <h4>{description}</h4>
                <h4>{techno}</h4>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={nextSlide}
          style={{ background: "transparent", border: "none" }}
        >
          <KeyboardArrowRightIcon />
        </button>
        {/* <h1>{Section}</h1> */}
      </Shell>
    </div>
  );
};

export default Slider;
