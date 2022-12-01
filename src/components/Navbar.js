import React from 'react'
import './NavbarStyles.css'
import logo from "../assets/LOGO.png"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (

    <div className='container-nav'>
        <ul className='nav-left'>
            <li> <a><img src={logo} alt="" /></a> </li>
        </ul>
        <ul className='nav-right'>
           <li> <Link to='/'>Home</Link></li>
           <li><Link to='/about'>About Us</Link></li>
           <li><Link to='/contact'>Contact Us</Link></li>
        </ul>
        
    </div>


  
  )
}
 
export default Navbar