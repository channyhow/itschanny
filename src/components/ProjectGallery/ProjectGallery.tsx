import { useState } from "react";
import { useMediaQuery, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ProjectGalleryProps } from "../../types";
import { NavLink } from "react-router-dom";
import ImageModal from "../Modal";
import "./styles.scss";
import { projectContent } from "../../data/ProjectContent";

export default function ProjectGallery({ section }: ProjectGalleryProps) {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:768px)");
  const { t } = useTranslation();

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

  return (
    <article
      style={{
        display: "flex",
        flexWrap: isMobile ? "wrap" : "nowrap",
        justifyContent: isMobile ? "center" : "space-between",
        width: "100%", // full width of the viewport
        // minWidth:"300px",
        // maxWidth: "1200px",
      }}
    >
      {projectContent.map((item, index) => (
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
              padding: "1rem",
              border:
                hoveredImage === index
                  ? `1px solid ${section?.color}`
                  : "1px solid transparent",
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
              }}
            >
              <img
                src={item.images[0].src}
                alt={t(`projects.items.${index}.images.0.title`)}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
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
                    color: section?.color,
                    textTransform: "uppercase",
                    fontWeight: "500",
                  }}
                >
                  {t(`projects.items.${index}.name`)}
                </h4>
                <h6 style={{ color: section?.color }}>
                  {t(`projects.items.${index}.title`)}
                </h6>
                <h6 style={{ color: section?.color }}>
                  {t(`projects.items.${index}.date`)}
                </h6>
                <div style={{ display: "flex" }}>
                  {item.techno.map((tech, techIndex) => (
                    <h6
                      key={techIndex}
                      style={{ color: section?.color, marginRight: "0.5rem" }}
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
                    boxShadow: hoveredButton
                      ? "2px 2px 5px rgba(0, 0, 0, 0.1)"
                      : "none",
                  }}
                >
                  <h6>{t(`${section?.id}.visit`)}</h6>
                </NavLink>
              </div>
            </div>
          </figure>
        </div>
      ))}
      {
        <ImageModal
          open={open}
          handleClose={handleClose}
          data={projectContent}
          currentProject={currentItem}
          setCurrentProject={setCurrentItem}
          section={section}
        />
      }
    </article>
  );
}
