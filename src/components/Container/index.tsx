import { ContainerProps } from "../../types";
import "./styles.scss"; // Assuming you have a separate stylesheet for container


const Container: React.FC<ContainerProps> = ({
  height = "auto",
  width,
  maxWidth,
  minWidth,
  margin,
  padding, // Ensured padding is properly passed
  textAlign = "left", // Provided a default value
  color,
  backgroundColor,
  children,
  justifyContent,
  display,
  flexDirection,
  flexWrap,
  className,
  marginBottom,
}) => {
  const containerStyle: React.CSSProperties = {
    // Ensured correct typing for style object
    height,
    width,
    maxWidth, // Applied width
    padding, // Applied padding
    margin,
    textAlign,
    color,
    backgroundColor,
    display, // Assuming you want a flex container; adjust as necessary
    flexDirection, // Default flex direction, adjust as necessary
    // alignItems: textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start',
    // Adjusted alignment based on textAlign for more intuitive styling
    justifyContent,
    flexWrap,
    marginBottom,
    minWidth,
  };

  return (
    <div className={className} style={containerStyle}>
      {children}
    </div>
  );
};

export default Container;
