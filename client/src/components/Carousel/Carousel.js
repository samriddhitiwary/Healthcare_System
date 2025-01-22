import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ClinicCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/carousel/imag1.jpg'
          alt="First slide"
          style={{ objectFit: 'content', maxHeight: '30rem' }}
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/carousel/img2.jpg'
          alt="Second slide"
          style={{ objectFit: 'cover', maxHeight: '30rem' }}
        />

      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/carousel/img3.jpg'
          alt="Third slide"
          style={{ objectFit: 'cover', maxHeight: '30rem' }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/carousel/img4.jpg'
          alt="Third slide"
          style={{ objectFit: 'cover', maxHeight: '30rem' }}
        />
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/carousel/img5.jpg'
          alt="Third slide"
          style={{ objectFit: 'cover', maxHeight: '30rem' }}
        />
      </Carousel.Item>




      <Carousel.Item>
        <img
          className="d-block w-100"
          src='images/carousel/imag1.jpg'
          alt="Third slide"
          style={{ objectFit: 'cover', maxHeight: '30rem' }}
        />
      </Carousel.Item>










    </Carousel>

  );
}

export default ClinicCarousel;
