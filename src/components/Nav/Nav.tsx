// REACT
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'

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

  return (
    <>
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
          width && width > 600 && 
          <div className="nav-menu">
            {/* <FaBars className="nav-menu-icon"/> */}
            <h3 className="nav-menu-item">About</h3>
            <h3 className="nav-menu-item">Projects</h3>
            <h3 className="nav-menu-item">Contact</h3>
          </div>
        }
    </div>
    {
      width && width < 600 && 
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    }
    </>
  )
}

export default Nav