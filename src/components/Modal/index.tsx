import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ImageModalProps } from "../../types";
import { useMediaQuery } from "@mui/material";
import { SliderNav } from "../PrevNextButtons";
import { projectContent } from "../../data/ProjectContent";
import { useTranslation } from "react-i18next";



const ImageModal: React.FC<ImageModalProps> = ({
  open,
  handleClose,
  itemData,
  currentProject,
  setCurrentProject,
}) => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const { t } = useTranslation();
  const [hoveredButton, setHoveredButton] = useState(false);

  const handleButtonMouseEnter = () => {
    setHoveredButton(true);
  };

  const handleButtonMouseLeave = () => {
    setHoveredButton(false);
  };

  const getBackground = (palette: string[]) => {
    return `radial-gradient(circle at 80% 120%, ${palette[1]} 0%, ${palette[2]} 20%, ${palette[2]} 40%, ${palette[0]} 80%),
            radial-gradient(circle at 70% 80%, ${palette[2]} 0%, ${palette[2]} 20%, ${palette[2]} 40%, ${palette[2]} 80%),
            radial-gradient(circle at 50% 100%, ${palette[2]} 0%, ${palette[2]} 20%, ${palette[2]} 40%, ${palette[1]} 80%)`;
  };

  const style = {
    position: "absolute" as const,
    width: "95%",
    maxWidth: "1400px",
    maxHeight: "95vh",
    overflowY: "auto" as const,
    background: getBackground(itemData.palette),
    padding: "5%",
    border: "2px solid rgb(214 243 55)",
    margin: "0 1rem",
    boxShadow: 24,
    transition: "opacity 0.5s ease, transform 0.5s ease",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    msOverflowStyle: "none",
    scrollbarWidth: "none",
  };

  const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  };

  const imageStyle: React.CSSProperties = {
    width: "100%",
    height: "auto",
    objectFit: "contain",
    border: "1px solid rgb(102, 97, 83)",
  };

  const figcaptionStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "flex-end",
    textAlign: isMobile ? "center" : "right",
    padding: "0.5rem",
    width: "100%",
    color: "rgb(102, 97, 83)",
  };

  const headerStyle: React.CSSProperties = {
    margin: isMobile ? "40px 0 0" : "40px auto 0",
    width: "50%",
  };

  const desktopStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: "1",
    width: "100%",
    maxWidth: "1400px",
    margin: 0,
  };

  const logoStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1",
    width: isMobile ? "100%" : "50%",
    maxWidth: "1400px",
  };

  const mobileStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: "1",
    width: isMobile ? "100%" : "50%",
    maxWidth: "1400px",
    margin: 0,
  };

  const gridStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: isMobile ? "column" : "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
    margin: "2rem 0",
    width: "100%",
    maxWidth: "1400px",
  };

  const infoSectionStyle: React.CSSProperties = {
    margin: "2rem 0 6em",
    display: "grid",
    justifyItems: isMobile ? "flex-start" : "center",
    gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr 1fr",
    gap: "2rem",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        ...modalStyle,
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Box sx={style} className="modal-content">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <h6>{itemData.name}</h6>

          <SliderNav
            projects={projectContent}
            currentProject={currentProject}
            setCurrentProject={setCurrentProject}
          />
        </div>

        <figure style={desktopStyle}>
          <img
            src={itemData.images[0].src}
            alt={t(itemData.images[0].title)}
            style={imageStyle}
          />
          <figcaption style={figcaptionStyle}>
            <h6>
              {t(itemData.images[0].title)} - {t(itemData.images[0].description)}
            </h6>
            <h6>1/{itemData.images.length}</h6>
          </figcaption>
        </figure>
        <header style={headerStyle}>
          <h5>{t('projects.published')} {t(itemData.date)}</h5>
          <h1
            style={{
              fontSize: isMobile ? "4rem" : "4.8rem",
              whiteSpace: "nowrap",
            }}
          >
            {t(itemData.name)}
          </h1>
          <a
            href={itemData.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
          >
            <div
              style={{
                backgroundColor: hoveredButton
                  ? "rgba(255,255,255,0.85)"
                  : "rgba(255,255,255,0.5)",
                padding: "0.75rem 1.5rem",
                borderRadius: "4px",
                width: "fit-content",
                transition: "all 0.5s ease",
                margin: "4.5rem 0",
                boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h5>{t('projects.visit')}</h5>
            </div>
          </a>
        </header>
        <div style={infoSectionStyle} className="info-section">
          <div style={{ marginBottom: "10px", order: isMobile ? "3" : "" }}>
            <h5 style={{ marginBottom: "5px", fontWeight: "500" }}>{t('projects.techno')}</h5>
            <ul>
              {itemData.techno.map((techno:string, index:number) => (
                <li key={index}>
                  <h4>{techno}</h4>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ marginBottom: "10px", order: isMobile ? "1" : "" }}>
            <h5 style={{ marginBottom: "5px", fontWeight: "500" }}>
              {t(itemData.title)}
            </h5>
            <p style={{ marginBottom: "5px", color: "#666153" }}>
              {t(itemData.description)}
            </p>
          </div>
          <div style={{ marginBottom: "10px", order: isMobile ? "2" : "" }}>
            <h5 style={{ marginBottom: "5px", fontWeight: "500" }}>{t('projects.style')}</h5>
            <ul>
              {itemData.type.map((type:string, index:number) => (
                <li key={index}>
                  <h4>{type}</h4>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={gridStyle}>
          <figure style={logoStyle}>
            <img
              src={itemData.images[1].src}
              alt={t(itemData.images[1].title)}
              style={imageStyle}
            />
            <figcaption style={figcaptionStyle}>
              <h6>
                {t(itemData.images[1].title)} - {t(itemData.images[1].description)}
              </h6>
              <h6>2/{itemData.images.length}</h6>
            </figcaption>
          </figure>
          <figure style={mobileStyle}>
            <img
              src={itemData.images[2].src}
              alt={t(itemData.images[2].title)}
              style={imageStyle}
            />
            <figcaption style={figcaptionStyle}>
              <h6>
                {t(itemData.images[2].title)} - {t(itemData.images[2].description)}
              </h6>
              <h6>3/{itemData.images.length}</h6>
            </figcaption>
          </figure>
        </div>
      </Box>
    </Modal>
  );
};

export default ImageModal;
