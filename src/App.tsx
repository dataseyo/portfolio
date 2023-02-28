// @ts-nocheck
// REACT IMPORTS
import React, { Suspense, useState } from 'react'

// THREE IMPORTS
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, ScrollControls, Scroll } from '@react-three/drei'
import { ScrollHtml } from '@react-three/drei/web/ScrollControls'

// PROJECT IMPORTS
import './App.css'
import {
  Nav,
  About,
  Projects,
  Hero,
  Scene
} from './components'
import {
  ScrollHandler,
  LoaderScreen
} from './core'
import {
  ScrollContextProvider
} from './context/ScrollContext'
import Horizon from './assets/three/Horizon'
import Sun from './assets/shaders/Sun'
import { Content } from './core'

// CAMERA
const Camera = () => {
  const { camera } = useThree()
  camera.lookAt(0, 0, 0)
  return <></>
}

// APP
function App() {
  const [modalsOpen, setModalsOpen] = useState({
    aboutModal: false,
    projectsModal: false,
    skillsModal: false
  })

  return (
    <div className="App">    
      {/* Navigation */}
      <Nav setModalsOpen={setModalsOpen} modalsOpen={modalsOpen}/>

      {/* Main Content */}
      <Content/>

      {/* Content Modals */}
      {/* {<About modalsOpen={modalsOpen} setModalsOpen={setModalsOpen}/>} */}
      {/* {modalsOpen.projectsModal && <About/>}
      {modalsOpen.skillsModal && <About/>} */}

      {/* Loader */}
      <LoaderScreen />

      <ScrollContextProvider>
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 100,
            position: [0, -4, 3],
            // zoom: 2.5
          }}
        >
          {/* <axesHelper /> */}
          {/* <OrbitControls /> */}
          <ambientLight color="white"/>
          <color attach="background" args={["black"]} id="controls"/>
          <Camera/>
          <ScrollControls pages={4}>
            <Sun/>
            <Scene />
            <Scroll 
              html
              style={{ 
                position: "fixed",
                top: 0,
                width: '100%', 
                height: "100%",
                overscrollBehavior: "contain",
                overflow: "auto"
              }}
            >
              <ScrollHandler/>
            </Scroll>
          </ScrollControls>

          {/* HORIZON AND FOG */}
          <Horizon/>
          <fog attach="fog" args={['#262837', 2, 9.7]} />
          <color attach="background" args={["#262837"]} />
      </Canvas>
    </ScrollContextProvider>
  </div>

  )
}

export default App



