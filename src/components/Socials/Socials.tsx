import { useMediaQuery } from "@mui/material";
import { NavLink } from "react-router-dom";
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./styles.scss";

export const Socials = () => {
  const isMobile = useMediaQuery("(max-width:425px)");

  const socialInfos = [
    { label: "mail", url: "/", icon: <AlternateEmailOutlinedIcon /> },
    { label: "phone", url: "/", icon: <HeadphonesOutlinedIcon /> },
    { label: "linkedin", url: "/", icon: <LinkedInIcon /> },
    { label: "github", url: "/", icon: <GitHubIcon /> },
  ];

  return (
    <nav
      className="socials"
      style={{
        display: "flex",
        flexWrap:"wrap",
        flexDirection: "row",
        justifyContent: "space-evenly",
width: isMobile ? "100%":"auto",
        alignItems:'center',
      }}
    >
      {socialInfos.map((item) =>(
        isMobile ? (
          <NavLink to={item.url} key={item.label}>
            <span >{item.icon}</span>
          </NavLink>
        ) : (
          <NavLink to={item.url} key={item.label}>
            <h6>{item.label}</h6>
          </NavLink>
        ))
      )}
    </nav>
  );
};
