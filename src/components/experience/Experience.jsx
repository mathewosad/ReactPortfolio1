import React from 'react'
import './experience.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {FaCss3Alt} from 'react-icons/fa'
import {BsBootstrap} from 'react-icons/bs'
import {SiNodedotjs} from 'react-icons/si'
import {SiMysql} from 'react-icons/si'
import {SiExpress} from 'react-icons/si'
import {DiJavascript1} from 'react-icons/di'
import {SiTailwindcss} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {GrGraphQl} from 'react-icons/gr'
import {SiMongodb} from 'react-icons/si'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>SkillS</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineHtml5 className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCss3Alt className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className='experience__details'>
              <DiJavascript1 className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsBootstrap className='experience__details-icon'/>
              <div>
                <h4>BootStarp</h4>
                <small className='text-light'>Expert</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiTailwindcss className='experience__details-icon'/>
              <div>
                <h4>TailWind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <div>
                <h4>REACT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* Back End Coding  */}
        <div className="experience__backend">
        <h3>Back-End Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiNodedotjs className='experience__details-icon'/>
              <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiMysql className='experience__details-icon'/>
              <div>
                <h4>MYSQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <SiExpress className='experience__details-icon'/>
              <div>
                <h4>Express</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <GrGraphQl className='experience__details-icon'/>
              <div>
                <h4>GraphQL</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            {/* <article className='experience__details'>
              <GiCheckeredFlag />
              <h4>TailWind</h4>
              <small className='text-light'>Experienced</small>
            </article> */}
            <article className='experience__details'>
              <SiMongodb className='experience__details-icon'/>
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience