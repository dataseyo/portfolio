// REACT IMPORTS
import React, { Suspense, useState } from 'react'

// THREE IMPORTS
import { Canvas, useThree } from '@react-three/fiber'
import { OrbitControls, ScrollControls, Scroll, Environment } from '@react-three/drei'

// PROJECT IMPORTS
import './App.css'
import {
  Nav,
  About,
  Projects,
  Particles,
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

// CAMERA
const Camera = () => {
  const { camera } = useThree()
  camera.lookAt(0, 0, 0)
  return <></>
}



// APP
function App() {
  const [location, setLocation] = useState("")

  return (
    <div className="App">
      <LoaderScreen />

      {/* CONTENT 
      */}
      {/* <Hero/>   */}


      <ScrollContextProvider>
      <Nav />
      {/* <Suspense fallback={<LoaderScreen/>}> */}
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
          <ambientLight color="white"/>
          {/* <Environment preset="studio"/> */}
          <color attach="background" args={["black"]} />
          <Camera/>
          <ScrollControls pages={1} damping={0.5} style={{scrollbarWidth: "none", color: "black"}}>
            {/* MODELS */}
            {/* <Particles /> */}
            <Scene />

            {/* REACT | HTML */}
            <Scroll html style={{width: '100%', height: '100%', scrollSnapStop: "always"}}>
              <ScrollHandler/>
            </Scroll>
            {/* <ScrollHandler/> */}
          </ScrollControls>

          {/* FLOATING ISLAND */}


          {/* HORIZON */}
          <Horizon/>
          <fog attach="fog" args={['#262837', 2, 11.5]} />
          <color attach="background" args={["#262837"]} />
      </Canvas>
      {/* </Suspense> */}
      {/* <Loader/> */}
    </ScrollContextProvider>
  </div>

  )
}

export default App



