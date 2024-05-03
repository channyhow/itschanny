// import { PageProps } from '../../types';
import { Socials } from '../Socials/Socials';
import './styles.scss';
interface FooterProps {
    className: string;
    // currentSection: string; 
   footerColor?: string;

  }
export default function Footer({className}:FooterProps) {
    
    return(
        <footer className={className} style={{width:'100%'}}><Socials/></footer>
    )
}