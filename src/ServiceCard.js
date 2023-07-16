import React from 'react'
import "./Services.css"

function ServiceCard({ title, img }) {
  return (
    <div className='serviceCard'>
      <div className='serviceCard__img'></div>
      <h1 className='serviceCard__title'>{title}</h1>
      <div className='serviceCard__button'>Ver más</div>
    </div>
  )
}

export default ServiceCard
