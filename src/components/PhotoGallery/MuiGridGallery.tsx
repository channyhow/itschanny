import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { PhotoGalleryProps } from "../../types";

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList({ slides }: PhotoGalleryProps) {
  // Initialize hover states array
  const [hoverStates, setHoverStates] = useState(
    new Array(slides.length).fill(false)
  );

  const handleMouseEnter = (index: number) => {
    const updatedStates = [...hoverStates];
    updatedStates[index] = true;
    setHoverStates(updatedStates);
  };

  const handleMouseLeave = (index: number) => {
    const updatedStates = [...hoverStates];
    updatedStates[index] = false;
    setHoverStates(updatedStates);
  };

  const itemData = slides.flatMap((slide) =>
    slide.images.map((img) => ({
      img: img.src,
      title: img.title,
      cols: img.cols || 1,
      rows: img.rows || 1,
      objectFit: img.objectFit || "cover",
      objectPosition :img.objectPosition || "center",

      backgroundColor: img.backgroundColor || "rgba(255,255,255, 0.5)",
   width: img.width,
   height:img.height
    }))
  );

  return (
    <ImageList
      // sx={{ width: "auto", height: "auto" }}
      variant="quilted"
      cols={3}
      rowHeight={180}
      gap={8}
    >
      {itemData.map((item, index) => (
        <div 
        // style={{ width: `${100 / item.cols}%`, backgroundColor: item.backgroundColor }}
       onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            key={index}
        >
          <ImageListItem
            cols={item.cols}
            rows={item.rows}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: item.backgroundColor,
              border: "3px solid #E2FF00",
            }}
        
          >
            <img
              {...srcset(item.img, 180, item.rows, item.cols)}
              alt={item.title}
              style={{
                objectPosition:item.objectPosition,
                objectFit: item.objectFit,
                width:item.width,
                height: item.height,
              }}
            />
          </ImageListItem>
          {/* {hoverStates[index] && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "#fff",
                fontSize: "1.2em",
                padding: "10px",
                boxSizing: "border-box",
              }}
            >
              <p>{item.title}</p>
            </div>
          )} */}
        </div>
      ))}
    </ImageList>
  );
}
