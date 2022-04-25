import React from 'react'
import {SiLinkedin, SiGithub, SiDribbble} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/mathew-osad-b8a8b817b/" target="_blank" ><SiLinkedin/></a>
        <a href="https://www.github.com" target="_blank" ><SiGithub/></a>
        <a href="https://www.dribble.com" target="_blank"><SiDribbble/></a>

    </div>
  )
}

export default HeaderSocials