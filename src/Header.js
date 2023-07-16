import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';

function Header({ theme, menuActive, setMenuActive }) {
    const MenuIconStyle = {
        fontSize: '70px',
        color: theme === 'dark' ? '#FAFAFF' : '#0E0E52' 
    };
    const headerBackgroundColor = {
        backgroundColor: theme === 'light' ? '#FAFAFF' : '#0E0E52' 
    }

    const headerResponsiveStyle = {
        color: theme === 'dark' ? '#FAFAFF' : '#0E0E52' 
    }

  return (
    <header style={headerBackgroundColor} className='header'>
      <a href="/">
        <div className='header__logo'>
          <img className="header__img" src={require("./images/rs-abogado-logo.png")}></img>
        </div>
      </a>
      <div className='header--responsive'>
        <a className='header__a--responsive' style={headerResponsiveStyle} href='/'>Inicio</a>
        <a className='header__a--responsive' style={headerResponsiveStyle} href='/servicios'>Servicios</a>
        <a className='header__a--responsive' style={headerResponsiveStyle} href='/experiencia'>Experiencia</a>
        <a className='header__a--responsive' style={headerResponsiveStyle} href='/contactos'>Contactos</a>
      </div>
      <div className='menu-icon'>
        <MenuIcon onClick={()=>setMenuActive(!menuActive)} className="header__menuIcon" style={MenuIconStyle} />
      </div>
      
    </header>
  )
}

export default Header
