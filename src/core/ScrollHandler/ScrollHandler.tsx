// external imports
import { useState } from 'react'
import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { motion, AnimatePresence } from 'framer-motion'
import { BsHandIndex } from 'react-icons/bs' 

// internal imports
import { 
    About,
    Projects,
    Skills,
    Hero 
} from '../../components'

const ScrollHandler = () => {
    const scroll = useScroll()
    const [section, setSection] = useState(0)
    const [sectionSettings, setSectionSettings] = useState({
        aboutClosed: false,
        projectsClosed: false,
        skillsClosed: false,

    })

    useFrame(() => {
        if (scroll.offset < 0.05 && scroll.offset > 0) {
            setSection(0)
        } else if (scroll.offset > .05 && scroll.offset < .4 && section != 1) {
            // scrollContext?.setScroll(true)
            console.log("about")
            setSection(1)
        } else if (scroll.offset > .4 && scroll.offset < .65 && section != 2) {
            // scrollContext?.setScroll(false)
            console.log("projects")
            setSection(2)
        } else if (scroll.offset > .7 && scroll.offset < 1 && section != 3) {
            console.log("skills")
            setSection(3)
        } 
    })

    return (
        <>
            {/* Section 0: Instructions */}
            {section == 0 && 
                <AnimatePresence>
                    <div
                        style={{
                            width: '100%', 
                            height: '100%',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                    }}
                    >
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        <motion.div
                            animate={{ y: 10 }}
                            transition={{ ease: "linear", duration: 1, repeat: Infinity, repeatType: "reverse", }}
                        >
                            <BsHandIndex 
                                style={{
                                    color: "white",
                                    fontSize: "2rem"
                                }}
                            />
                        </motion.div>
                    </motion.div>
                    <p style={{color: "white"}}>Scroll to Navigate</p>
                    </div>
                </AnimatePresence>
            }

            {/* Section 1: About */}
            {section == 1 && !sectionSettings.aboutClosed && 
                <AnimatePresence
                >
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        style={{
                            width: '100%', 
                            height: '100%',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                    }}
                    >
                        <h1 style={{color: "white"}} onClick={() => scroll.offset += 0.2}>About</h1>
                        <p style={{color: "white", overflowWrap: "break-word", maxWidth: "clamp(300px, 350px, 450px)"}}>
                            I'm a full stack engineer with a background in high energy physics and philosophy of science.
                        </p>
                    </motion.div>
                </AnimatePresence>
            }

            {/* Section 2: Projects */}
            {section == 2 && !sectionSettings.projectsClosed &&
                <AnimatePresence
                >
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    style={{
                        width: '100%', 
                        height: '100%',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    }}
                >
                    <h1 style={{color: "white"}}>Projects</h1>
                </motion.div>
                </AnimatePresence>
            }

            {/* Section 3: Skills */}
            {section == 3 && !sectionSettings.skillsClosed &&
                <AnimatePresence
                >
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        style={{
                            width: '100%', 
                            height: '100%',
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <h1 style={{color: "white"}}>Skills</h1>
                    </motion.div>
                </AnimatePresence>
            }
        </>
    )
}

export default ScrollHandler