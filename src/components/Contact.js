import React from 'react'
import {FaFacebookF,FaPhoneAlt,FaWhatsapp,FaInstagram} from 'react-icons/fa'
import './ContactStyles.css'

const Contact = () => {
  return (
    <nav>
        <ul className='left'>
            <li> <span className='phoneIcon'><FaPhoneAlt /></span> <span className='nomber'>+92-0303-7454702</span> </li>
        </ul>
        <ul className='right'>
        <li className='iconsfa'> <FaFacebookF /> </li>
        <li className='iconswa'> <FaWhatsapp /> </li>
        <li className='iconsin'> <FaInstagram /> </li>
        </ul>
    </nav>
  )
}

export default Contact