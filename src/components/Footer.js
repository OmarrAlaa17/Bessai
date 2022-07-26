import React from "react";
import classes from "./style/Footer.module.css"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

const Footer = () => {
    return(
        <div id="inf" className={classes.footer}>
            <ul>
                <li>
                    <PhoneIcon sx={{fontSize:'30px'}}/>
                    <p>01156669817</p>
                </li>
                <li>
                    <EmailIcon sx={{fontSize:'30px'}}/>
                    <p>Robaafouad@icloud.com</p>
                </li>
                <li>
                    <PlaceIcon sx={{fontSize:'30px'}}/>
                    <p>Sheikh zayed</p>
                </li>
            </ul>
        </div>
    );}

export default Footer;