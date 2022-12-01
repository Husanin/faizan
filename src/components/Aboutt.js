import React from 'react'
import "./AbouttStyles.css";
import './DescriptionStyles.css'
import b1 from "../assets/b1.png"
import Button from 'react-bootstrap/Button';  

const Aboutt = () => {
  return (
    <div className='des-container' >
    <div className='img-container'>
        <img src={b1} alt="" />
    </div> 
    <div className='content-area'>
        <h1> QURANIC ACADEMY </h1>
        <p>We offer Quranic guidance for childrens and adults, men and women,
             even a child of 4 or adult of 60 and over can learn Quran online.
             Instructors are highly qualified and certified. You can easily
              learn Quran at your home at your own timetable.</p>
              <Button variant="primary">your own timetable</Button>
    </div> 
</div>
  )
}

export default Aboutt