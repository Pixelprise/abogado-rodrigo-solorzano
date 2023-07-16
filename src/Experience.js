import React from 'react'
import "./Experience.css"

function Experience() {
  return (
    <div className="experience">
        <div>
            <div className='experience__imageBanner'>
                <img className="experience__imageBanner__img" src="https://images.ctfassets.net/pdf29us7flmy/1kzRHEKenydC5tEN7HMMub/1ad4e078379e0e4c04d458ed498f3b8a/qroDRufM.png"></img>
            </div>
            <div className='experience__info'>
                <h1 className='experience__title'>Experiencia</h1>
                <p className='experience__description'>Contamos con una trayectoria jurídica sólida y exitosa, respaldada por años de experiencia en diversas áreas del derecho.</p> 
            </div>
            
        </div>
        
        <div className='experience__div'>
            <div className='experience__img--left'></div>
            <h3 className='experience__h3'>Ejemplo 1</h3>
        </div>
        <div className='experience__div'>
            <h3 className='experience__h3'>Ejemplo 2</h3>
            <div className='experience__img--right'></div>
        </div>
        <div className='experience__div'>
            <div className='experience__img--left'></div>
            <h3 className='experience__h3'>Ejemplo 3</h3>
        </div>
        <div className='experience__div'>
            <h3 className='experience__h3'>Ejemplo 4</h3>
            <div className='experience__img--right'></div>
        </div>
    </div>
  )
}

export default Experience
