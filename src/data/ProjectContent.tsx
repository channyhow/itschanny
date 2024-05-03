import jlmob from "./../assets/jlalbany/jlu2024desk.png";
import jldesk from "./../assets/jlalbany/jlu2024mob.png";
import jllogo from "./../assets/jlalbany/NEW_JLALBANY  2 Y GREY.png";
import sashadesk from "./../assets/sashayogaflow/sashayogaflow desktop.png";
import sashamob from "./../assets/sashayogaflow/sashayogaflow mobile.png";
import sashalogo from "./../assets/sashayogaflow/sasha yoga logo_400 TERRA BLACK.png";
import { ProjectDetails } from "../types";

export const projects: ProjectDetails[] = [
  {
    name: "jlalbany",
    images: [
            {
        src: jldesk,
        title: "Desktop View",
        cols: 1,
        rows: 2,
        objectFit: "contain",
        objectPosition: "",
        backgroundColor: "#e8c328",
        width: "auto",
        height: "310px",
      },{
        src: jllogo,
        title: "Logo",
        cols: 1,
        rows: 2,
        objectFit: "contain",
        objectPosition: "",
        backgroundColor: "#e8c328",
        width: "",
        height: "",
      }, {
        src: jlmob,
        title: "Mobile View",
        cols: 1,
        rows: 2,
        objectFit: "cover",
        objectPosition: "top",
        backgroundColor: "#e8c328",
        width: "100%",
        height: "auto",
      },
  
   
    ],
    description: "Portfolio de Jean-Ludovic Albany",
    techno: "sass, vite, react, typescript",
    url: "/jlalbany",
    date:'january 2024'
  },
  {
    name: "sasha yoga flow",
    images: [
      {
        src: sashadesk,
        title: "Desktop View",
        cols: 1,
        rows: 2,
        objectFit: "cover",
        objectPosition: "",
        backgroundColor: "#e8c328",
        width: "auto",
        height: "310px",
      },
      {
        src: sashalogo,
        title: "Logo",
        cols: 1,
        rows: 2,
        objectFit: "contain",
        objectPosition: "",
        width: "100%",
        height: "auto",
        backgroundColor: "#C39C90",
      },
      {
        src: sashamob,
        title: "Mobile View",
        cols: 1,
        rows: 2,
        objectFit: "contain",
        objectPosition: "",
        backgroundColor: "#e8c328",
        width: "auto",
        height: "100%",
      },
    ],
    description: "Sasha Yoga Flow",
    techno: "sass, vite, react, typescript",
    url: "/sashayogaflow",
    date:'february 2024'

  },
];
