import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'
import {SiMinutemailer} from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_dvt6y2s', 'template_9onzlku', form.current, '_qTns0_qQt-jzfyzd')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

      e.target.reset();
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
          <MdOutlineMarkEmailRead className='contact__option-icon'/>
          <h4>Email</h4>
          <a href="mailto:matthewosad@yahoo.com" target="_blank"><SiMinutemailer />Mail</a>
        </article>
        <article className='contact__option'>
          <SiLinkedin className='contact__option-icon'/>
          <h4>Linkedin</h4>
          <a href="https://www.linkedin.com/in/mathew-osadolor-848b33177/" target="_blank">Send a message</a>
        </article>
        <article className='contact__option'>
          <SiGithub className='contact__option-icon'/>
          <h4>GitHub</h4>
          <a href="https://github.com/mathewosad" target="_blank">Checkout My Repo</a>
        </article>
      </div>
      {/* Form action */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name= 'name' placeholder="Full Name" required />
        <input type="email" name= 'email' placeholder="Email" required />
        <textarea name="message" id="" cols="30" rows="10" placeholder="Message" required></textarea>
        <button type="submit" className='btn btn-primary'>Send</button>
      </form>
      </div>
    </section>
  )
}

export default Contact