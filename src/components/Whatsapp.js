import React from 'react'
import ReactWhatsapp from 'react-whatsapp';
import {BsWhatsapp} from 'react-icons/bs'
import './WhatsappStyles.css'

const Whatsapp = () => {
  return (
    <div>
         <span className='whatsapp'> <ReactWhatsapp number="+92 03486712210" message="Hello World!!!" /></span>
    </div>
  )
}

export default Whatsapp