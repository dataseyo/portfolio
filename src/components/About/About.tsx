import React from 'react'

import './styles.css'
import { Card } from '../../core'

const About = () => {
    return (
        <div className="about__container" key={1} id="about">
            <div className="about-content">
                <h1 className="about-title">About</h1>
                <p className="about-text">Content here...</p>
            </div>
        </div>
    )
}

export default About