import "./styles.scss"; // Assuming you have a separate stylesheet for container

interface ImageProps {
  // height?: string; // e.g., '75vh', '500px'
  // title?: string;
  // subtitle?: string;
  // content1?: string;
  // content2?: string;
  // width: string;
  // padding?: string;
  // textAlign: "left"| "center" | "right";
  // color?: string;
  children?: React.ReactNode;
//   backgroundColor?: string;
//   justifyContent?: "flex-start" | "center" | "flex-end" | "space-between"
// key?: string;
// display?:string;
// flexDirection?:"row"|"column"
}

const Image: React.FC<ImageProps> = ({
  // height = "auto",
  // width, 
  // padding, // Ensured padding is properly passed
  // textAlign = "left", // Provided a default value
  // color,
  // backgroundColor,
  children,
  // justifyContent,
  // display,
  // flexDirection
}) => {
  const imageStyle: React.CSSProperties = { // Ensured correct typing for style object
//     height,
//     width, // Applied width
//     padding, // Applied padding
//     margin: "0 1rem",
//     textAlign,
//     color,
//     backgroundColor,
//     display, // Assuming you want a flex container; adjust as necessary
//     flexDirection, // Default flex direction, adjust as necessary
//     alignItems: textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start',
//     // Adjusted alignment based on textAlign for more intuitive styling
//  justifyContent
// border:'2px solid #E2FF00',
height:'fit-content',
width:'fit-content',
margin:"1rem"
  };

  return (
    <div className="image" style={imageStyle}>
      {children}
    </div>
  );
};

export default Image;