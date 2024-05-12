import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
       <div className="socialMedia">
        <InstagramIcon />
        <XIcon />
        <LinkedInIcon />
        <FacebookIcon />

       </div>
       <p> &copy; 2024 roshanpizza.com</p>
        
    </div>
  )
}

export default Footer