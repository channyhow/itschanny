import SectionComponent from "./SectionComponent"; // Adjust the import path as needed
import { BodyContentProps } from "../types";
import Footer from "./Footer";
import Header from "./Header";
import PinSpacer from "./PinSpacer";
import { useCurrentSection } from "../hooks/useCurrentSection";
import { getClassName } from "../utils/classNameGenerator";
import useAllSectionObservers from "../hooks/useAllSectionObservers";
import { useMediaQuery } from "@mui/material";

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
        alignItems: isMobile ? "center":""
      }}
    >
      <PinSpacer
        className={getClassName("pinSpacer", currentSection)}
        style={{
          justifyContent: isMobile ? "center" : "flex-start",
          position: "fixed",
          width:  isMobile ? "80%": "auto", // Ensure width is 100% for mobile
          top: "20px",
          left: isMobile ? "" : "20px", // Center horizontally for mobile
          textAlign: isMobile ? "center" : "left", // Ensure text is centered for mobile
        }}
        currentSection={currentSection}
      >
        <Footer className={getClassName("footer", currentSection)} />
      </PinSpacer>

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
          justifyContent: isMobile ? "center" : "flex-end", // Center content on mobile
          position: "fixed",
          width:  isMobile ? "80%": "auto", // Ensure width is 100% for mobile
          bottom: "20px",
          right: isMobile ? "" : "20px", // Center horizontally for mobile
          textAlign: isMobile ? "center" : "right", // Ensure text is centered for mobile
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
