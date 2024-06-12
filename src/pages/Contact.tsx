import { CSSProperties } from "react";
import ContactForm from "../components/ContactForm";
import { CommonPageProps } from "../types";
import useCurrentSectionData from "../hooks/useCurrentSectionData";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

const Contact = ({ section }: CommonPageProps) => {
  const isMobile = useMediaQuery("(max-width:425px)");
  const sectionData = useCurrentSectionData(section.id);
  const { t } = useTranslation();

  const containerStyle: CSSProperties = {
    display: isMobile ? "" : "flex",
    margin: sectionData?.margin,
    backgroundColor: sectionData?.containerColor,
    color: sectionData?.titleColor,
    width: "100%", // full width of the viewport
    maxWidth: "1200px",
    justifyContent: "center",
    padding: "10px",
  };

  return (
    <div style={containerStyle}>
      <h1
        style={{
          transform: isMobile ? "" : "rotate(270deg)",
          transformOrigin: isMobile ? "" : "center center",
        }}
      >
        {t(`${section.id}.title`)}
      </h1>
      <ContactForm section={section} currentSection={section.id} sectionId={section.id} />
    </div>
  );
};

export default Contact;
