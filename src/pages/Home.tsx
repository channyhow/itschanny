// src/pages/Home.js
import { useState } from "react";
import Container from "../components/Container";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { HashLink } from "react-router-hash-link";
import { SectionComponentProps } from "../types";
import useCurrentSectionData from "../hooks/useCurrentSectionData";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

const Home = ({ section }: SectionComponentProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const sectionData = useCurrentSectionData(section.id);
  const isMobile = useMediaQuery("(max-width:425px)");
  const { t } = useTranslation();

  const skills = [
    "React",
    "TypeScript",
    "Sass",
    "Node.js",
    "PostGreSQL",
    "Express",
  ];

  // Assert the type of the result from t
  // const contentArray = t('home.contenu', { returnObjects: true }) as string[];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* main green container */}
      <Container
        className=""
        display="flex"
        flexDirection="column"
        margin="1rem"
        maxWidth="500px"
        backgroundColor={sectionData?.containerColor}
        padding="1em"
        border="1px solid"
      >
    
        <h5 style={{ paddingBottom: "1rem" }}>{t("home.content")}</h5>
        <HashLink smooth to="#about">
          <h1
            style={{
              color: "white",
              textTransform: "lowercase",
              letterSpacing: "-2px",
            }}
          >
            {" "}
            {t("home.title")}
     
          </h1>
        </HashLink>
        <div>
          <h5
            style={{
              textAlign: "left",
              backgroundColor: isHovered ? "#ceca4d" : undefined,
              transition: "background-color 0.5s ease",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <HashLink smooth to="#contact" style={{ marginRight: "5px" }}>
              {t("home.call_to_action")}
            </HashLink>
            <span
              style={{
                display: "inline-flex",
                width: "24px",
                height: "24px",
                justifyContent: "center",
                opacity: isHovered ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              <SentimentSatisfiedAltIcon />
            </span>
          </h5>
        </div>
      </Container>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "10px",
          width: "100%",
          justifyContent: "space-evenly",
        }}
      >
        {skills.map((skill) => (
          <h6
            key={skill}
            style={{
              margin: isMobile ? "0 0.1rem" : "0 0.5rem",
              fontSize: isMobile ? "50%" : "60%",
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
