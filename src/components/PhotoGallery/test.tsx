import React, { useState } from "react";
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

export default function ImageTest({ slides }: PhotoGalleryProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  // const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    // if (leaveTimeout) {
    //   clearTimeout(leaveTimeout); // Clear timeout if the user re-enters before the timeout completes
    //   setLeaveTimeout(null);
    // }
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    // Set a timeout to delay removing the overlay
    // const timeout = setTimeout(() => {
    setHoveredItem(null);
    // }, 1000); // Delay in ms (500ms here)
    // setLeaveTimeout(timeout);
  };

  const itemData = slides
    .flatMap((slide) =>
      slide.images.map((img) => ({
        img: img.src,
        title: img.title,
        cols: img.cols || 1,
        rows: img.rows || 1,
        objectFit: img.objectFit || "cover",
        objectPosition: img.objectPosition || "center",
        backgroundColor: img.backgroundColor || "rgba(255,255,255, 0.5)",
        width: img.width,
        height: img.height,
      }))
    )
    .filter((item) => item.title.includes("Desktop"));

  return (
    <ImageList
      variant="quilted"
      cols={2}
      rowHeight={180}
      gap={16}
      sx={{
        height: "calc(100% + 60px)",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      {itemData.map((item, index) => (
        <div key={index} style={{ position: "relative" }}>
          <ImageListItem
            cols={item.cols}
            rows={item.rows}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              {...srcset(item.img, 180, item.rows, item.cols)}
              alt={item.title}
              style={{
                position:'relative',
                objectFit: item.objectFit,
                width: item.width,
                height: item.height,
                border:
                  hoveredItem === index
                    ? "3px solid #E2FF00"
                    : "3px solid transparent",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />

            <div
              style={{
                position: "relative",
                // bottom: 0,
                // display: "flex",
                // alignItems: "center",
                // justifyContent: "space-between",
                // backgroundColor: "rgba(0, 0, 0, 0.5)",
                // width: "100%",
                // color: "#fff",
                // height: "100%",
                // padding: "10px",
                // transition: "opacity 0.5s ease",
                // opacity: 1,
                height:"3em"
              }}
            >
              {" "}
              {hoveredItem === index ? (<h6>{item.title}</h6>): ""}
            </div>
          </ImageListItem>
        </div>
      ))}
    </ImageList>
  );
}
