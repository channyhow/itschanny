import { HashLink } from "react-router-hash-link";
import "./styles.scss";
import { HeaderProps } from "../../types";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Header({
  sections,
  background,
  currentSection,
  style
}: HeaderProps) {
  const isMobile = useMediaQuery("(max-width:768px)");
  const { t } = useTranslation();

  const renderSections = () => {
    const sectionItems = isMobile ? sections.slice(1) : sections;

    return sectionItems.map((item) => (
      <HashLink
        smooth
        to={`#${item.id}`}
        key={item.id}
        className={`nav-link ${currentSection === item.id ? "active" : ""}`}
      >
        <h6 style={{ fontWeight: "600" }}>{t(`${item.id}.title`)}</h6>
      </HashLink>
    ));
  };

  return (
    <header
      style={
        style
      }
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          border: "1px solid",
          width:"auto",
backgroundColor: background
        }}
      >
        {renderSections()}
      </nav>
    </header>
  );
}
