import "./styles.scss";
// import { GridSectionProps } from "../../types";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import { Shell } from "../Shell";

export default function GridSection({
  title = "Default Title",
  subtitle1 = "subtitle1",
  subtitle2 = "subtitle2",
  backgroundColor = "#ebebe7",
  imgHeight='100%',
  imgWidth='100%',
  images,
  height,
  gridConfig = { columns: 3, rows: 2, gap: "10px" },
}: GridSectionProps) {
  // Applying dynamic style to the grid container based on gridConfig
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${gridConfig.columns}, 1fr)`,
    gridGap: gridConfig.gap, // Using gridGap for both row and column gaps
    // Optionally set gridTemplateRows if you have a specific layout in mind, might need adjustments
  };

  return (
    <div className="section-grid"  style={{
      backgroundColor}}>
      <Shell display={""} alignItems={""} currentSection={""} className={""}>
        <h1
          style={{
            // padding: "2em",
            fontWeight: "700",
            // filter: "drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.2))",
          }}
          className="section-grid__title"
        >
          {title}
        </h1>
        <div style={gridStyle}>
          <div className="section-grid__subtitle">
            <h3>{subtitle1}</h3>
          </div>
          <Link to={"/projects"}>
            {" "}
            <div className="section-grid__subtitle">
              <h3>{subtitle2}</h3>
              <ArrowForwardIcon sx={{ scale: "1.2", marginLeft: "20px" }} />
            </div>
          </Link>
        </div>
        <div className="section-grid__inner" >
          <div className="section-grid__images-grid" style={gridStyle}>
            {images?.map((image, index) => (
              <div
                key={index}
                className="section-grid__image-item"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  backgroundImage: `url(${image.url})`,
                  gridRow: `span ${image.rows || 1}`,
                  gridColumn: `span ${image.columns || 1}`,
                 width: imgWidth, maxHeight: imgHeight, objectFit: "cover",
                 height:height
                }}

              >
                {/* Display the title or overlay text here if desired */}
                {/* <img
                  src={image.url}
                  alt={image.title}
                  style={{ width: imgWidth, maxHeight: imgHeight, objectFit: "cover" }}
                /> */}
                <div
                  style={{
                    backgroundColor: "rgba(0,0,0, 0.4)",
                    width: "fit-content",
                    padding: "0.5em",
                    margin: "0.5em",
                  }}
                >
                  <p>{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Shell>
    </div>
  );
}
