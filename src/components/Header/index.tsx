import { HashLink } from "react-router-hash-link";
import "./styles.scss";
import { PageProps } from "../../types";

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
  return (
    <header className={`${className} header-main`} style={{ display: "flex", justifyContent: "flex-end"}}>
      <nav style={{ display: "flex", justifyContent: "space-evenly", width:'100%' }}>
        {sections.map((section) => (
          <HashLink
            smooth
            to={`#${section.id}`}
            key={section.id}
            className={`nav-link ${currentSection === section.id ? 'active' : ''}`}
          >
            <h6>{section.title}</h6>
          </HashLink>
        ))}
      </nav>
    </header>
  );
}
