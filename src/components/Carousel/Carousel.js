import Carousel from 'react-bootstrap/Carousel';
import fondo1 from '../../imagenes/fondo1.jpg'
import fondo2 from '../../imagenes/fondo2.jpg'
import fondo3 from '../../imagenes/fondo3.webp'
import  "./Carousel.scss"

export const CarouselNav = () =>{
    
  return (
  
    <Carousel fade variant='dark'>
      <Carousel.Item className='cuadro_deslizable'>
        <img
          className="d-block w-100 imagen_deslizable"
          src= {fondo1}
          alt="First slide"
        />
        <Carousel.Caption >
          <h3 className='carousel_titulo'>CAROLINSKA TU MUNDO</h3>
          <p className='carousel_texto'> DIA A DIA DAMOS LO MEJOR DE NOSOTROS PARA CREAR PRODUCTOS QUE ALEGREN TU VIDA</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='cuadro-deslizable'>
        <img
          className="d-block w-100 imagen_deslizable"
          src= {fondo2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='carousel_titulo'>CAROLINSKA TU MUNDO</h3>
          <p className='carousel_texto'>EN EL AÑO 2016 COMENZAMOS NUESTRO RECORRIDO CON UN CLARO OBJETIVO: ALEGRAR TUS MOMENTOS</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='cuadro-deslizable'>
        <img
          className="d-block w-100 imagen_deslizable"
          src= {fondo3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='carousel_titulo'>CAROLINSKA TU MUNDO</h3>
          <p className='carousel_texto'>
            ACTUALMENTE PRODUCIMOS UNA AMPLIA VARIEDAD DE CERAMICAS, SIEMPRE PENSAMOS EN INNOVAR PARA ACOMPAÑARTE EN TUS MOMENTOS
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

