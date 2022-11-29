import React from 'react'
import './NavbarStyles.css'
import logo from "../assets/LOGO.png"

const Navbar = () => {
  return (
    <div className='container-nav'>
        <ul className='nav-left'>
            <li> <a><img src={logo} alt="" /></a> </li>
        </ul>
        <ul className='nav-right'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}
 
export default Navbar