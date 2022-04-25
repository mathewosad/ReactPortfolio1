import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {RiUserReceivedLine} from 'react-icons/ri'
import {ImStack} from 'react-icons/im'
// import {FaRegHandshake} from 'react-icons/fa'
import {AiOutlineLaptop} from 'react-icons/ai'
import {TiMessages} from 'react-icons/ti'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>

      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><RiUserReceivedLine/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><ImStack/></a>
      {/* <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FaRegHandshake/></a> */}
      <a href="#portfolio" onClick={() => setActiveNav('#Portfolio')} className={activeNav === '#Portfolio' ? 'active' : ''}><AiOutlineLaptop/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiMessages/></a>
    </nav>
  )
}

export default Nav