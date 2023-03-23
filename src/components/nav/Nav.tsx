// REACT
import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

// PROJECT
import './styles.css'
import useScreenSize from '../../hooks/useScreenSize'
import Menu from './Menu'
import {
  About,
  Projects,
  Skills
} from '../modals/index'

const Nav = () => {
  // SCROLL

  // MENU
  const [menuOpen, setMenuOpen] = useState(false)
  const {width, height} = useScreenSize()

  const [modalOpen, setModalOpen] = useState({
    aboutModal: false,
    projectsModal: false,
    skillsModal: false
  })

  // ANIMATION
  const variants = {
    open: { opacity: 1},
    closed: { opacity: 0}
  }

  // MODALS
  const controlModal = (type: string) => {
    switch(type) {
      case "about": 
        if (modalOpen.aboutModal) {
          return setModalOpen(prev => ({
            ...prev,
            aboutModal: false
          }))
        } else {
          return setModalOpen(prev => ({
            ...prev,
            aboutModal: true,
            projectsModal: false,
            skillsModal: false
          }))
        }

      case "projects": 
        if (modalOpen.projectsModal) {
          return setModalOpen(prev => ({
            ...prev,
            projectsModal: false,
          }))
        } else {
          return setModalOpen(prev => ({
            ...prev,
            aboutModal: false,
            projectsModal: true,
            skillsModal: false
          }))
        }

      case "skills": 
        if (modalOpen.skillsModal) {
          return setModalOpen(prev => ({
            ...prev,
            skillsModal: false
          }))
        } else {
          return setModalOpen(prev => ({
            ...prev,
            aboutModal: false,
            projectsModal: false,
            skillsModal: true
          }))
        }
    }
  }

  return (
    <div className="nav">
    <div className="nav__container">
        <motion.div 
          className="nav-title"
          animate={menuOpen ? "open" : "closed"}
          // onClick={() => setMenuOpen(!menuOpen)}
          initial="closed"
        >
          {/* TITLE */}
          <h1
            onClick={() => setModalOpen(prev => ({...prev, aboutModal: false, projectsModal: false, skillsModal: false }))}    
          >
            Zachary Shifrel
          </h1>
        </motion.div>
        {
          width && width > 700 && 
          <div className="nav-menu">
            {/* <FaBars className="nav-menu-icon"/> */}
            <h3 
              className="nav-menu-item" 
              onClick={() => controlModal("about")}    
            >
                About
            </h3>
            <h3 
              className="nav-menu-item"
              onClick={() => controlModal("projects")}    
            >
              Projects
            </h3>
            <h3 
              className="nav-menu-item"
              onClick={() => controlModal("skills")}    
            >
              Skills
            </h3>
            <Link to="https://github.com/dataseyo" className="menu-link">
              <FaGithub style={{fontSize: "1.5rem", marginRight: "4px"}}/>
            </Link>
            <Link to="https://www.linkedin.com/in/zachary-shifrel/" className="menu-link">
              <FaLinkedin style={{fontSize: "1.5rem", marginRight: "4px"}}/>
            </Link>
            <Link to="https://www.instagram.com/doublechalkedup/" className="menu-link">
              <FaInstagram style={{fontSize: "1.5rem", marginRight: "20px"}}/>
            </Link>
            {/* <h3 className="nav-menu-item">Settings</h3> */}
          </div>
        }
    </div>
    {
      width && width < 700 && 
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    }


    {/* Content */}
    <About modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    <Projects modalOpen={modalOpen} setModalOpen={setModalOpen}/>
    <Skills modalOpen={modalOpen} setModalOpen={setModalOpen}/>

    </div>
  )
}

export default Nav