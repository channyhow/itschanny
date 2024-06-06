import { CSSProperties } from "react";
import ProjectGallery from "../../components/PhotoGallery/PhotoGallery";
import { projects } from "../../data/ProjectContent";
import useCurrentSectionData from "../../hooks/useCurrentSectionData";
import { CommonPageProps } from "../../types";

const Projects = ({section}:CommonPageProps) => {

  const sectionData = useCurrentSectionData(section.id);

  const containerStyle: CSSProperties = {
    width: "100%", // full width of the viewport
    maxWidth:'1200px',
    display: "flex",
    flexDirection:'column',
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
            textAlign:'left',
            width:'100%',
            marginBottom:'20px'
          }}
        >
          Projects
        </h1>
      <ProjectGallery projects={projects} />
    </div>
  );
};

export default Projects;
