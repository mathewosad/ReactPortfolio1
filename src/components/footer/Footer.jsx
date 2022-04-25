import React from 'react'
import './footer.css'
import { SiLinkedin, SiGithub } from 'react-icons/si'
import {FaInstagramSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mathew Osad</a>
      {/* <p>Copyright &copy; 2020</p> */}
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        {/* <li><a href="#Services">Services</a></li> */}
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Testimonials">Testimonials</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mathew-osad-b8a8b817a/" target="_blank" rel="noopener noreferrer"><SiLinkedin /></a>
        <a href="instagram.com/matte_6lack" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a>
        <a href="github.com/mathewosad" target="_blank" rel="noopener noreferrer"><SiGithub /></a>
      </div>

      <div className="footer__copyright">
        <small> &copy; Mathew Osad. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer