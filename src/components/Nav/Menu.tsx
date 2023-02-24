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
            // onClick={() => setMenuOpen(!menuOpen)}
            variants={container}
            initial="hidden"
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
                <motion.p className="menu-text">About</motion.p>
                <motion.p className="menu-text">Projects</motion.p>
                <motion.p className="menu-text">Skills</motion.p>
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