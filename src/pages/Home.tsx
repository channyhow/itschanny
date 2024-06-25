import { useState } from "react";
import Container from "../components/Container";
import { HashLink } from "react-router-hash-link";
import logo from "./../assets/itschanny branding/enchantée_chow red logo eng.svg";
import hoverLogo from "./../assets/itschanny branding/enchantée_chow red logo eng hover.svg";
import { useTranslation } from "react-i18next";
import { CommonPageProps } from "../types";
import { useMediaQuery } from "@mui/material";

const Home = ({ section }: CommonPageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:768px)");

  const contentArray = t(`${section.id}.content`, {
    returnObjects: true,
  }) as string[];
  const content = Array.isArray(contentArray) ? contentArray : [];
  console.log("home content",section)

  return (
    <Container>
      <HashLink smooth to="#contact" style={{ 
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%", // This ensures the container takes up full width
          textDecoration: "none" // Remove text decoration from HashLink
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={isHovered ? hoverLogo : logo}
          alt="Channy's Home Logo"
          style={{
            width: "100%",  // Set to 80% or another value that fits your design
            height: "auto", // Maintain aspect ratio
            maxWidth: "900px", // Adjust maximum width as needed
            transition: "all 0.5s ease",
            marginBottom:isMobile ? "2rem":"1rem"
          }}
        />
            <div style={{display:"flex", flexDirection:"column",alignItems:"flex-end", width:'100%'}}>  

          {content.map((item, index) => (
            <div style={{display:"flex", flexDirection:"column"}}>
            <h6 key={index} style={{}}>{item}</h6></div>
          ))}
        </div>  
        </HashLink>
    </Container>
  );
};

export default Home;
