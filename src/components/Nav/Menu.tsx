import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import './styles.css'
import { MenuButton } from './MenuButton'

const contentVariant = {
    hidden: {
        opacity: 0,
        x: 50
    },
    show: {
        opacity: 1,
        x: 0
    }
}

const container = {
    hidden: {  },
    show: {
        // rotate: 360,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
}


type Props = {
    menuOpen: boolean,
    setMenuOpen: (value: React.SetStateAction<boolean>) => void 
}

const Menu = ({menuOpen, setMenuOpen} : Props) => {
  return (
    <motion.div 
        className="menu__container"
        animate={menuOpen ? "show" : "hidden"}
        onClick={() => setMenuOpen(!menuOpen)}
        variants={container}
        initial="hidden"
    >

        {/* MENU ICON */}
        <motion.div className="menu-icon">
           <MenuButton
                isOpen={menuOpen}
                // onClick={() => setMenuOpen(!menuOpen)}
                color="white"
                width="30"
                height="20"
            />
        </motion.div>

        {/* MENU DESCRIPTION */}
        {/* {
            menuOpen ? 
            <motion.p className="menu-text">close</motion.p>
            :
            <motion.p className="menu-text">menu</motion.p>

        } */}


        {/* MENU CONTENT */}
        <motion.div variants={contentVariant} className="menu-content">
            <motion.p className="menu-text">About</motion.p>
            <motion.p className="menu-text">Projects</motion.p>
            <motion.p className="menu-text">Contact</motion.p>
            {/* <motion.p className="menu-text">Settings</motion.p> */}
        </motion.div>

    </motion.div>
  )
}

export default Menu