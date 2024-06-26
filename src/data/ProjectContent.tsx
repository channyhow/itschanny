import jlmob from "../assets/jlalbany/jlu2024desk.png";
import jldesk from "../assets/jlalbany/jlu2024mob.png";
import jllogo from "../assets/jlalbany/NEW_JLALBANY  2 Y GREY.png";
import sashadesk from "../assets/sashayogaflow/sashayogaflow desktop.png";
import sashamob from "../assets/sashayogaflow/sashayogaflow mobile.png";
import sashalogo from "../assets/sashayogaflow/sashayogaflow branding/SASHA LOGO HIRES_square terracotta bg white logo.png";
import { Projects } from "../types";

export const projectContent: Projects = {
  title: "Projects",
  visit: "Visit",
  published: "Published in",
  style: "Style",
  tech: "Tech",
  items: [
    {
      name: "JL Albany",
      images: [
        {
          src: jldesk,
          title: "Responsive Desktop View",
          description: "",
          cols: 1,
          rows: 2,
          objectFit: "cover",
          objectPosition: "",
          backgroundColor: "#e8c328",
          width: "100%",
          height: "auto",
        },
        {
          src: jllogo,
          title: "Brand logo has been redesigned and modernised",
          description: "",
          cols: 1,
          rows: 2,
          objectFit: "contain",
          objectPosition: "",
          backgroundColor: "#e8c328",
          width: "100%",
          height: "auto",
        },
        {
          src: jlmob,
          title: "Responsive Website Mobile View",
          description: "",
          cols: 1,
          rows: 2,
          objectFit: "contain",
          objectPosition: "top",
          backgroundColor: "#e8c328",
          width: "80%",
          height: "auto",
        },
      ],
      title: "Jean-Ludovic Albany Portfolio",
      description:
        "Jean-Ludovic Albany is a Paris-based advertising tracking expert. His portfolio showcases his expertise in a straightforward and graphic manner. The design is simple yet effective, featuring off-white, black, grey, and sunny yellow colors. The responsive website is designed to be visually appealing across all devices. The logo has been redesigned to fit JL's mindset and branding.",
      techno: ["SASS", "Vite", "React", "TypeScript"],
      url: "https://jlalbany.netlify.app/",
      date: "January 2024",
      type: ["Portfolio", "Advertising", "Minimalist", "Service"],
      body: "black",
      palette: ["#f3f3f3", "#e8c328", "#cdcfc8"],
      fonts: ["Anton", "Inter", ""],
    },
    {
      name: "Sasha Yoga Flow",
      images: [
        {
          src: sashadesk,
          title: "Responsive Desktop View",
          description: "",
          cols: 1,
          rows: 2,
          objectFit: "cover",
          objectPosition: "",
          backgroundColor: "#e8c328",
          width: "100%",
          height: "auto",
        },
        {
          src: sashalogo,
          title: "The logo has been redesigned as well",
          description: "",
          cols: 1,
          rows: 2,
          objectFit: "contain",
          objectPosition: "",
          width: "80%",
          height: "auto",
          backgroundColor: "#C39C90",
        },
        {
          src: sashamob,
          title: "Responsive Website Mobile View",
          description: "",
          cols: 1,
          rows: 2,
          objectFit: "contain",
          objectPosition: "",
          backgroundColor: "#e8c328",
          width: "100%",
          height: "auto",
        },
      ],
      title: "Responsive Yoga Website with Online Booking",
      description:
        "Sasha Yoga Flow is a serene and inviting website dedicated to the practice and teaching of yoga. With neutral earthy tones and a flowy, natural vibe, the website mirrors the essence of yoga. It features simple and easy-to-navigate layouts, combining calm and serene design elements with intuitive functionality. The use of organic textures and gentle color palettes evokes a sense of tranquility and balance, making it the perfect space for guiding users through their yoga journey. The website, catering to a Paris-based audience, offers information on class times, locations, and allows for online booking of workshops.",
      techno: ["SASS", "Vite", "React", "TypeScript"],
      url: "https://sashayogaflow.netlify.app/",
      date: "February 2024",
      type: ["Wellness", "Fitness", "Online Booking"],
      body: "black",
      palette: ["#e2dfd8", "#d6d0c8", "#c39c90"],
      fonts: ["EB Garamond", "Inter", ""],
    },
  ],
};
