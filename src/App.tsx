// REACT IMPORTS
import React, { Suspense } from 'react'

// THREE IMPORTS
import { Canvas, useThree } from '@react-three/fiber'
import { Loader, useProgress, OrbitControls, ScrollControls, Scroll, Environment } from '@react-three/drei'

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


// CAMERA
const Camera = () => {
  const { camera } = useThree()
  camera.lookAt(0, 0, 0)
  return <></>
}

// APP
function App() {
  return (
    <div className="App">
      <LoaderScreen />
      <ScrollContextProvider>
      <Nav />
      {/* <Suspense fallback={<LoaderScreen/>}> */}
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [0, -4, 3],
            // zoom: 2.5
          }}
        >

          {/* <axesHelper /> */}
          {/* <OrbitControls
            position={[0, 0, 0]}
            maxDistance={4}
            minDistance={1}
            enableZoom={false}
            enableRotate={false}
            minAzimuthAngle={0}
            maxAzimuthAngle={Math.PI / 2}
          /> */}
          <ambientLight color="white"/>
          <Environment preset="studio"/>
          <color attach="background" args={["black"]} />
          <Camera/>
          <ScrollControls pages={3} damping={0.1} style={{scrollbarWidth: "none", color: "black"}}>
            {/* MODELS */}
            <Particles />
            <Scene />
            {/* <Scroll style={{height: "100vh"}}>

            </Scroll> */}

            {/* REACT | HTML */}
            {/* <Scroll html style={{width: '100%', scrollSnapStop: "always"}}>
                <Hero/>  
                <About/>
                <Projects/>
            </Scroll> */}
            <ScrollHandler/>
          </ScrollControls>

          
      </Canvas>
    {/* </Suspense> */}
    {/* <Loader/> */}
    </ScrollContextProvider>

    </div>

  )
}

export default App



