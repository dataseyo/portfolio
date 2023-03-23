// external
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BsHandIndex } from 'react-icons/bs' 

// internal
import useSectionStore from '../../state/useDragState'
import './styles.css'

const Content = () => {
    const { angle, section } = useSectionStore()
  return (
    <div 
        // className="content__container"
        className="no-select"
        style={{
            position: "fixed",
            top: "15%",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 100,
            pointerEvents: "none" ,
            width: "100%",
            boxSizing: "border-box",
            textAlign: "center",
        }}
    >
        {/* SECTION 0 */}
        {section == 0 && 
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
            >
                <motion.div
                    initial={{x: -10}}
                    animate={{ x: 10 }}
                    transition={{ ease: "linear", duration: 1.2, repeat: Infinity, repeatType: "reverse"}}
                    style={{textAlign: "center"}}
                >
                    <BsHandIndex 
                        style={{
                            color: "white",
                            fontSize: "2rem"
                        }}
                    />
                </motion.div>
                <p
                    style={{
                        color: "white",
                        overflowWrap: "break-word",
                        fontSize: "clamp(1rem, 1.3rem, 2rem)",
                        fontFamily: `'Raleway', sans-serif`,
                        fontWeight: 'bolder',
                    }}
                >
                    Drag to navigate.
                </p>
            </motion.div>
        }

        {/* SECTION 1 */}
        {section == 1 && 
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
                <p
                    style={{
                        color: "white",
                        overflowWrap: "break-word",
                        maxWidth: "clamp(300px, 350px, 450px)",
                        fontSize: "clamp(1rem, 1.2rem, 3rem)",
                        fontFamily: `'Merriweather', serif`,
                        lineHeight: "clamp(1.8rem, 2rem, 2.5rem)"
                    }}
                >
                    I'm a full stack engineer with a background in high energy physics and philosophy of science.
                </p>
        </motion.div>
        }

        {/* SECTION 2 */}
        {section == 2 && 
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
                <p
                    style={{
                        color: "white",
                        overflowWrap: "break-word",
                        maxWidth: "clamp(300px, 350px, 450px)",
                        fontSize: "clamp(1rem, 1.2rem, 3rem)",
                        fontFamily: `'Merriweather', serif`,
                        lineHeight: "clamp(1.8rem, 2rem, 2.5rem)"
                    }}
                >
                    I enjoy climbing, powerlifting, and sour patch kids.
                </p>
        </motion.div>
        }

        {/* SECTION 3 */}
        {section == 3 && 
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
                <p
                    style={{
                        color: "white",
                        overflowWrap: "break-word",
                        maxWidth: "clamp(300px, 350px, 450px)",
                        fontSize: "clamp(1rem, 1.2rem, 3rem)",
                        fontFamily: `'Merriweather', serif`,
                        lineHeight: "clamp(1.8rem, 2rem, 2.5rem)"
                    }}
                >
                    My work spans from computational modeling and machine learning to full stack development and 3D scene creation.
                </p>
        </motion.div>
        }

        {/* SECTION 4 */}
        {section == 4 && 
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
                <p
                    style={{
                        color: "white",
                        overflowWrap: "break-word",
                        maxWidth: "clamp(300px, 350px, 450px)",
                        fontSize: "clamp(1rem, 1.2rem, 3rem)",
                        fontFamily: `'Merriweather', serif`,
                        lineHeight: "clamp(1.8rem, 2rem, 2.5rem)"
                    }}
                >
                    I use React with typescript, Python, Node, C++, and other tools and languages to build applications. 
                </p>
        </motion.div>
        }

        {/* SECTION 5 */}
        {section == 5 && 
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
                <p
                    style={{
                        color: "white",
                        overflowWrap: "break-word",
                        maxWidth: "clamp(300px, 350px, 450px)",
                        fontSize: "clamp(1rem, 1.2rem, 3rem)",
                        fontFamily: `'Merriweather', serif`,
                        lineHeight: "clamp(1.8rem, 2rem, 2.5rem)"
                    }}
                >
                    This site is still under construction.
                </p>
        </motion.div>
        }
    </div>
  )
}

export default Content