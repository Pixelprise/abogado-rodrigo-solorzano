import React from 'react'

function ContactCard({ img, socialMedia, account }) {
  return (
    <div className='contactCard'>
        <img className='contactCard__img' src={img}></img>
        <div className='contactCard__info'>
            <h2 className='info__socialMedia'>{socialMedia}</h2>
            <h3 className='info__account'>{account}</h3>
        </div>
    </div>
  )
}

export default ContactCard
