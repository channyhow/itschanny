import React, { useState } from "react";
import { PhotoGalleryProps } from "../../types";
import { NavLink } from "react-router-dom";


export default function ImageTest2({ slides }: PhotoGalleryProps) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [leaveTimeout, setLeaveTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (index: number) => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout); // Clear timeout if the user re-enters before the timeout completes
      setLeaveTimeout(null);
    }
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    // Set a timeout to delay removing the overlay
    const timeout = setTimeout(() => {
    setHoveredItem(null);
    }, 1000); // Delay in ms (500ms here)
    setLeaveTimeout(timeout);
  };

  const itemData = slides
    .flatMap((slide) =>
      slide.images.map((image) => ({
        img: image.src, // Assuming 'src' holds the image source URL.
        title: image.title,
        cols: image.cols || 1,
        rows: image.rows || 1,
        objectFit: image.objectFit || "cover",
        objectPosition: image.objectPosition || "center",
        backgroundColor: image.backgroundColor || "rgba(255,255,255, 0.5)",
        width: image.width,
        height: image.height,
        description: slide.description,
        techno: slide.techno,
        url: slide.url,
        date: slide.date
      }))
    )
    .filter((item) => item.title.includes("Desktop"));

  return (
    <article
      style={{
        // height: "calc(100% + 60px)",
        display: "flex",
        // alignContent: "center",
        // justifyContent: "center",
        padding: "1.6rem",
        position: "relative",
        transition: "background-color 0.2s ease-out",
        zIndex: "901",
      }}
    >
      {itemData.map((item, index) => (
        <div key={index} style={{ position: "relative" }}>
          <figure
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                hoveredItem === index ? "#F2EBE3" : "transparent",
              transition: "background-color 0.2s ease-out",
              padding: "1em",
              borderRadius: "20px",
              margin: "10px",
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                position: "relative",
                objectFit: item.objectFit,
                width: item.width,
                height: item.height,
                aspectRatio: "auto 300/187",
                border:
                  hoveredItem === index
                    ? "1px solid #E2FF00"
                    : "1px solid #A8A8A8",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />

            <div
              style={{
                position: "relative",
                // bottom: 0,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                // backgroundColor: "rgba(0, 0, 0, 0.5)",
                // width: "100%",
                // color: "#fff",
                // height: "100%",
                padding: "10px",
                // transition: "opacity 0.5s ease",
                // opacity: 1,
                height: "3.5em",
                width: "100%",
                
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <h6>{item.description}</h6>
                <h6 style={{color:'#A8A8A8'}}>{item.date}</h6>
                <h6 style={{color:'#A8A8A8'}} >{item.techno}</h6> 
              </div>
                              {hoveredItem === index ? 
<NavLink to={item.url}><h6 style={{backgroundColor:'rgba(255,255,255,0.2)', padding:'0.75rem 1.5rem', borderRadius:'4px'}}>Visit</h6></NavLink>: ""}
            </div> 
          </figure>
        </div>
      ))}
    </article>
  );
}
