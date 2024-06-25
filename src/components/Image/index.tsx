import "./styles.scss"; // Assuming you have a separate stylesheet for container

interface ImageProps {
  children?: React.ReactNode;
}

const Image: React.FC<ImageProps> = ({
  children,

}) => {
  const imageStyle: React.CSSProperties = {
    height: "fit-content",
    width: "fit-content",
    margin: "1rem",
  };

  return (
    <div className="image" style={imageStyle}>
      {children}
    </div>
  );
};

export default Image;
