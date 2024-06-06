import { useState } from "react";
import { ProjectGalleryProps } from "../../types";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import React from "react";
import ImageModal from "./../Modal";
import { useMediaQuery } from "@mui/material";
import "./styles.scss";

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width:425px)");

  const handleMouseEnter = (index: number) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const handleButtonMouseEnter = () => {
    setHoveredButton(true);
  };

  const handleButtonMouseLeave = () => {
    setHoveredButton(false);
  };

  const handleOpen = (index: number) => {
    setOpen(true);
    setCurrentItem(index);
  };

  const handleClose = () => setOpen(false);

  const itemData = projects.map((item) => ({
    title: item.title,
    description: item.description,
    techno: item.techno,
    url: item.url,
    date: item.date,
    type: item.type,
    name: item.name,
    body: item.body, // Include body property
    palette: item.palette, // Include palette property
    fonts: item.fonts, // Include fonts property
    images: item.images.map((image) => ({
      src: image.src,
      title: image.title,
      description: image.description,
      cols: image.cols || 1,
      rows: image.rows || 1,
      objectFit: image.objectFit || "cover",
      objectPosition: image.objectPosition || "center",
      backgroundColor: image.backgroundColor || "rgba(255,255,255, 0.5)",
      width: image.width,
      height: image.height,
    })),
  }));

  return (
    <article
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      {itemData.map((item, index) => (
        <div key={index} style={{ position: "relative" }}>
          <figure
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                hoveredImage === index
                  ? "rgba(255,255,255,0.1)"
                  : "transparent",
              transition: "all 0.5s ease",
              padding:  "1rem",
              border:
                hoveredImage === index ? "1px solid" : "1px solid transparent",
              margin: isMobile ? "1rem 0" : "2rem 0",
            }}
          >
            <Button
              onClick={() => handleOpen(index)}
              sx={{
             
                "&:hover": {
                  backgroundColor: "transparent",
                  transition: "all 0.5s ease",   
                },
                padding: "0",
                // marginBottom: "20px",
              }}
            >
              <img
                src={item.images[0].src}
                alt={item.images[0].title}
                style={{
                  objectFit: item.images[0].objectFit,
                  width: item.images[0].width,
                  height: item.images[0].height,
                  maxWidth: "450px",
                  transition: "all 0.5s ease",
                  border:
                    hoveredImage === index
                      ? "1px solid #E2FF00"
                      : "1px solid #A8A8A8",
                }}
              />
            </Button>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <h4
                  style={{
                    color: "#a07575",
                    textTransform: "uppercase",
                    fontWeight: "500",
                  }}
                >
                  {item.name}
                </h4>
                <h6 style={{ color: "#a07575" }}>{item.title}</h6>
                <h6 style={{ color: "#a07575" }}>{item.date}</h6>
                <div style={{ display: "flex" }}>
                  {item.techno.map((tech, index) => (
                    <h6
                      key={index}
                      style={{ color: "#a07575", marginRight: "0.5rem" }}
                    >
                      {tech}
                    </h6>
                  ))}
                </div>
              </div>
              <div>
              <NavLink
                  to={item.url}
                  onMouseEnter={handleButtonMouseEnter}
                  onMouseLeave={handleButtonMouseLeave}
                  style={{
                    backgroundColor: hoveredButton
                      ? "rgba(255,255,255,0.85)"
                      : "rgba(255,255,255,0.5)",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "4px",
                    display: hoveredImage === index ? "block" : "none",
                    transition: "background-color 0.5s ease",
                    boxShadow:hoveredButton
                    ? "2px 2px 5px rgba(0, 0, 0, 0.1)"   :"none"               }}
                >
                  <h6>Visit</h6>
                </NavLink>
              </div>
            </div>
          </figure>
        </div>
      ))}
      <ImageModal
        open={open}
        handleClose={handleClose}
        itemData={itemData[currentItem]}
        hoveredButton={hoveredButton}
        handleButtonMouseEnter={handleButtonMouseEnter}
        handleButtonMouseLeave={handleButtonMouseLeave}
        currentProject={currentItem}
        setCurrentProject={setCurrentItem}
        projects={projects}
      />
    </article>
  );
}
