import { useState } from "react";
import Container from "../components/Container";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { HashLink } from "react-router-hash-link";
import { SectionComponentProps } from "../types";
import useCurrentSectionData from "../hooks/useCurrentSectionData";
import { useMediaQuery } from "@mui/material";

const Home = ({ section }: SectionComponentProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const sectionData = useCurrentSectionData(section.id);
  const isMobile = useMediaQuery("(max-width:425px)");

  const skills = [
    "React",
    "TypeScript",
    "Sass",
    "Node.js",
    "PostGreSQL",
    "Express",
    // "Illustrator",
  ];

  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    }}>
      {/* main green container */}
      <Container
        display="flex"
        flexDirection="column"
        margin="1em"
        minWidth="300px"
        maxWidth="500px"
        width="80%" // Responsive width
        backgroundColor={sectionData?.containerColor}
        className={""}
        padding="1em"
        border="1px solid"
      >
        <h5 style={{ paddingBottom: "1rem" }}>
          Your local front end developer,
          <br />
          driven by the belief that design can inspire diversity and innovation
          as I continue to learn and grow.
        </h5>
        <HashLink smooth to="#about">
          <h1
            style={{
              color: "white",
              textTransform: "lowercase",
              letterSpacing: "-5px",
            }}
          >
            {section.title}
          </h1>
        </HashLink>
        <h5
          style={{
            textAlign: "left",
            backgroundColor: isHovered ? "#ceca4d" : undefined,
            transition: "background-color 0.5s ease",
            display: "flex", // Use flex to align text and icon
            alignItems: "center", // Align items vertically
            width: "auto",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h5>
            Let’s
            <HashLink smooth to="#contact" style={{ marginRight: "5px" }}>
              <span> connect and transform ideas</span>
            </HashLink>
            into digital reality.
          </h5>
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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "10px",
          justifyContent: "space-between",
          width: "80%", // Match container width
          margin: "10px auto 0", // Center the div
        }}
      >
        {skills.map((skill) => (
          <h6
            key={skill}
            style={{
              margin: isMobile ? "0 0.1rem" : "0 0.5rem",
              fontSize: isMobile ? "50%" : "60%",
              // flex: "1 1 100px", // Flex properties to expand and shrink
              textAlign: "center",
            }}
          >
            {skill}
          </h6>
        ))}
      </div>
    </div>
  );
};

export default Home;
