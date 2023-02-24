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
import './styles.css'
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
            // scrollContext?.setScroll(true)
            console.log("about")
            // useSectionStore.setState({section: 1})
            setSection(1)
            // console.log(useSectionStore.getState())
        } else if (scroll.offset > .4 && scroll.offset < .65 && section != 2) {
            // scrollContext?.setScroll(false)
            console.log("projects")
            setSection(2)
            // useSectionStore.setState({section: 2})
            // console.log(useSectionStore.getState())

        } else if (scroll.offset > .7 && scroll.offset < 1 && section != 3) {
            console.log("skills")
            useSectionStore.setState({section: 3})
            // console.log(useSectionStore.getState())
        } 
    })

    return <></>

    // return (
    //     <div
    //         style={{
    //             display: "flex",
    //             justifyContent: "center",
    //             alignItems: "center",
    //             width: "100%",
    //             height: "100%",
    //             overflow: "hidden",
    //             overscrollBehavior: "contain"

    //         }}
    //     >
    //         {/* Section 0: Instructions */}
    //         {section == 0 &&
    //             <div 
    //                 style={{
    //                     pointerEvents: "none", 
    //                     userSelect: "none",
    //                     display: "flex",
    //                     justifyContent: "center",
    //                     alignItems: "center",
    //                     width: "100%",
    //                     height: "100%"
    //                 }}>
    //             <AnimatePresence>
    //                 <div
    //                     className="test"
    //                     style={{
    //                         width: '100%', 
    //                         height: '100%',
    //                         display: "flex",
    //                         justifyContent: "center",
    //                         alignItems: "center",
    //                         flexDirection: "column",
    //                         position:"fixed",
                            
    //                 }}
    //                 >
    //                     <div
    //                         style={{
    //                             display: "flex",
    //                             flexDirection: "column",
    //                             justifyContent: "center",
    //                             alignItems: "center",
    //                             position: "fixed",
    //                             top: "25%"
    //                         }}
    //                     >
    //                         <motion.div
    //                             initial={{ opacity: 0, y: -10 }}
    //                             animate={{ opacity: 1, y: 0 }}
    //                             exit={{ opacity: 0, y: -10 }}
    //                         >
    //                             <motion.div
    //                                 animate={{ y: 10 }}
    //                                 transition={{ ease: "linear", duration: 1, repeat: Infinity, repeatType: "reverse"}}
    //                             >
    //                                 <BsHandIndex 
    //                                     style={{
    //                                         color: "white",
    //                                         fontSize: "2rem"
    //                                     }}
    //                                 />
    //                             </motion.div>
    //                         </motion.div>
    //                         <p
    //                             className="no-select"
    //                             style={{
    //                                 color: "white",
    //                                 overflowWrap: "break-word",
    //                                 maxWidth: "clamp(300px, 350px, 450px)",
    //                                 fontSize: "clamp(1rem, 1.3rem, 2rem)",
    //                                 fontFamily: `'Raleway', sans-serif`,
    //                                 fontWeight: 'bolder',
    //                             }}
    //                         >
    //                             Scroll to Navigate.
    //                         </p>
    //                     </div>
    //                 </div>
    //             </AnimatePresence>
    //             </div>
    //         }

    //         {/* Section 1: About */}
    //         {section == 1 && !sectionSettings.aboutClosed && 
    //             <AnimatePresence
    //             >
    //                 <motion.div
    //                     initial={{ opacity: 0, y: -10 }}
    //                     animate={{ opacity: 1, y: 0 }}
    //                     exit={{ opacity: 0, y: -10 }}
    //                     style={{
    //                         width: '100%', 
    //                         height: '100%',
    //                         display: "flex",
    //                         justifyContent: "center",
    //                         alignItems: "center",
    //                         flexDirection: "column"
    //                 }}
    //                 >
    //                     {/* <h1 
    //                         style={{
    //                             color: "white",
    //                             alignSelf: "flex-start"
    //                         }} 
    //                     >
    //                             About
    //                     </h1> */}
    //                     <p
    //                         style={{
    //                             color: "white",
    //                             overflowWrap: "break-word",
    //                             maxWidth: "clamp(300px, 350px, 450px)",
    //                             fontSize: "clamp(1rem, 1.2rem, 3rem)",
    //                             fontFamily: `'Merriweather', serif`,
    //                             lineHeight: "clamp(1.8rem, 2rem, 2.5rem)"
    //                         }}
    //                     >
    //                         I'm a full stack engineer with a background in high energy physics and philosophy of science.
    //                     </p>
    //                 </motion.div>
    //             </AnimatePresence>
    //         }

    //         {/* Section 2: Projects */}
    //         {section == 2 && !sectionSettings.projectsClosed &&
    //             <AnimatePresence
    //             >
    //             <motion.div
    //                 initial={{ opacity: 0, y: -10 }}
    //                 animate={{ opacity: 1, y: 0 }}
    //                 exit={{ opacity: 0, y: -10 }}
    //                 style={{
    //                     width: '100%', 
    //                     height: '100%',
    //                     display: "flex",
    //                     justifyContent: "center",
    //                     alignItems: "center",
    //                     flexDirection: "column"
    //                 }}
    //             >
    //                 {/* <h1 style={{color: "white"}}>Projects</h1> */}
                    
    //                 <p
    //                     style={{
    //                         color: "white",
    //                         overflowWrap: "break-word",
    //                         maxWidth: "clamp(300px, 350px, 450px)",
    //                         fontSize: "clamp(1rem, 1.2rem, 3rem)",
    //                         fontFamily: `'Merriweather', serif`,
    //                         lineHeight: "clamp(1.8rem, 2rem, 2.5rem)"
    //                     }}
    //                 >
    //                     Projects go here. 
    //                 </p>
    //             </motion.div>
    //             </AnimatePresence>
    //         }

    //         {/* Section 3: Skills */}
    //         {section == 3 && !sectionSettings.skillsClosed &&
    //             <AnimatePresence
    //             >
    //                 <motion.div
    //                     initial={{ opacity: 0, y: -10 }}
    //                     animate={{ opacity: 1, y: 0 }}
    //                     exit={{ opacity: 0, y: -10 }}
    //                     style={{
    //                         width: '100%', 
    //                         height: '100%',
    //                         display: "flex",
    //                         justifyContent: "center",
    //                         alignItems: "center"
    //                     }}
    //                 >
    //                     <p
    //                         style={{
    //                             color: "white",
    //                             overflowWrap: "break-word",
    //                             maxWidth: "clamp(300px, 350px, 450px)",
    //                             fontSize: "clamp(1rem, 1.2rem, 2rem)",
    //                             fontFamily: `'Merriweather', serif`,
    //                             lineHeight: "clamp(1.8rem, 2rem, 2.5rem)"
    //                         }}
    //                     >
    //                         Skills go here.
    //                     </p>
    //                 </motion.div>
    //             </AnimatePresence>
    //         }
    //     </div>
    // )
}

export default ScrollHandler