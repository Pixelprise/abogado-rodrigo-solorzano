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

  return (
    <header style={headerBackgroundColor} className='header'>
      <a href="/">
        <div className='header__logo'>
          <img className="header__img" src={require("./images/rs-abogado-logo.png")}></img>
        </div>
      </a>
      
      <MenuIcon onClick={()=>setMenuActive(!menuActive)} className="header__menuIcon" style={MenuIconStyle} />
    </header>
  )
}

export default Header
