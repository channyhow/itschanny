import "./styles.scss";
import { SectionProps } from "../../types";
import React from "react";

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({
    backgroundColor,
    // color,
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
  },ref) => {
    // Applying dynamic style to the grid container based on gridConfig

    return (
      <section
        className={className}
        id={id}
        ref={ref}
        style={{
          backgroundColor,
          // color,
          display,
          flexDirection,
          justifyContent,
          height,
          minHeight,
          alignItems,
          flexWrap,
          padding,
          width:"100vw",
        }}
      >
        {children}
      </section>
    );
  }
);

export default Section;
