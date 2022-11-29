import React from 'react'
import Card from 'react-bootstrap/Card';
import './CardSectionStyles.css'
import first from '../assets/1.jpg'
import second from '../assets/2.png'
import third from '../assets/3.png'
import four from '../assets/4.jpg'
 
const CardSection = () => {
  return (
    <div className='card-container'>
    <Card className='card-area'>
    <Card.Img variant="top" className='img-card' src={first} />
    <Card.Body>
      <Card.Title className='card-title'>Card Title</Card.Title>
    </Card.Body>
  </Card>

  <Card className='card-area'>
    <Card.Img variant="top" className='img-card' src={second} />
    <Card.Body>
      <Card.Title className='card-title'>Card Title</Card.Title>
    </Card.Body>
  </Card>
  <Card className='card-area'>
    <Card.Img variant="top" className='img-card' src={third} />
    <Card.Body>
      <Card.Title className='card-title'>Card Title</Card.Title>
    </Card.Body>
  </Card>
  <Card className='card-area'>
    <Card.Img variant="top" className='img-card' src={four} />
    <Card.Body>
      <Card.Title className='card-title'>Card Title</Card.Title>
    </Card.Body>
  </Card>
  </div>
  )
}

export default CardSection