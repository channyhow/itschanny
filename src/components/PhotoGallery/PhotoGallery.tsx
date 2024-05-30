import { useState } from "react";
import { PhotoGalleryProps } from "../../types";
import { NavLink } from "react-router-dom";
// Modal
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import React from "react";
import { NextButton } from "../Next/NextButton";
import './styles.scss';
import { useMediaQuery } from "@mui/material";

export default function PhotoGallery({ slides }: PhotoGalleryProps) {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery("(max-width:425px)");

  const handleMouseEnter = (index: number) => {
    setHoveredImage(index); // Set index of hovered image
  };

  const handleMouseLeave = () => {
    setHoveredImage(null); // Reset when mouse leaves
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
    setCurrentImageIndex(0);
  };

  const handleClose = () => setOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => prev + 1);
    console.log(currentImageIndex)
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => prev - 1);
  };

  // Separate image data and associated data
  const itemData = slides.map((slide) => ({
    description: slide.description,
    techno: slide.techno,
    url: slide.url,
    date: slide.date,
    type: slide.type,
    name: slide.name,
    images: slide.images.map((image) => ({
      img: image.src, // Assuming 'src' holds the image source URL.
      title: image.title,
      cols: image.cols || 1,
      rows: image.rows || 1,
      objectFit: image.objectFit || "cover",
      objectPosition: image.objectPosition || "center",
      backgroundColor: image.backgroundColor || "rgba(255,255,255, 0.5)",
      width: image.width,
      height: image.height,
    })),
  }));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%", // Fixed width that will take 80% of the screen
    minWidth: isMobile? "":"800px", // Minimum width for responsiveness
    maxWidth: isMobile? "420px":"1000px", // Maximum width for responsiveness
    maxHeight: "100%", // Limit the height of the modal to 90% of the viewport height
    overflowY: "auto", // Enable vertical scrolling
    backgroundColor: "#d6d0c8",
    padding: isMobile? "15px":"40px",
    boxShadow: 24,
    borderRadius: '4px',
    transition: "opacity 0.5s ease, transform 0.5s ease",
    // Hide scrollbar
    '&::-webkit-scrollbar': {
      display: 'none', // Hide scrollbar for Chrome, Safari, and Opera
    },
    msOverflowStyle: 'none', // Hide scrollbar for IE and Edge
    scrollbarWidth: 'none', // Hide scrollbar for Firefox
  };  

  const totalImages = itemData[currentItem].images.length;

  return (
    <article
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "40px",
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
              transition: "all 0.5s ease", // Ensures smooth transition for border color
              padding: "2em",
              border: hoveredImage === index ? '1px solid' : '1px solid transparent'
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
                marginBottom: "20px",
              }}
            >
              <img
                src={item.images[0].img}
                alt={item.images[0].title}
                style={{
                  objectFit: item.images[0].objectFit,
                  width: item.images[0].width,
                  height: item.images[0].height,
                  maxWidth: "400px",
                  transition: "all 0.5s ease",
                  border:
                    hoveredImage === index
                      ? "1px solid #ceca4d"
                      : "1px solid #A8A8A8",
                }}
              />
            </Button>
            {/* Modal beginning */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style} className="modal-content">
                {/* images slider beginning */}
                <figure
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    boxSizing: "border-box",
                    // height: "auto",
                    // width: "auto",
                    justifyContent: "flex-end",
                    alignItems: "center",
                  }}
                >
                  {itemData[currentItem].images.map((image, index) => (
                    <img
                      key={index}
                      src={image.img}
                      alt={image.title}
                      className={currentImageIndex === index ? 'image-visible' : 'image-transition'}
                      style={{
                        display: currentImageIndex === index ? "block" : "none",
                        objectFit: image.objectFit,
                        width: "100%",
                        height: isMobile? "250px":"600px",
                        maxWidth: "1000px",
                        maxHeight: "600px",
                        minHeight: "auto",
                        margin: "0 auto 20px",
                        border: "1px solid #A8A8A8",
                        backgroundColor: "rgba(0,0,0, 0.1)",
                        transition: "opacity 0.9s ease, transform 0.5s ease"
                      }}
                    />
                  ))}
                  <NextButton
                    onPrev={prevImage}
                    onNext={nextImage}
                    disablePrev={currentImageIndex === 0}
                    disableNext={currentImageIndex === totalImages - 1}
                  />
                </figure>
                {/* images slider ending */}
                {/* Text Content */}
                <header style={{ margin: "40px auto", width: isMobile? "90%":"80%" }}>
                  <h6>Published in {itemData[currentItem].date}</h6>
                  <h1
                    style={{
                      marginBottom: "10px",
                      fontSize:isMobile? "4rem":"6rem"
                    }}
                  >
                    {itemData[currentItem].name}
                  </h1>
                  <NavLink
                    to={itemData[currentItem].url}
                    onMouseEnter={handleButtonMouseEnter}
                    onMouseLeave={handleButtonMouseLeave}
                  >
                    <h6
                      style={{
                        backgroundColor: hoveredButton
                          ? "rgba(255,255,255,0.85)"
                          : "rgba(255,255,255,0.5)",
                        padding: "0.75rem 1.5rem",
                        borderRadius: "4px",
                        width: "fit-content",
                        transition: "all 0.5s ease",
                      }}
                    >
                      Visit
                    </h6>
                  </NavLink>
                </header>
                <div
                  style={{ margin: "40px auto", width: isMobile? "90%":"80%" }}
                  className="info-section"
                >
                  <div style={{ marginBottom: "10px" }}>
                    <h6 style={{ marginBottom: "5px", color: "#666153" }}>
                      {itemData[currentItem].description}
                    </h6>
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <p style={{ marginBottom: "5px", fontWeight: "500" }}>
                      Techno
                    </p>
                    <ul>
                      {itemData[currentItem].techno.map((techno, index) => (
                        <li key={index}>
                          <h6>{techno}</h6>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ marginBottom: "10px" }}>
                    <p style={{ marginBottom: "5px", fontWeight: "500" }}>
                      Style
                    </p>
                    <ul>
                      {itemData[currentItem].type.map((type, index) => (
                        <li key={index}>
                          <h6>{type}</h6>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Box>
            </Modal>
            {/* Modal end */}
          </figure>
        </div>
      ))}
    </article>
  );
}
