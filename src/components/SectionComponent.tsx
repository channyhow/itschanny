import React, { CSSProperties, useCallback, useEffect, useRef } from "react";
import Section from "./Section";
import { SectionComponentProps } from "../types";
import { PageContent } from "../types/pageComponents";
import useSectionObserver from "../hooks/useSectionObserver";

const SectionComponent = React.forwardRef<HTMLElement, SectionComponentProps>(
  ({ section, updateSection }, ref) => {
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
      console.log(`Current section updated to: ${section.id}`);
    }, [section]);

    if (!ContentComponent) {
      console.error(`No component found for section ID: ${section.id}`);
      return <div>No content available for this section.</div>;
    }

    const sectionStyle: CSSProperties = {
      width: "100vw", // full width of the viewport
      justifyContent: "center",
      minHeight: "90vh",
      padding:"40px 10px",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: section.color
    };
    return (
      <Section
        ref={ref || sectionRef}
        backgroundColor={section.sectionColor}
        id={section.id}
        title={section.title}
        padding={section.padding}
        color={section.color}
        style={sectionStyle}
        className={""} content={[]}      >
        <ContentComponent section={section} sectionId={section.id} />
      </Section>
    );
  }
);

export default SectionComponent;
