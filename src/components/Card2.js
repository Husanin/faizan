import React from 'react'
import './Card2Styles.css'
import Card from 'react-bootstrap/Card';
import first from '../assets/card1.png'
import second from '../assets/card2.jpg'
import third from '../assets/card3.jpg'
import four from '../assets/card4.png'


const Card2 = () => {
  return (
    <div className='card2-container'>
    <Card className='card2-area'>
    <Card.Img variant="top" className='img-card2' src={first} />
    <Card.Body>
      <Card.Title className='card2-title'>Card Title</Card.Title>
    </Card.Body>
  </Card>

  <Card className='card2-area'>
    <Card.Img variant="top" className='img-card2' src={second} />
    <Card.Body>
      <Card.Title className='card2-title'>Card Title</Card.Title>
    </Card.Body>
  </Card>
  
  <Card className='card2-area'>
    <Card.Img variant="top" className='img-card2' src={third} />
    <Card.Body>
      <Card.Title className='card2-title'>Card Title</Card.Title>
    </Card.Body>
  </Card>

  <Card className='card2-area'>
    <Card.Img variant="top" className='img-card2' src={four} />
    <Card.Body>
      <Card.Title className='card2-title'>Card Title</Card.Title>
    </Card.Body>
  </Card>
    </div>
  )
}

export default Card2