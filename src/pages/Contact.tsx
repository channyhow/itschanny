import ContactForm from "../components/ContactForm";
import { CommonPageProps } from "../types";
import { useTranslation } from "react-i18next";
import Container from "../components/Container";
import { useMediaQuery } from "@mui/material";

const Contact = ({ section }: CommonPageProps) => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width:768px)");
  console.log(section);
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
        {t(`${section.id}.title`)}
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: "100%",
          justifyContent: isMobile ? "center" : "space-between"
        }}
      >
        <div style={{ maxWidth: "400px" }}>
          {" "}
          {/* Assuming you might want to limit the width for better readability */}
          <p>{t(`${section.content}`)}</p>
        </div>
        <ContactForm section={section} />
      </div>
    </Container>
  );
};

export default Contact;
