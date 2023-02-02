import React from 'react'
import { motion } from 'framer-motion'
import { FaBars } from 'react-icons/fa'

import './styles.css'
import { MenuButton } from './MenuButton'

const close = {
    hidden: { x: 0},
    show: { x: -10}
}

const open = {
    hidden: { x: -10},
    show: { x: 0}
}

type Props = {
    menuOpen: boolean,
    setMenuOpen: (value: React.SetStateAction<boolean>) => void 
}

const Menu = ({menuOpen, setMenuOpen} : Props) => {
  return (
    <motion.div 
        className="menu__container"
        animate={menuOpen ? "hidden" : "show"}
        initial="hidden"
        onClick={() => setMenuOpen(!menuOpen)}
    >
        {/* <FaBars className="menu-icon"/> */}
        <motion.div className="menu-icon">
           <MenuButton
            isOpen={menuOpen}
            // onClick={() => setMenuOpen(!menuOpen)}
            color="white"
            width="30"
            height="20"
            />
        </motion.div>
        {
            menuOpen ? 
            <motion.p className="menu-text" variants={close}>close</motion.p>
            :
            <motion.p className="menu-text" variants={open}>menu</motion.p>

        }
    </motion.div>
  )
}

export default Menu