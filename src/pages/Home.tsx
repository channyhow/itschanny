import React, { useState } from "react";
import Container from "../components/Container";
import { HashLink } from "react-router-hash-link";

// Import your logos
import logo from "./../assets/homepage_chow red logo eng.svg";
import hoverLogo from "./../assets/homepage_chow red logo eng hover.svg";
// import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
// import useCurrentSectionData from "../hooks/useCurrentSectionData";
import { CommonPageProps } from "../types";

const Home = ({ section }: CommonPageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  // const sectionData = useCurrentSectionData(section.id);
  // const isMobile = useMediaQuery("(max-width:425px)");
  const { t } = useTranslation();

  return (
    <Container>
      <HashLink smooth to="#contact" style={{ 
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%", // This ensures the container takes up full width
          textDecoration: "none" // Remove text decoration from HashLink
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={isHovered ? hoverLogo : logo}
          alt="Channy's Home Logo" // Meaningful alt text
          style={{
            width: "100%",  // Make SVG responsive
            height: "auto", // Maintain aspect ratio
            // maxWidth: "1000px", // Limit the size to a maximum
            transition: "all 0.5s ease"
          }}
        />
      </HashLink>
      <div style={{width:"100%", display:"flex", justifyContent:"flex-end"}}>
        <h6 style={{width:"50%", textAlign:"right"}}>
        {t(`${section.content}`)}
          </h6>
      </div>
    </Container>
  );
};

export default Home;
