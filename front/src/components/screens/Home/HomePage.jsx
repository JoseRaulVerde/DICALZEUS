import React, { useState } from 'react';
import ISO from './../../Images/Icons/iso.png';
import fundacionDonde from './../../Images/Icons/fundacionDonde.png';
import './HomePage.css';
function HomePage() {
  return (
    <div>
      <header className="title">
        <div className="headerContainer">
          <img
            src="https://www.fanaticosdelasmascotas.cl/wp-content/uploads/2022/10/perro_paseando_con-correa_alexei_tm_shutterstock_img_interna.jpg"
            className="headerimg"
          />
          <h1>PET SITTERS</h1>
        </div>
      </header>
      <div className="informationCard">
        <h2>About Us</h2>
        <span>
          En "Paseadores de Perros Felices", nuestra misión es brindar un
          servicio profesional y confiable de paseo de perros a dueños de
          mascotas en toda la comunidad. Nos enorgullece ofrecer a nuestros
          clientes la tranquilidad de saber que sus adorables compañeros de
          cuatro patas están en buenas manos.
        </span>
        <h3>Our mision</h3>
        <span>
          Nuestra misión es simple: proporcionar a cada perro la atención y el
          ejercicio que necesita para llevar una vida feliz y saludable. Creemos
          firmemente en la importancia de los paseos regulares para el bienestar
          físico y mental de cada mascota, y nos comprometemos a ofrecer
          servicios de paseo de la más alta calidad
        </span>
        <h3>Why choose Us?</h3>
        <ul>
          <li>
            <h4>Profesionalismo: </h4>
            <span>
              Nuestro equipo de paseadores de perros está altamente capacitado y
              comprometido con el cuidado y la seguridad de cada mascota.
            </span>
          </li>
          <li>
            <h4>Flexibilidad:</h4>
            <span>
              Nos adaptamos a los horarios y necesidades individuales de cada
              cliente, ofreciendo horarios de paseo personalizados.
            </span>
          </li>
          <li>
            <h4>Pasión por los Animales:</h4>
            <span>
              Amamos a los perros tanto como tú, y nos dedicamos a
              proporcionarles la atención y el cariño que merecen.
            </span>
          </li>
        </ul>
      </div>
      <div className="certificationsSponsors">
        <h2>Certificaciones y patrocinadores</h2>
        <div className='images'>
          <div className="Certificacions">
            
              <img src={ISO} className="certification" />

              <img
                src="https://www.netizen.net/media/certifications/iso9001.png"
                className="certification"
              />
            
          </div>
          <a href="https://www.dondeempenos.com.mx/">
            <img src={fundacionDonde} className="sponsors" />
          </a>
          <a href="https://www.coca-cola.com.mx/brands/coca-cola">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/03/Coca-Cola-Logo.png"
              className="sponsors"
            />
          </a>
          <a href="https://www.soriana.com/">
            <img
              src="https://www.organizacionsoriana.com/images/soriana_hiper.png"
              className="sponsors"
            />
          </a>
          <a href="https://www.bing.com/search?q=walmart+logo&FORM=HDRSC1">
            <img
              src="https://1000logos.net/wp-content/uploads/2017/05/Walmart-Logo-1536x864.png"
              className="sponsors"
            />
          </a>
        </div>
      </div>
      <div className="footer">
        <h3>Contactanos</h3>
        <span>Celular: 6691541816</span>
        <span>Correo: PetSitters@gmail.com</span>
        <a href="https://maps.app.goo.gl/M4b4pb3EuD4ZAxXK7" color='antiquewhite'>Direccion</a>

      </div>
    </div>
  );
}

export default HomePage;
