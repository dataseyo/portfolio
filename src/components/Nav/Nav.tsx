// REACT
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { FaBars } from 'react-icons/fa'
import { motion } from 'framer-motion'

// PROJECT
import './styles.css'
import { useScrollContext } from '../../context/ScrollContext'

const Nav = () => {
  const scrollContext = useScrollContext()

  const titleRef = useRef<HTMLDivElement>(null)
  const titleString = "Zachary Shifrel"
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08
      }
    }
  }
  const letter = {
    hidden: { opacity: 0, y: 50, x: -10},
    visible: {
      opacity: 1,
      y: 0,
      x: 0
    },
    transition: {
      type: "spring",
      damping: 10,
      mass: 0.75,
      stiffness: 100,
    }
  }

  useEffect(() => {
    const handleScroll = (event: any) => {
      console.log(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav__container ${scrollContext?.scroll ? "nav-scroll" : null}`}>
        <div className="nav-title">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={sentence}
          ref={titleRef}
          style={{color: "white"}}
          
        >
          {titleString.split("").map((char, index) => {
            return (
              <motion.span variants={letter} key={char + "-" + index}>{char}</motion.span>
            )
          })}
      </motion.h1>
      </div>
        <div className="nav-menu">
            <FaBars className="nav-menu-icon"/>
        </div>
    </div>
  )
}

export default Nav