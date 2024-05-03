import { useCallback, useEffect, useRef } from "react";
import Section from "./Section";
// import Container from "./Container";
import { SectionComponentProps } from "../types";
import { PageContent } from "../types/pageComponents";
import useSectionObserver from "../hooks/useSectionObserver";

const SectionComponent = ({
  section,
  className,
  currentSection,
  updateSection,
}: SectionComponentProps) => {
  const sectionRef = useRef(null);

  const handleSectionVisible = useCallback(
    (visibleId: string) => {
      updateSection(visibleId);
    },
    [updateSection]
  );

  useSectionObserver(sectionRef, section.id, handleSectionVisible);

  const ContentComponent =
    PageContent[section.id.charAt(0).toUpperCase() + section.id.slice(1)];

  useEffect(() => {
    console.log(`Current section updated to: ${currentSection}`);
  }, [currentSection]);

  if (!ContentComponent) {
    console.error(`No component found for section ID: ${section.id}`);
    return <div>No content available for this section.</div>;
  }

  return (
    <Section
      ref={sectionRef}
      className={className}
      backgroundColor={section.sectionColor}
      id={section.id}
      title={section.title}
      height={section.height}
      minHeight=""
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems={section.alignItems}
      sectionRef={sectionRef}
    >
      {/* <Container
        display={section.display}
        textAlign="center"
        justifyContent={section.justifyContent}
        className={`container-${section.id}`}
        flexDirection={section.flexDirection}
        width={"auto"}
        margin={section.margin}
        height={section.height}
        // backgroundColor={section.containerColor}
        backgroundColor={""}

        padding="1em"
        // maxWidth={""}
        // marginBottom={""}
        // minWidth={""}
        alignItems={section.alignItems}
      > */}
      
        <ContentComponent
          section={section}
          sectionId={section.id}
          currentSection={currentSection}
          
        />
      {/* </Container> */}
    </Section>
  );
};

export default SectionComponent;
