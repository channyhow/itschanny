import React from "react";
import "./styles.scss";
import { SectionProps } from "../../types";

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    { backgroundColor, children, padding, margin, id, className, style },
    ref
  ) => {
    return (
      <section
        id={id}
        ref={ref}
        className={className}
        style={{
          width: "100%",
          padding: padding,
          margin: margin,
          backgroundColor: backgroundColor,
          ...style, // Spread any additional styles
        }}
      >
        {children}
      </section>
    );
  }
);

export default Section;
