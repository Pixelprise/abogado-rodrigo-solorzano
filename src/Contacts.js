import React from 'react'
import "./Contacts.css"
import ContactCard from './ContactCard'

function Contacts() {
  return (
    <div className='contacts'>
      <h1 className='contacts__heading'>Contactos</h1>
      <div className='contactCard__container'>
        <a href="https://www.whatsapp.com">
          <ContactCard 
            img="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-icon-png-image_6315990.png"
            socialMedia="Whatsapp"
            account="6621056673"
          />
        </a>
        <a href="https://www.facebook.com">
          <ContactCard 
            img="https://clipart-library.com/images_k/facebook-icon-transparent-background/facebook-icon-transparent-background-12.png"
            socialMedia="Facebook"
            account="Rodrigo Solorzano"
          />
        </a>
        <a href="https://www.linkedin.com">
          <ContactCard 
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
            socialMedia="LinkedIn"
            account="Rodrigo Solorzano"
          />
        </a>
        <a href="https://www.instagram.com">
          <ContactCard 
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
            socialMedia="Instagram"
            account="@RodrigoSolorzano"
          />
        </a>
      </div>
    </div>
  )
}

export default Contacts
