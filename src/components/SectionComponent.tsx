import React, { useCallback, useEffect, useRef } from "react";
import Section from "./Section";
import { SectionComponentProps } from "../types";
import { PageContent } from "../types/pageComponents";
import useSectionObserver from "../hooks/useSectionObserver";

const SectionComponent = React.forwardRef<HTMLElement, SectionComponentProps>(
  ({ section, className, currentSection, updateSection }, ref) => {
    const sectionRef = useRef<HTMLElement>(null);

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
        ref={ref || sectionRef}
        className={className}
        backgroundColor={section.sectionColor}
        id={section.id}
        title={section.title}
        height={section.height}
        minHeight="600px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems={section.alignItems}
      >
        <ContentComponent
          section={section}
          sectionId={section.id}
          currentSection={currentSection}
        />
      </Section>
    );
  }
);

export default SectionComponent;
