import { useCurrentSection } from "../hooks/useCurrentSection";
import { getClassName } from "../utils/classNameGenerator";
import useAllSectionObservers from "../hooks/useAllSectionObservers";
import { useMediaQuery } from "@mui/material";
import Footer from "./Footer";
import Header from "./Header";
import PinSpacer from "./PinSpacer";
import SectionComponent from "./SectionComponent";
import { BodyContentProps } from "../types";
import LanguageSwitcher from "./../components/LanguageSwitcher/LanguageToggle";

function Body({ sections }: BodyContentProps) {
  const { currentSection, updateSection } = useCurrentSection();
  const sectionRefs = useAllSectionObservers(sections, updateSection);
  const isMobile = useMediaQuery("(max-width:425px)");

  const currentSectionData = sections.find(
    (section) => section.id === currentSection
  );

  return (
    <div
      className="body"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        alignItems: "center",
      }}
    >
      <PinSpacer
        className={getClassName("pinSpacer", currentSection)}
        style={{
          position: "fixed",
          width: isMobile ? "90%" : "95%",  // Adjusted for desktop to center
          top: isMobile ? "10px" : "20px",
          left: isMobile ? "" : "50%",      // Center horizontally for desktop
          transform: isMobile ? "" : "translateX(-50%)", // Ensure it's centered
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <Footer
          style={{
            width: isMobile ? "100%" : "auto",
            display: "flex",
            justifyContent: "space-evenly",
            border: "1px solid",
            backgroundColor: currentSectionData?.headerColor || "hotpink",
          }}
        />
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
          justifyContent: "space-between",
          position: "fixed",
          width: isMobile ? "90%" : "95%",  // Consistent with the top PinSpacer
          bottom: isMobile ? "10px" : "20px",
          // left: isMobile ? "" : "50%",      // Center horizontally for desktop
          // transform: isMobile ? "" : "translateX(-50%)", // Ensure it's centered
        }}
      >
        <LanguageSwitcher color={currentSectionData?.languageColor} />
        <Header
          sections={sections}
          currentSection={currentSection}
          style={{
            width: isMobile ? "80%" : "auto",
          }}
          background={currentSectionData?.headerColor || "hotpink"}
        />
      </PinSpacer>
    </div>
  );
}

export default Body;
