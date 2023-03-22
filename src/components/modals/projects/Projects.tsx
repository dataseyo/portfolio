// external imports
import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { motion } from 'framer-motion'

// internal imports
import './styles.css'

type Modal = {
  modalOpen: {
    aboutModal: boolean,
    projectsModal: boolean,
    skillsModal: boolean
  },
  setModalOpen: React.Dispatch<React.SetStateAction<{
    aboutModal: boolean;
    projectsModal: boolean;
    skillsModal: boolean;
}>>
}

const contentVariant = {
  hidden: {
      opacity: 0,
      width: 0
      // x: "100vw",
  },
  show: {
      opacity: 1,
      // x: 0,
      width: "100vw",
      zIndex: 1000
  },

}

const Projects = ({modalOpen, setModalOpen}: Modal) => {
  
  const closeAbout = () => {
    setModalOpen(prev => ({
        ...prev,
        aboutModal: false
    }))
  }

  return (
    <motion.div 
      className="projects__container"
      animate={modalOpen.projectsModal ? "show" : "hidden"}
      // onClick={() => setMenuOpen(!menuOpen)}
      variants={contentVariant}
      initial="hidden"
      // exit="hidden"
    >
      <h1>Projects</h1>
      
    </motion.div>
  )
}

export default Projects