import { useState } from "react";
import Container from "../components/Container";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { HashLink } from "react-router-hash-link";
import { HomeMenu } from "../components/HomeMenu";
import pagesContent from "../data/pagesContent.json";
import { SectionComponentProps } from "../types";
// import React from "react";
import useCurrentSectionData from "../hooks/useCurrentSectionData";

const Home = ({ section }: SectionComponentProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const sectionData = useCurrentSectionData(section.id);

  return (
    <div
      style={{ display: "flex", width: "60%", justifyContent: "space-between" }}
    >
      <Container
        display="flex"
        flexDirection="column"
        backgroundColor={sectionData?.containerColor}
        padding="2em"
        // maxWidth="500px"
        textAlign="left"
        justifyContent="center"
        alignItems="center"
        className={`${section.id}-page__container`}
      >
        {/* <nav className={`large-nav_${section.id}`}> */}
        {pagesContent.sections.slice(1).map((item) => (
          <HomeMenu key={item.id}>
            <HashLink smooth to={`#${item.id}`}>
              <h1 style={{ textAlign: "right" }}>{item.title}</h1>
            </HashLink>
          </HomeMenu>
        ))}
        {/* </nav> */}
      </Container>
      <Container
        display="flex"
        flexDirection="column"
        backgroundColor={sectionData?.containerColor}
        width="400px"
        textAlign="left"
        justifyContent="space-between"
        className={""}
        padding="2em"
      >
        <h5 style={{ paddingBottom: "1rem" }}>
          Your local front end developer,
          <br />
          driven by the belief that design can inspire diversity and innovation
          as I continue to learn and grow.
        </h5>
        <HashLink smooth to="#about">
          <h1 style={{ color: "white" }}>{section.title}</h1>
        </HashLink>
        <h5
          style={{
            textAlign: "left",
            backgroundColor: isHovered ? "#E2FF00" : undefined,
            display: "flex", // Use flex to align text and icon
            alignItems: "center", // Align items vertically 
            width:"auto"
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div>
            Let’s
            <HashLink smooth to="#contact" style={{ marginRight: "5px" }}>
              <span> connect and transform ideas</span>
            </HashLink>
            into digital reality.
          </div>
          <span
            style={{
              display: "inline-flex", // Keeps the icon inline with the text
              width: "24px", // Width of the icon (adjust as needed)
              height: "24px", // Height of the icon (adjust as needed)
              justifyContent: "center", // Center the icon horizontally
              opacity: isHovered ? 1 : 0, // Control visibility with opacity
              transition: "opacity 0.3s ease", // Smooth transition for opacity
            }}
          >
            <SentimentSatisfiedAltIcon />
          </span>
        </h5>
      </Container>
    </div>
  );
};

export default Home;
