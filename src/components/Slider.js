import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import quran from "../assets/quran1-03.jpg"
import quran1 from "../assets/quran1-04-1.jpg"
import './SliderStyles.css'



function Slider() {
  return (
    <div className='carousel-slider'> 
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={quran}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='title'>First slide label</h3>
          <p className='description'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={quran1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='title'>Second slide label</h3>
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;