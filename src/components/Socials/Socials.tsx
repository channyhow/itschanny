import { useMediaQuery } from "@mui/material"
import { NavLink } from "react-router-dom"
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './styles.scss';

export const Socials = () => {
 const isMobile = useMediaQuery('max-width(1023px)')
 
    const socialInfos =[
        {label:"mail",url:"/", icon:<EmailIcon/>},
        {label:"phone",url:"/", icon:<SmartphoneIcon/>},
        {label:"linkedin",url:"/",icon:<LinkedInIcon/>},
        {label:"github",url:"/", icon:<GitHubIcon/>}
    ]

    return(
        <nav className="socials" style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
            {socialInfos.map((item)=>(
                
                    isMobile ? 
                    ( <NavLink to={item.url} key={item.label}><span>{item.icon}</span></NavLink> )
                    :
                    ( <NavLink to={item.url} key={item.label}><h6>{item.label}</h6></NavLink> )
            ))}

        </nav>
    )
}