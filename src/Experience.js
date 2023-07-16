import React from 'react'
import "./Experience.css"

function Experience() {
  return (
    <div class="experience">
        <div className='experience__imageBanner'></div>
        <h1 className='experience__title'>Experiencia</h1>
        <p className='experience__description'>Contamos con una trayectoria jurídica sólida y exitosa, respaldada por años de experiencia en diversas áreas del derecho.</p>
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
