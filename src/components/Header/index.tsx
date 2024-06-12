import { HashLink } from "react-router-hash-link";
import "./styles.scss";
import { PageProps } from "../../types";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

interface HeaderProps {
  sections: PageProps[];
  className: string;
  currentSection?: string;
  headerColor?: string;
}

export default function Header({
  sections,
  className,
  currentSection,
}: HeaderProps) {
  const isMobile = useMediaQuery("(max-width:425px)");
const { t } = useTranslation();


  const renderSections = () => {
    if (isMobile) {
      return sections.slice(1).map((section) => (
        <HashLink
          smooth
          to={`#${section.id}`}
          key={section.id}
          className={`nav-link ${
            currentSection === section.id ? "active" : ""
          }`}
        >
          <h6 style={{ fontWeight: "600" }}>{t(`${section.id}.title`)}</h6>
        </HashLink>
      ));
    } else {
      return sections.map((section) => (
        <HashLink
          smooth
          to={`#${section.id}`}
          key={section.id}
          className={`nav-link ${
            currentSection === section.id ? "active" : ""
          }`}
        >
          <h6 style={{ fontWeight: "600" }}>{t(`${section.id}.title`)}</h6>
        </HashLink>
      ));
    }
  };

  return (
    <header
      className={`${className} header-main`}
      style={{ display: "flex", justifyContent: "flex-end", zIndex: "700" }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          // flexWrap:"wrap",
        }}
      >
        {renderSections()}
      </nav>
    </header>
  );
}
