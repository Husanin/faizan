import React from 'react'
import './DescriptionStyles.css'
import desc from "../assets/des.png"
import Button from 'react-bootstrap/Button';

const Description = () => {
  return (
    <div className='des-container' >
        <div className='img-container'>
            <img src={desc} alt="" />
        </div> 
        <div className='content-area'>
            <h1> WELCOME TO <br/> FAIZAN-E-QURAN! </h1>
            <p>We offer Quranic guidance for childrens and adults, men and women,
                 even a child of 4 or adult of 60 and over can learn Quran online.
                 Instructors are highly qualified and certified. You can easily
                  learn Quran at your home at your own timetable.</p>
                  <Button variant="primary">your own timetable</Button>
        </div> 
    </div>
  ) 
}

export default Description