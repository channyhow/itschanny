// import { PageProps } from '../../types';
import { useMediaQuery } from '@mui/material';
import { Socials } from '../Socials/Socials';
import './styles.scss';
interface FooterProps {
    className: string;
    // currentSection: string; 
   footerColor?: string;

  }
export default function Footer({className}:FooterProps) {
    const isMobile = useMediaQuery("(max-width:425px)");

    return(
        <footer className={className} style={{width:'100%', display:'flex', justifyContent: isMobile ? "center": ""}}><Socials/></footer>
    )
}