import { CommonPageProps } from "../types";
import useCurrentSectionData from "../hooks/useCurrentSectionData";
import { CSSProperties } from "react";

const About = ({ section }: CommonPageProps) => {
  const sectionData = useCurrentSectionData(section.id);

  // Define the grid container style
  const gridContainerStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Creates 2 columns of equal width
    gap: "20px", // Space between grid items
    padding: "1em",
    // backgroundColor: sectionData?.containerColor,
  };

  const containerStyle: CSSProperties = {
    padding: "1rem",
    backgroundColor: sectionData?.containerColor,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    color: sectionData?.color,
    margin: "1rem",
  };
  return (
    <div style={gridContainerStyle}>
      <div
        style={{
          // transform: "rotate(270deg)",
          // transformOrigin: "center center",
          // color: "blue",
          width: "10%",
          // scale: "0.5",
          padding: "1em",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>{section.id}</h1>
      </div>{" "}
      {sectionData?.contenu?.map((text, index) => (
        <div key={index} style={containerStyle}>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
};

export default About;
