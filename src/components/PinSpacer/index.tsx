import { CSSProperties, useEffect, useState } from "react";
import _ from "lodash"; // Import lodash for debouncing
import { PinSpacerProps } from "../../types";


const PinSpacer = ({
  className,
  style,
  children,
}: PinSpacerProps) => {
  const [isScrolling, setIsScrolling] = useState(false);

  // Compute dynamic style based on scroll state
  const dynamicStyle: CSSProperties = {
    ...style,
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
  }, []);

  return (
    <div className={className} style={dynamicStyle}>
      {children}
    </div>
  );
};

export default PinSpacer;
