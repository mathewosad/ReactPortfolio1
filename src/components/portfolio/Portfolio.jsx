import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/1.png'
import IMG2 from '../../assets/3.png'


const data = [
  {
    id: 1,
    title: 'MarvelousMovies',
    image: IMG1,
    github: 'https://github.com/bdejene19/MarvelousMoviesIndex',
    liveDemo: 'https://bdejene19.github.io/MarvelousMoviesIndex/'
  },
  {
    id: 2,
    title: 'GetTraded',
    image: IMG2,
    github: 'https://github.com/bdejene19/getTraded',
    liveDemo: 'https://get-traded.herokuapp.com/'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, title, image, github, liveDemo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GItHub</a>
                  <a href={liveDemo} className='btn btn-primary' target='_blank'>LiveDemo</a>
                </div>
            </article>
            ) 
          }) 
        }
        {/* <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>Here are a few projects</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>GItHub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>LiveDemo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>Here are a few projects</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>GItHub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>LiveDemo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt='' />
          </div>
          <h3>Here are a few projects</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn' target='_blank'>GItHub</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>LiveDemo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>Here are a few projects</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target='_blank'>GItHub</a>
              <a href="https://github.com" className='btn btn-primary' target='_blank'>LiveDemo</a>
            </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio