import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
// import {HiOutlineUsers} from 'react-icons/hi'
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5> 
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About me"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> 1+ Year Working</small>
            </article>

            {/* <article className="about__card">
              <HiOutlineUsers className="about__icon"/>
              <h5>Clients</h5>
              <small> 50 + Clients Worldwide</small>
            </article> */}

            <article className="about__card">
              <AiOutlineFolderOpen className="about__icon"/>
              <h5>Projects</h5>
              <small> 30+ completed Projects</small>
            </article>
          </div>
          <p>
                I'm a new graduating full stack developer who knows all there is to know about the stack. I recently finished a Full Stack Web Development Certificate at the University of Toronto in Canada, where I learned HTML, CSS, JAVASCRIPT, SQL Server, NodeJS, React and MERN Stack.
          </p>
          <p>
                My strong organisational skills and problem-solving abilities enable me to work well with designers, software engineers, scrum masters, and project managers on cross-functional teams. My excellent education, professional background in technology, ambition for success, and keen attention to detail are all valuable characteristics I possess. 
          </p>  
          <a href="#contact" className='btn btn-primary'>Chat Real Quick</a>  
        </div>
      </div>
    </section>
  )
}

export default About