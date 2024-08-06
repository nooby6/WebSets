import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'; 
import './navbar.css'

//BEM- block element modifier
const Navbar = () => {
  return (
    <div className='gptX__navbar'>
      <div className='gptX__navbar-links'>
        <div className='gptX__navbar-links_logo'>
          <img src="logo" alt="Logo" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
