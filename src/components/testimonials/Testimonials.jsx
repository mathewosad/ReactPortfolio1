import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
// import AVATAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  { 
    avatar: AVATAR1,
    name: 'Ernesto Sanchez',
    review: 'We’ve joined our hands on several projects, and Matt is one of the best people I had as a partner. I highly recommend his expertise to any person looking for a front-end Developer. He is the most profound person I have met, and his ability to tackle any problem is remarkable and with a warm smile. Matt would become an appreciated member of any team.'
  },
  {
    avatar: AVATAR2,
    name: 'Hajia Bintu',
    review: 'Mathew is a fantastic resource and a natural communicator, and we collaborated on a project together. He ensures that all deadlines are met, and that they are met to the greatest of standards. He is a devoted and hardworking individual who will complete your project on schedule. Mathew is someone I would refer and support.'
  },
  {
    avatar: AVATAR3,
    name: 'Ryan Achu',
    review: 'Matt is the best teammate I’ve ever had. He is one of the most dedicated professionals I’ve ever worked with, and he is always prepared to lend a hand when needed. His experience as a developer is extensive, and it has aided our team in developing more effective solutions for various projects. He makes a vital contribution on the side, and I definitely suggest Matt and would love to work with him again.'
  }
  // { 
  //   avatar: AVATAR4,
  //   name: 'Ernesto Sanchez',
  //   review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  // }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Clients Reviews</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
            // install Swiper modules
            modules={[ Pagination ]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section>
  )
}

export default Testimonials