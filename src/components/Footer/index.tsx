// import { PageProps } from '../../types';
// import { useMediaQuery } from '@mui/material';
import { FooterProps } from "../../types";
import { Socials } from "../Socials/Socials";
import "./styles.scss";
// import { FooterProps } from '../../types';

export default function Footer({style}:FooterProps) {
  // const isMobile = useMediaQuery("(max-width:425px)");

  return (
    <footer
      style={style}
    >
      <Socials />
    </footer>
  );
}
