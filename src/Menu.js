import React  from 'react';
import './Menu.css'


function Menu({menuActive}) {
    const menuClass = menuActive ? 'menu--active' : 'menu--inactive'
  return (

        <div className={menuClass}>
            <a className='menu__a' href='/'>Inicio</a>
            <a className='menu__a' href='/servicios'>Servicios</a>
            <a className='menu__a' href='/experiencia'>Experiencia</a>
            <a className='menu__a' href='/contactos'>Contactos</a>
        </div>

    
  )
}

export default Menu
