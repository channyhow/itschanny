// import QuiltedImageList from "../../components/PhotoGallery/MuiGridGallery";
// import ImageTest from "../../components/PhotoGallery/test";
import ImageTest2 from "../../components/PhotoGallery/test copy";
import { projects } from "../../data/ProjectContent";

const Projects = () => {
  const containerStyle = {
    width: "auto", // full width of the viewport
    // height: "100%", // full height of the viewport, adjust as necessary
    display: "flex",
    flexDirection:'column',
    justifyContent: "space-around",
    alignItems: "center",
    // border:"2px solid aqua"
    padding: "10px",
  };

  return (
    <div style={containerStyle}>

        <h1
          style={{
            color: "white",
            // backgroundColor:'blue',
            zIndex: "500",
            textAlign:'left',
            width:'100%'
          }}
        >
          Projects
        </h1>
      <ImageTest2 slides={projects} />
    </div>
  );
};

export default Projects;
