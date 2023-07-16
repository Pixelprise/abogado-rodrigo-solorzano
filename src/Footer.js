import React from 'react'
import "./Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  let iconSize = {
    fontSize: '60px',
  };
    
  return (
    <footer className='footer'>
        <p className='footer__copyright'><span>&copy;</span>Pixelprise 2023</p>
        <div className='footer__links'>
          <a href='/'>
            <WhatsAppIcon className='footer__socialIcons' style={iconSize} />
          </a>
          <a href='/'>
            <FacebookIcon className='footer__socialIcons' style={iconSize} />
          </a>
          <a href='/'>
            <LinkedInIcon className='footer__socialIcons' style={iconSize} />
          </a>
          <a href='/'>
            <InstagramIcon className='footer__socialIcons' style={iconSize} />
          </a>  
        </div>
        
    </footer>
  )
}

export default Footer
