// DETECT USER SCROLL PROGRESS

// external imports
import { useState } from 'react'
import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import { BsHandIndex } from 'react-icons/bs' 

// internal imports
import useSectionStore from './useScrollState'

const ScrollHandler = () => {
    const { section, setSection} = useSectionStore()
    const scroll = useScroll()
    // const [section, set] = useState(0)
    const [sectionSettings, setSectionSettings] = useState({
        aboutClosed: false,
        projectsClosed: false,
        skillsClosed: false,

    })

    useFrame(() => {
        if (scroll.offset < 0.05 && scroll.offset > 0) {
            setSection(0)
        } else if (scroll.offset > .05 && scroll.offset < .4 && section != 1) {
            console.log("about")
            setSection(1)
        } else if (scroll.offset > .4 && scroll.offset < .65 && section != 2) {
            // scrollContext?.setScroll(false)
            console.log("projects")
            setSection(2)
        } else if (scroll.offset > .7 && scroll.offset < 1 && section != 3) {
            console.log("skills")
            useSectionStore.setState({section: 3})
        } 
    })

    return <></>
}

export default ScrollHandler