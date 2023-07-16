import React from 'react'
import "./Home.css"

function Home() {
  return (
    <div className='home'>
      <section className='presentation'>
        <div className='presentation__imageBanner'>
          <img className='presentation__imageBanner__img' src='https://images.ctfassets.net/pdf29us7flmy/1kzRHEKenydC5tEN7HMMub/1ad4e078379e0e4c04d458ed498f3b8a/qroDRufM.png'></img>
        </div>
        <div className="presentation__info">
          <h2 className='presentation__h2'>Lic. Rodrigo Solórzano Olea<br/>Hermosillo, Sonora, Mexico</h2>
          <h1 className='presentation__h1'>Comprometido a Defender tus Derechos</h1>
          <p className='presentation__p'>En un mundo cada vez más complejo y con cambios constantes en las leyes, contar con un abogado confiable y experimentado se vuelve crucial para garantizar la protección de tus derechos y resolver asuntos legales de manera efectiva.</p>
        </div>
      </section>
      <section className='benefits'>
        <div className='benefits__div'>
            <h1 className='benefits__h1'>Experiencia y especialización</h1>
            <p className='benefits__p'>Con años de experiencia en el campo legal, contamos con un amplio conocimiento y experiencia en diversas áreas del derecho.</p>
        </div>
        <div className='benefits__div'>
            <h1 className='benefits__h1'>Enfoque personalizado</h1>
            <p className='benefits__p'>Reconocemos que cada cliente y caso es único, por lo que adoptamos un enfoque personalizado para atender tus necesidades específicas.</p>
        </div>
        <div className='benefits__div'>
            <h1 className='benefits__h1'>Compromiso y atención al detalle</h1>
            <p className='benefits__p'>Puedes confiar en nosotros para ser transparentes, éticos y comunicativos en todo momento, manteniéndote informado sobre el progreso de tu caso y brindándote orientación clara y precisa.</p>
        </div>
        <div className='benefits__div'>
            <h1 className='benefits__h1'>Resolución efectiva de casos</h1>
            <p className='benefits__p'>Nuestro historial de éxito en la resolución efectiva de casos demuestra nuestra capacidad para abogar enérgicamente por nuestros clientes y obtener resultados favorables.</p>
        </div>
        <div className='benefits__div'>
            <h1 className='benefits__h1'>Contáctanos</h1>
            <p className='benefits__p'>Si necesitas un abogado confiable y comprometido que luche por tus derechos legales, no dudes en ponerte en contacto con nosotros.</p>
        </div>
      </section>
    </div>
  )
}

export default Home
