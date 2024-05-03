import SectionComponent from "./SectionComponent"; // Adjust the import path as needed
import { BodyContentProps } from "../types";
import Footer from "./Footer";
import Header from "./Header";
import PinSpacer from "./PinSpacer";
import { useCurrentSection } from "../hooks/useCurrentSection";
import { getClassName } from "../utils/classNameGenerator";
// import FloatingScroll from "./FloatingScroll/FloatingScroll";
import useAllSectionObservers from "../hooks/useAllSectionObservers";

function Body({ sections }: BodyContentProps) {
  const { currentSection, updateSection } = useCurrentSection();
  const sectionRefs = useAllSectionObservers(sections, updateSection);

  // const enhancedSections = sections.map(section => ({
  //   ...section,  // Spread existing properties
  //   current: sectionRefs[section.id]  // Assign the ref object
  // }));

  return (
    <div
      className="body"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <PinSpacer
        className={getClassName("pinSpacer", currentSection)}
        style={{
          justifyContent: "flex-start",
          position: "fixed",
          width: "auto",
          top: "20px",
          left:"20px"
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
      {/* <FloatingScroll sections={enhancedSections}      
      /> */}
      <PinSpacer
        className={getClassName("pinSpacer", currentSection)}
        style={{
          justifyContent: "flex-end",
          position: "fixed",
          width: "auto",
          bottom: "20px",
          right:"20px"
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
