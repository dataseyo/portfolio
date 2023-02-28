// external imports
import { motion, AnimatePresence } from 'framer-motion'
import { BsHandIndex } from 'react-icons/bs' 

// internal imports
import useSectionStore from '../ScrollHandler/useScrollState'

const Content = () => {
    const { section } = useSectionStore()

    return (
        <div
            className="no-select"
            style={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
                zIndex: 1,
                pointerEvents: "none" 

            }}
        >
        {/* Section 0: Instructions */}
        {section == 0 &&
            <div 
                style={{
                    pointerEvents: "none", 
                    userSelect: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
            <AnimatePresence>
                <div
                    style={{
                        width: '100%', 
                        height: '100%',
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        position:"fixed",
                        
                }}
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "fixed",
                            top: "25%"
                        }}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                        >
                            <motion.div
                                animate={{ y: 10 }}
                                transition={{ ease: "linear", duration: 1, repeat: Infinity, repeatType: "reverse"}}
                            >
                                <BsHandIndex 
                                    style={{
                                        color: "white",
                                        fontSize: "2rem"
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                        <p
                            className="no-select"
                            style={{
                                color: "white",
                                overflowWrap: "break-word",
                                maxWidth: "clamp(300px, 350px, 450px)",
                                fontSize: "clamp(1rem, 1.3rem, 2rem)",
                                fontFamily: `'Raleway', sans-serif`,
                                fontWeight: 'bolder',
                            }}
                        >
                            Scroll to Navigate.
                        </p>
                    </div>
                </div>
            </AnimatePresence>
            </div>
        }

        {/* Section 1: About */}
        {section == 1 && 
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
                    {/* <h1 
                        style={{
                            color: "white",
                            alignSelf: "flex-start"
                        }} 
                    >
                            About
                    </h1> */}
                    <p
                        className="no-select"
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
            </AnimatePresence>
        }

        {/* Section 2: Projects */}
        {section == 2 &&
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
                {/* <h1 style={{color: "white"}}>Projects</h1> */}
                
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
                    Projects go here. 
                </p>
            </motion.div>
            </AnimatePresence>
        }

        {/* Section 3: Skills */}
        {section == 3 &&
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
                    <p
                        style={{
                            color: "white",
                            overflowWrap: "break-word",
                            maxWidth: "clamp(300px, 350px, 450px)",
                            fontSize: "clamp(1rem, 1.2rem, 2rem)",
                            fontFamily: `'Merriweather', serif`,
                            lineHeight: "clamp(1.8rem, 2rem, 2.5rem)"
                        }}
                    >
                        Skills go here.
                    </p>
                </motion.div>
            </AnimatePresence>
        }
    </div>
    )
}

export default Content