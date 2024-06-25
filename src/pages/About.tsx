import { CSSProperties } from "react";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import Container from "../components/Container";
import { CommonPageProps } from "../types";

const About = ({ section }: CommonPageProps) => {
    const isMobile = useMediaQuery("(max-width:425px)");
    // const [gridOn, setGridOn] = useState(false);
    const { t } = useTranslation();

    const contentArray = t(`${section.id}.content`, { returnObjects: true }) as string[];
    const paragraphs = Array.isArray(contentArray) ? contentArray : [];

    const paraStyle: CSSProperties = {
      border: "1px solid transparent",
      padding:"1rem",
      height: "",
      minHeight:  "",
      backgroundColor:  "transparent",
      fontFamily:  "",
      transition: "all 0.5s ease",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",    };

    const gridContainerStyle: CSSProperties = {
      display:  "flex",
      gridTemplateColumns: !isMobile ? "repeat(2, 1fr)" : "none",
      gap:"0",
      minHeight: "350px",
      padding:"1em 0",
      justifyContent: "center",
      alignItems: "start",
      justifyItems: "center",
      flexDirection:"column",
      transition: "all 0.5s ease",
      width: "100%", // full width of the viewport
      minWidth:"300px",
      maxWidth: "1200px",    };

    return (
        <Container>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                alignItems: "baseline",
                padding: "1em 0",
                width: "100%",
            }}>
                <h1 style={{
                    color:  section.color,
                    zIndex: "50",
                    textAlign: 'left',
                    marginBottom: '20px'
                }}>
                    {t(`${section.id}.title`)}
                </h1>
                {/* <GridToggle sectionColor={section.color} toggleGrid={setGridOn} /> */}
            </div>
            <div style={gridContainerStyle}>
                {paragraphs.map((text, index) => (
                    <div style={paraStyle} key={index}>
                        <h6>{text}</h6>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default About;
