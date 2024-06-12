// src/LanguageSwitcher.js
import { useMediaQuery } from "@mui/material";
import { CSSProperties, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const isMobile = useMediaQuery("(max-width:425px)");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleMouseEnter = (button: string) => {
    setHoveredButton(button);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  const getButtonStyle = (button: string): CSSProperties => ({
    background: hoveredButton === button ? "rgb(201, 149, 193, 0.1)" : "transparent",
    border: "1px solid #C995C1",
    fontFamily: "Urbanist",
    textTransform: "uppercase",
    fontWeight: "600",
    fontSize: "1rem",
    letterSpacing: "2px",
    padding: "0.75rem 1.5rem",
    margin: "0 0.5rem",
    color: "#C995C1",
    cursor: "pointer",
  });

  return (
    <div style={{ position: "fixed", top: "2rem", right: "2rem", zIndex: "1000" }}>
      {!isMobile ? (
        <div>
          <button
            onClick={() => changeLanguage("en")}
            style={getButtonStyle("en")}
            onMouseEnter={() => handleMouseEnter("en")}
            onMouseLeave={handleMouseLeave}
          >
            Eng
          </button>
          <button
            onClick={() => changeLanguage("fr")}
            style={getButtonStyle("fr")}
            onMouseEnter={() => handleMouseEnter("fr")}
            onMouseLeave={handleMouseLeave}
          >
            Fra
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => changeLanguage(i18n.language === "en" ? "fr" : "en")}
            style={getButtonStyle(i18n.language)}
            onMouseEnter={() => handleMouseEnter(i18n.language)}
            onMouseLeave={handleMouseLeave}
          >
            {i18n.language === "en" ? "fra" : "eng"}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
