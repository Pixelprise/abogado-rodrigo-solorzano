import React from 'react'
import ServiceCard from './ServiceCard'
import "./Services.css"

function Services() {
  return (
    <div className="services">
        <h1 className='services__title'>Servicios</h1>
        <div className="serviceCard__container">
            <ServiceCard 
                title="Servicio 1"
                img=""
            />
            <ServiceCard 
                title="Servicio 2"
                img=""
            />
            <ServiceCard 
                title="Servicio 3"
                img=""
            />
        </div>
        
    </div>
  )
}

export default Services
