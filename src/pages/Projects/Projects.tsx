import { CSSProperties } from "react";
import ProjectGallery from "../../components/ProjectGallery/ProjectGallery";
import useCurrentSectionData from "../../hooks/useCurrentSectionData";
import { CommonPageProps } from "../../types";
import { useTranslation } from "react-i18next";

const Projects = ({ section }: CommonPageProps) => {
  const sectionData = useCurrentSectionData(section.id);
  const { t } = useTranslation();

  const containerStyle: CSSProperties = {
    width: "100%",
    maxWidth: '1200px',
    display: "flex",
    flexDirection: 'column',
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px",
    margin: sectionData?.margin
  };

  return (
    <div style={containerStyle}>
      <h1
        style={{
          color: sectionData?.titleColor,
          zIndex: "50",
          textAlign: 'left',
          width: '100%',
          marginBottom: '20px'
        }}
      >
        {t(`${section.id}.title`)}
      </h1>
      <ProjectGallery section={section}/>
    </div>
  );
};

export default Projects;
