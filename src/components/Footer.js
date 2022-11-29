import React from 'react'
import './FooterStyles.css'
import logo from "../assets/LOGO.png"
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer-container' >
        <img src={logo} alt="" /><br/><br/>
        <span className='whatsapp-icon'><BsWhatsapp /></span>
        <span className='footer-nomber'>+92-303-7454702</span>
    </div>
  )
}

export default Footer 