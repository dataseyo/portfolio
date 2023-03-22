// external imports
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

// internal imports
import './styles.css'
import { MenuButton } from './MenuButton'

const contentVariant = {
    hidden: {
        opacity: 0,
        x: "100vw"
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            // staggerChildren: 0.1,
            // delayChildren: 0.3,
            bounce: 1,
            damping: 15
    }}
}

const container = {
    hidden: {  },
    show: {
        // rotate: 360,

    },
}


type Props = {
    menuOpen: boolean,
    setMenuOpen: (value: React.SetStateAction<boolean>) => void,
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

const Menu = ({menuOpen, setMenuOpen, modalOpen, setModalOpen} : Props) => {
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
        <motion.div 
            className="menu__container"
            animate={menuOpen ? "show" : "hidden"}
            // onClick={() => setMenuOpen(!menuOpen)}
            variants={container}
            initial="hidden"
            transition={{ type: "spring", stiffness: 1000 }}
        >

            {/* MENU ICON */}
            <motion.div className="menu-icon">
                <MenuButton
                    isOpen={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    color="white"
                    width="30"
                    height="20"
                />
            </motion.div>

            {/* MENU CONTENT */}
            <motion.div variants={contentVariant} className="menu-content">
                <motion.p 
                    className="menu-text" 
                    onClick={() => controlModal("about")}
                >
                    About
                </motion.p>
                <motion.p 
                    className="menu-text" 
                    onClick={() => controlModal("projects")}
                >
                    Projects
                </motion.p>
                <motion.p 
                    className="menu-text" 
                    onClick={() => controlModal("skills")}    
                >
                    Skills
                </motion.p>
                <motion.div 
                    className="menu-text"
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly"
                    }}
                >
                    <Link to="https://github.com/dataseyo" className="menu-link"><FaGithub/></Link>
                    <Link to="https://www.linkedin.com/in/zachary-shifrel/" className="menu-link"><FaLinkedin/></Link>
                    <Link to="https://www.instagram.com/doublechalkedup/" className="menu-link"><FaInstagram/></Link>
                </motion.div>
                {/* <motion.p className="menu-text">Settings</motion.p> */}
            </motion.div>

        </motion.div>
    )
}

export default Menu