// import { CSSProperties } from "react";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery";
import useCurrentSectionData from "../../hooks/useCurrentSectionData";
import { CommonPageProps } from "../../types";
import { useTranslation } from "react-i18next";
import Container from "../../components/Container";
// import { useMediaQuery } from "@mui/material";

const Projects = ({ section }: CommonPageProps) => {
  const sectionData = useCurrentSectionData(section.id);
  const { t } = useTranslation();
  // const isMobile = useMediaQuery("(max-width:768px)");

  return (
  <Container>
      <h1
        style={{
          color: sectionData?.color,
          zIndex: "50",
          textAlign: 'left',
          width: '100%',
          marginBottom: '20px'
        }}
      >
        {t(`${section.id}.title`)}
      </h1>
      <ProjectGallery section={section}/>
    </Container>
  );
};

export default Projects;
