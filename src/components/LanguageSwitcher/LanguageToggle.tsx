import { useMediaQuery } from "@mui/material";
import { CSSProperties, useState } from "react";
import { useTranslation } from "react-i18next";
import "./styles.scss";

interface LanguageSwitcherProps {
  color?:string;
}

const LanguageSwitcher = ({color}: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const isMobile = useMediaQuery("(max-width:1290px)");

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
    border: "none",
    margin: "0",
    padding: "0",
    color: "black",
    cursor: "pointer",
    transition: "color 0.5s ease",  // Adding transition effect for hover
    ...(hoveredButton === button ? {
      backgroundColor: 'yellow',
      filter: 'drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3))',
      fontWeight: 600,
      opacity: 1
    } : {})
  });

  const textStyle: CSSProperties = {
   backgroundColor: color,
  letterSpacing: "2px",
    padding: "0.75rem 1.5rem",
    color: "black",
    border: "1px solid black",
    fontWeight: '600',
  };

  return (
    <div style={{ zIndex: "1000", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
       {!isMobile ? (
        <div style={{ display: 'flex', width: '10rem', justifyContent: 'space-between' }}>
          {['en', 'fr'].map(lang => (
            <div
              key={lang}
              onClick={() => changeLanguage(lang)}
              onMouseEnter={() => handleMouseEnter(lang)}
              onMouseLeave={handleMouseLeave}
              style={getButtonStyle(lang)}
              className="header-home"
            >
              <h6 style={textStyle}>
                {lang.toUpperCase()}
              </h6>
            </div>
          ))}
          </div>
      ) : (
        <div>
          <div
            onClick={() => changeLanguage(i18n.language === "en" ? "fr" : "en")}
            style={getButtonStyle(i18n.language)}
            onMouseEnter={() => handleMouseEnter(i18n.language)}
            onMouseLeave={handleMouseLeave}
            className="header-home"
          >
            <h6 style={textStyle}>
              {i18n.language === "en" ? "fra" : "eng"}
            </h6>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
