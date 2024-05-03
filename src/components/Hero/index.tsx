// import React from 'react';
// import Logo from '../Logo';
// import { ScrollToNext } from "../ScrollToNext";
import { Shell } from "../Shell";
import "./styles.scss"; // Assuming you have a separate stylesheet for Hero
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

interface HeroProps {
  // backgroundImage?: string;
  height?: string; // e.g., '75vh', '500px'
  title?: string;
  subtitle?: string;
  content1?: string;
  content2?: string;
  width?: string;
  padding?: string;
  textAlign?: string;
  color?: string;
}

const Hero = ({
  height = "75vh",
  title,
  subtitle,
  content1,
  content2,
  color,
}: HeroProps) => {
  const heroStyle = {
    height: height,
    padding: "",
    textAlign: "left" as const, // Ensures TypeScript understands this as a specific string value allowed by CSS
    color,
  };

  return (
    <div className="hero" style={heroStyle}>
      <Shell>
        <div className="hero__inner">
          <div className="hero__titles">
            <h1>{title}</h1>
            {subtitle && <h2>{subtitle}</h2>}
            <p>{content1}</p>
            <p>{content2}</p>
          </div>
        </div>
      </Shell>
    </div>
  );
};

export default Hero;
