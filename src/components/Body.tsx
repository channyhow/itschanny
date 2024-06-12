import { useCurrentSection } from "../hooks/useCurrentSection";
import { getClassName } from "../utils/classNameGenerator";
import useAllSectionObservers from "../hooks/useAllSectionObservers";
import { useMediaQuery } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import PinSpacer from "./PinSpacer";
import SectionComponent from "./SectionComponent";
import { BodyContentProps } from "../types";
import LanguageSwitcher from "./LanguageToggle"; // Ensure correct import path

function Body({ sections }: BodyContentProps) {
  const { currentSection, updateSection } = useCurrentSection();
  const sectionRefs = useAllSectionObservers(sections, updateSection);
  const isMobile = useMediaQuery("(max-width:425px)");

  return (
    <div
      className="body"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        alignItems: isMobile ? "center" : "flex-start", // Adjust alignment for non-mobile
      }}
    >
      <PinSpacer
        className={getClassName("pinSpacer", currentSection)}
        style={{
          justifyContent: isMobile ? "center" : "flex-start",
          position: "fixed",
          width: "auto",
          top: "20px",
          left: isMobile ? "0" : "20px",
          textAlign: isMobile ? "center" : "left",
        }}
        currentSection={currentSection}
      >
        <Footer className={getClassName("footer", currentSection)} />
      </PinSpacer>
      <LanguageSwitcher />
      {sections.map((section) => (
        <SectionComponent
          key={section.id}
          section={section}
          className={getClassName("section", section.id)}
          currentSection={currentSection}
          updateSection={updateSection}
          ref={sectionRefs[section.id]}
        />
      ))}

      <PinSpacer
        className={getClassName("pinSpacer", currentSection)}
        style={{
          justifyContent: isMobile ? "center" : "flex-end",
          position: "fixed",
          width: isMobile ? "80%" : "auto",
          bottom: "20px",
          right: isMobile ? "0" : "20px",
          textAlign: isMobile ? "center" : "right",
        }}
        currentSection={currentSection}
      >
        <Header
          sections={sections}
          className={getClassName("header", currentSection)}
        />
      </PinSpacer>
    </div>
  );
}

export default Body;
