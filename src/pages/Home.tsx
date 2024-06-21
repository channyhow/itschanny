// src/pages/Home.js
import { useState } from "react";
import Container from "../components/Container";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import { HashLink } from "react-router-hash-link";
import { CommonPageProps } from "../types";
import useCurrentSectionData from "../hooks/useCurrentSectionData";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

const Home = ({ section }: CommonPageProps) => {
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
    <Container>
      <div
        style={{
          width: "auto",
        }}
      >     <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginBottom: "10px",
        width: "100%",
        justifyContent: "space-evenly",
      }}
    >
      {skills.slice(0, 3).map((skill) => (
        <h6
          key={skill}
          style={{
            color: isHovered ? section.sectionColor : section.languageColor,
            fontWeight:"600",
            fontSize: isMobile ? "50%" : "60%",
            textAlign: "center",
          }}
        >
          {skill}
        </h6>
      ))}
    </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minWidth: "300px",
            maxWidth: "500px",
            width: "min-content",
            fontWeight: "600",
            textAlign: "center",
            backgroundColor: isHovered ? sectionData?.languageColor : "",
            padding: "1em",
            border: "4px solid",
            borderRadius:"4px",
            color: isHovered ? section.sectionColor : section.languageColor,
            opacity: isHovered ? 0.5 : 1,
            transition: "opacity 0.3s ease",
          }}
        >
          <h4 style={{ paddingBottom: "1rem" }}>{t("home.content")}</h4>
          <HashLink smooth to="#about">
            <h1
              style={{
                textTransform: "lowercase",
                letterSpacing: "-2px",
              }}
            >
              {" "}
              {t("home.title")}
            </h1>
          </HashLink>
          <div>
            <h4
              style={{
                textAlign: "center",
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
            </h4>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "10px",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          {skills.slice(3, 6).map((skill) => (
            <h6
              key={skill}
              style={{
                color: isHovered ? section.sectionColor : section.languageColor,
fontWeight:"600",
                fontSize: isMobile ? "50%" : "60%",
                textAlign: "center",
              }}
            >
              {skill}
            </h6>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Home;
