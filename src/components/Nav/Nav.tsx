// REACT
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'

// PROJECT
import './styles.css'
import { useScrollContext } from '../../context/ScrollContext'

const Nav = () => {
  const scrollContext = useScrollContext()

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
            <h1>Zachary Shifrel</h1>
        </div>

        <div className="nav-menu">
            <FaBars className="nav-menu-icon"/>
        </div>
    </div>
  )
}

export default Nav