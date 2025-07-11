import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Contemporary Logo with Book and Arrow.png'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  }, [])

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul className={mobileMenu ? 'show-mobile-menu' : ''}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='programs' smooth={true} offset={-260} duration={500}>Courses</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Classes</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Reviews</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About us</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar