import React from 'react'
import { Link } from 'react-scroll'


const Header = () => {
  return (
    <div className='flex justify-between sticky top-0 bg-[#6474E5] text-[#FFFFFF] w-full'>
        <h3 className='py-4 pl-5'>LOGO</h3>
        <div className='flex space-x-5 py-4 pr-5'>

        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-50} duration={1500} delay={500} className="cursor-pointer font-medium" >
          Home
        </Link>
        <Link activeClass="active" to="skill" spy={true} smooth={true} offset={-50} duration={1500} delay={500} className="cursor-pointer font-medium">
          Skill
        </Link>
        <Link activeClass="active" to="education" spy={true} smooth={true} offset={-50} duration={1500} delay={500} className="cursor-pointer font-medium">
          Education
        </Link>
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-50} duration={1500} delay={500} className="cursor-pointer font-medium">
          Projects
        </Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={1500} delay={500} className="cursor-pointer font-medium">
          Contact
        </Link>
        </div>

    </div>
  )
}

export default Header