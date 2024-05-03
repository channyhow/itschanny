import React, { CSSProperties, useEffect, useState } from "react";
// import { useCurrentSection } from "../../hooks/useCurrentSection";
// import { useSectionObserver } from "../../hooks/useSectionObserver";
import pagesContent from  "./../../data/pagesContent.json";

import _ from "lodash"; // Import lodash for debouncing

interface PinSpacerProps {
  style: CSSProperties;
  children: React.ReactNode;
  className: string;
  currentSection: string; // Add this line
}

const PinSpacer = ({
  className,
  style,
  children,
  currentSection,
}: PinSpacerProps) => {
  // const { currentSection } = useCurrentSection();
  const [isScrolling, setIsScrolling] = useState(false);

  // Function to find the current section data

const currentSectionData =pagesContent.sections.find(
  section => section.id === currentSection
)

  // Compute dynamic style based on currentSection and scroll state
  const dynamicStyle: CSSProperties = {
    ...style,
    backgroundColor: currentSectionData?.pinSpacerColor || 'hotpink',
    // display: currentSection === 'home' ? 'none' : 'flex',
    zIndex: "300",
    display: "flex",
    opacity: isScrolling ? 0 : 0.8, // Change opacity based on scroll state
    transition: "opacity 0.5s ease", // Smooth transition for opacity
  };

  useEffect(() => {
    // Debounce function to set scrolling to false after a delay
    const debouncedSetScrolling = _.debounce(() => {
      setIsScrolling(false);
    }, 200); // 200 milliseconds

    const handleScroll = () => {
      setIsScrolling(true);
      debouncedSetScrolling();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      debouncedSetScrolling.cancel(); // Cancel the debounce on unmount to avoid memory leaks
    };
  }, [currentSection]);

  // If current section is 'home', do not render the PinSpacer
  // if (currentSection === 'home') {
  //   return null;
  // }
  return (
    <div className={className} style={dynamicStyle}>
      {children}
    </div>
  );
};

export default PinSpacer;
