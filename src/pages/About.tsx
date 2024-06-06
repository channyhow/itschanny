import React, { useState, CSSProperties } from "react";
import { CommonPageProps } from "../types";
import useCurrentSectionData from "../hooks/useCurrentSectionData";
import { useMediaQuery } from "@mui/material";
import ContrastSharpIcon from "@mui/icons-material/ContrastSharp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faSass } from "@fortawesome/free-brands-svg-icons"; // Add other icons as needed
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const About = ({ section }: CommonPageProps) => {
  const isMobile = useMediaQuery("(max-width:425px)");
  const sectionData = useCurrentSectionData(section.id);
  const [gridOn, setGridOn] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skills = [
    { name: "React", color: "#D93100", icon: faReact },
    // { name: "TypeScript", color: "#DD6144", icon: faReact }, // Replace with appropriate icon
    { name: "Sass", color: "#C082B9", icon: faSass },
    { name: "Node.js", color: "rgb(214 243 55)", icon: faNodeJs },
    { name: "PostGreSQL", color: "#C082B9", icon: faDatabase },
    { name: "Express", color: "#DD6144", icon: faNodeJs }, // Replace with appropriate icon
  ];

  const handleGridToggle = () => {
    setGridOn(!gridOn);
  };

  const handleMouseEnter = (skillIcon: string) => {
    setHoveredSkill(skillIcon);
  };
  const handleMouseLeave = () => {
    setHoveredSkill(null);
  };
  const skillIconStyle: CSSProperties = {
    fontSize: "2rem",
    marginBottom: "0.5rem",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const paraStyle: CSSProperties = {
    border: gridOn ? "1px solid" : "1px solid transparent",
    padding: gridOn ? "1em" : "1rem",
    height: gridOn ? "100%" : "",
    minHeight: gridOn ? "140px" : "",
    backgroundColor: gridOn ? "rgba(255,255,255,0.5)" : "",
    fontFamily: gridOn ? "Urbanist" : "",
    transition: "all 0.5s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  const gridContainerStyle: CSSProperties = {
    display: gridOn ? "grid" : "flex",
    gridTemplateColumns: gridOn && !isMobile ? "repeat(2, 1fr)" : "none",
    gap: gridOn ? "20px" : "0",
    minHeight: "350px",
    padding: isMobile ? "0" : "1em 0",
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
    backgroundColor: "transparent",
    color: gridOn ? "rgb(214 243 55)" : "#fff",
    transition: "all 0.5s ease",
    border: "none",
    whiteSpace: "nowrap",
  };

  const buttonText: CSSProperties = {
    transition: "color 0.5s ease",
  };

  return (
    <div
      style={{
        margin: "40px auto",
        padding: isMobile ? "1rem" : "2rem",
        maxWidth: "1200px",
        width: "100%",
      }}
    >
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
        <h1
          style={{
            color: gridOn ? "#C082B9" : "white",
            fontFamily: gridOn ? "Urbanist" : "",
          }}
        >
          {section.id}
        </h1>
        <button onClick={handleGridToggle} style={buttonStyle}>
          <h5 style={buttonText}>
            <ContrastSharpIcon />
          </h5>
        </button>
      </div>
      <div style={gridContainerStyle}>
        {sectionData?.contenu?.map((text, index, arr) => {
          if (index === Math.floor(arr.length / 2)) {
            return (
              <React.Fragment key={index}>
                {gridOn ? (
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
                      <div
                        key={skill.name}
                        style={{
                          transition: "all 0.5s ease",
                          fontWeight: "600",
                          padding: "0.75rem 1.5rem",
                          color: gridOn ? skill.color : "#666153",
                          transform:
                            hoveredSkill === skill.name
                              ? "scale(1.2)"
                              : "scale(1)",
                          filter:
                            hoveredSkill === skill.name
                              ? "drop-shadow(0 0 10px rgba(214, 243, 55, 0.8))"
                              : "none",
                        }}
                        onMouseEnter={() => handleMouseEnter(skill.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <FontAwesomeIcon
                          icon={skill.icon}
                          style={skillIconStyle}
                        />
                      </div>
                    ))}
                  </div>
                ) : null}

                <div style={paraStyle}>
                  <h6
                    style={{ textTransform: gridOn ? "revert" : "uppercase" }}
                  >
                    {text}
                  </h6>
                </div>
              </React.Fragment>
            );
          }
          return (
            <div style={paraStyle} key={index}>
              <h6 style={{ textTransform: gridOn ? "revert" : "uppercase" }}>
                {text}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
