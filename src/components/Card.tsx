import { Link } from "react-router-dom";
import { ButtonGroup } from "./ButtonGroup/ButtonGroup";
import { CardProps } from "../types";
// import {  CardProps, ProjectProps } from "../types";
// import jldesk from "./../assets/jlalbany/jlu2024desk.png";
// import jlmob from "./../assets/jlalbany/jlu2024mob.png";
// import sashadesk from "./../assets/sashayogaflow/sashayogaflow desktop.png";
// import sashamob from "./../assets/sashayogaflow/sashayogaflow mobile.png";

// const data: ProjectProps = [
//   {
//     name: "jlalbany",
//     images: [{ desktop: jldesk, mobile: jlmob }],
//     description: "Project description here",
//     techno: "React, CSS",
//     url: "/jlalbany",
//   },
//   {
//     name: "sasha yoga flow",
//     images: [{ desktop: sashadesk, mobile: sashamob }],
//     description: "Another project description",
//     techno: "Vue, TailwindCSS",
//     url: "/sashayogaflow",
//   },
// ];

const Card = ({data}:CardProps) => {

  return (
    <>
        <div key={data.name}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {data.images.map((image, index) => (
              <div
                style={{
                  display: "flex",
                }}
              >
                {" "}
                <img
                  key={image.mobile}
                  src={image.mobile} // Assuming you want to show desktop images
                  alt={`${data.name} ${
                    index === 0 ? "desktop" : "mobile"
                  } version`}
                  style={{
                    height: "500px",
                    border: "2px solid #ceca4d",
                    margin: "0.5rem",
                  }}
                />
                <img
                  key={index}
                  src={image.desktop} // Assuming you want to show desktop images
                  alt={`${data.name} ${
                    index === 0 ? "desktop" : "mobile"
                  } version`}
                  style={{
                    height: "500px",
                    border: "2px solid #ceca4d",
                    margin: "0.5rem",
                  }}
                />
              </div>
            ))}
          </div>
          <div style={{padding:"1rem", textAlign:"left"}}>
            {" "}
            <h1>{data.name}</h1>
            <h3>{data.description}</h3>
            <h4>{data.techno}</h4>
            <ButtonGroup>
              <Link to={data.url}>
                <h4>go to {data.name}</h4>
              </Link>
            </ButtonGroup>
          </div>
        </div>
    </>
  );
};

export default Card;
