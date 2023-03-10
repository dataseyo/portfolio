import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useScrollContext } from '../../context/ScrollContext'

import './styles.css'

const Hero = () => {
  const [closed, setClosed] = useState(false)
  const closeHero = () => {
    setClosed(true)
  }

  const scroll = useScrollContext()

  return (
    <div className="hero__container" style={{zIndex: closed ? 0 : 6000}}>
        <div className="hero-background">
          <div className="hero-header">
            <h1 className="hero-title">Skills</h1>
            <IoMdClose className="hero-icon" onClick={() => closeHero()}/>
          </div>
            
        </div>
    </div>
  )
}

export default Hero