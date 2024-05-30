import React, { useState, CSSProperties } from "react";
import { CommonPageProps } from "../types";
import useCurrentSectionData from "../hooks/useCurrentSectionData";
import { useMediaQuery } from "@mui/material";

const About = ({ section }: CommonPageProps) => {
  const isMobile = useMediaQuery("(max-width:767px)");
  const sectionData = useCurrentSectionData(section.id);
  const [gridOn, setGridOn] = useState(false);

  const skills = [
    { name: "React", color: "#D93100" },
    { name: "TypeScript", color: "#DD6144" },
    { name: "Sass", color: "#C082B9" },
    { name: "Node.js", color: "#ceca4d" },
    { name: "PostGreSQL", color: "#C082B9" },
    { name: "Express", color: "#DD6144" },
    // { name: "Illustrator", color: "#C082B9" },
  ];

  const handleGridToggle = () => {
    setGridOn(!gridOn);
  };

  const paraStyle: CSSProperties = {
    border: gridOn ? "1px solid" : "1px solid transparent",
    padding: gridOn ? "1em" : "null",
    height: gridOn ? '100%':'',
    minHeight: gridOn ? "140px" : "",
    backgroundColor: gridOn ? "rgba(255,255,255,0.5)" : "",
    fontFamily: gridOn ? "Urbanist" : "",
    transition: "all 0.5s ease",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  };

  const gridContainerStyle: CSSProperties = {
    display: gridOn ? "grid" : "flex",
    gridTemplateColumns: gridOn && !isMobile ? "repeat(2, 1fr)" : "none",
    gap: gridOn ? "20px" : "0",
    minHeight: "350px",
    padding: "1em",
    // margin: "40px auto",
    justifyContent: "center",
    width: "100%",
    alignItems: "start",
    justifyItems: "center",
    flexDirection: gridOn && !isMobile ? "row" : "column",
    transition: "all 0.5s ease",
  };

  const buttonStyle: CSSProperties = {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
    backgroundColor: gridOn ? "#ceca4d" : "transparent",
    color: gridOn ? "#fff" : "#ECE1E1",
    transition: "all 0.5s ease",
    border: "none",
    whiteSpace: "nowrap",
  };

  const buttonText: CSSProperties = {
    transition: "color 0.5s ease",
  };

  return (
    <div style={{ margin: "40px auto", padding: "2rem", maxWidth: "1000px" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "baseline",
          padding: "1em 0",
          width: "auto",
        }}
      >
        <h1 style={{ color:gridOn ? '#C082B9': "#ECE1E1", 
          fontFamily: gridOn ? 'Urbanist': '',
        }}>{section.id}</h1>
        <button onClick={handleGridToggle} style={buttonStyle}>
          <h5 style={buttonText}>Colors: {gridOn ? "On" : "Off"}</h5>
        </button>
      </div>
      <div style={gridContainerStyle}>
        {sectionData?.contenu?.map((text, index, arr) => {
          if (index === Math.floor(arr.length / 2)) {
            return (
              <React.Fragment key={index}>
                <div
                  style={{
                    gridColumn: "1/-1",
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    marginBottom: "20px",
                    // width: "80%",
                  }}
                >
                  {skills.map((skill) => (
                    <h6
                      key={skill.name}
                      style={{
                        transition: "all 0.5s ease",
                        fontWeight: "600",
                        padding: "0.75rem 1.5rem",
                        color: gridOn ? `${skill.color}` : "black",
                      }}
                    >
                      {skill.name}
                    </h6>
                  ))}
                </div>
                <div style={paraStyle}>
                  <p >{text}</p>
                </div>
              </React.Fragment>
            );
          }
          return (
            <div  style={paraStyle} key={index}>
              <p >{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
