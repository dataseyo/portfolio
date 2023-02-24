// REACT
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

// PROJECT
import './styles.css'
import Menu from './Menu'
import { useScrollContext } from '../../context/ScrollContext'
import useScreenSize from '../../hooks/useScreenSize'

const Nav = () => {
  // SCROLL
  const scrollContext = useScrollContext()

  // MENU
  const [menuOpen, setMenuOpen] = useState(false)
  const {width, height} = useScreenSize()

  // ANIMATION
  const variants = {
    open: { opacity: 1},
    closed: { opacity: 0}
  }

  // MODALS

  return (
    <div className="nav">
    <div className={`nav__container ${scrollContext?.scroll ? "nav-scroll" : ""}`}>
        <motion.div 
          className="nav-title"
          animate={menuOpen ? "open" : "closed"}
          onClick={() => setMenuOpen(!menuOpen)}
          initial="closed"
        >
          {/* TITLE */}
          <h1 className="nav-title">Zachary Shifrel</h1>
        </motion.div>
        {
          width && width > 700 && 
          <div className="nav-menu">
            {/* <FaBars className="nav-menu-icon"/> */}
            <h3 className="nav-menu-item">About</h3>
            <h3 className="nav-menu-item">Projects</h3>
            <h3 className="nav-menu-item">Skills</h3>
            <Link to="https://github.com/dataseyo" className="menu-link">
              <FaGithub style={{fontSize: "1.5rem", marginRight: "4px"}}/>
            </Link>
            <Link to="https://www.linkedin.com/in/zachary-shifrel/" className="menu-link">
              <FaLinkedin style={{fontSize: "1.5rem", marginRight: "4px"}}/>
            </Link>
            <Link to="https://www.instagram.com/doublechalkedup/" className="menu-link">
              <FaInstagram style={{fontSize: "1.5rem", marginRight: "2px"}}/>
            </Link>
            {/* <h3 className="nav-menu-item">Settings</h3> */}
          </div>
        }
    </div>
    {
      width && width < 700 && 
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    }
    </div>
  )
}

export default Nav