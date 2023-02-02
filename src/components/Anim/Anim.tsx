          {/* <motion.h1
            initial="hidden"
            animate={menuOpen ? "hidden" : "visible"}
            variants={sentence}
            ref={titleRef}
            style={{color: "white"}}
          >
            {titleString.split("").map((char, index) => {
              return (
                <motion.span variants={letter} key={char + "-" + index}>{char}</motion.span>
              )
            })}
        </motion.h1> */}

        const sentence = {
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.5,
                staggerChildren: 0.06
              }
            }
          }
          const letter = {
            hidden: { opacity: 0, y: 500, x: -10},
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
        