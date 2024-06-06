import React from "react";
import "./styles.scss";

interface SectionProps extends React.HTMLProps<HTMLElement> {
  backgroundColor?: string;
  flexDirection?: "row" | "column";
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between";
  alignItems?: "flex-start" | "center" | "flex-end";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  minHeight?: string;
  display?: string;
  padding?: string;
  id: string;
  title: string;
  sectionColor?: string;
  containerColor?: string;
  pinSpacerColor?: string;
  headerColor?: string;
  footerColor?: string;
  margin?: string;
  children: React.ReactNode;
  height?: string;
  className?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      backgroundColor,
      children,
      display,
      flexDirection,
      justifyContent,
      height,
      minHeight,
      id,
      className,
      alignItems,
      flexWrap,
      padding,
    },
    ref
  ) => {
    return (
      <section
        className={className}
        id={id}
        ref={ref}
        style={{
          backgroundColor,
          display,
          flexDirection,
          justifyContent,
          height,
          minHeight,
          alignItems,
          flexWrap,
          padding,
          width: "100vw",
        }}
      >
        {children}
      </section>
    );
  }
);

export default Section;
