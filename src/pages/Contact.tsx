// If considering removing sectionData, your component might look simplified like this:
import ContactForm from "../components/ContactForm";
import { useTranslation } from "react-i18next";
import Container from "../components/Container";
import { useMediaQuery } from "@mui/material";
import { CommonPageProps } from "../types";
// import useCurrentSectionData from "../hooks/useCurrentSectionData";

const Contact = ({ section }: CommonPageProps) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:768px)");

  const contentArray = t(`${section.id}.content`, {
    returnObjects: true,
  }) as string[];

  const content = Array.isArray(contentArray) ? contentArray : [];

  return (
    <Container>
      <h1
        style={{
          zIndex: "50",
          textAlign: "left",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        {t(`${section.id}.title`)}{" "}
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: "100%",
          justifyContent: isMobile ? "center" : "space-between",
        }}
      >
        <div style={{ maxWidth: "400px", width: isMobile? "100%": "50%", 
                    marginBottom: isMobile?"20px":"0"

         }}>
          {content.map((item, index) => (
            <p key={index}> {item}</p>
          ))}
        </div>
        <ContactForm section={section} />
      </div>
    </Container>
  );
};

export default Contact;
