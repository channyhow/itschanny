import React from "react";
import { SectionProps } from "../types";

interface ContentComponentProps {
    section: SectionProps;
    sectionId: string;
    currentSection: string;
  }
  
  export const ContentComponent: React.FC<ContentComponentProps> = ({ section, sectionId, currentSection }) => {
    return (
      <React.Fragment>
        {/* Example usage */}
        <h2>Section ID: {sectionId}</h2>
        {/* other content */}
      </React.Fragment>
    );
  };
  