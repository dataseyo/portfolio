// REACT IMPORTS
import React, { Suspense, useEffect } from 'react'

// THREE IMPORTS
import { Canvas, useThree } from '@react-three/fiber'
import { Loader, useProgress, OrbitControls, ScrollControls, Scroll, Environment } from '@react-three/drei'

// PROJECT IMPORTS
import './App.css'
import {
  Nav,
  About,
  Projects,
  Particles
} from './components'
import {
  ScrollHandler
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
  const { active, progress, errors, item, loaded, total } = useProgress()
  const LoaderScreen = () => {
    console.log(progress)
    return (
      <div>
        <h1 style={{color: "white"}}>Loading: {progress}</h1>
      </div>
    )
  }

  return (
    <div className="App">
      <ScrollContextProvider>
      <Nav />
      <Suspense fallback={<LoaderScreen/>}>
        <Canvas
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [0, -4, 3]
          }}
        >
          {/* <OrbitControls rotation={[-90, Math.PI, 0]}/> */}
          {/* <Environment 
            preset="city"
          /> */}
          <color attach="background" args={["black"]} />
          <Camera/>
          <ScrollControls pages={3} damping={0.1}>
            {/* MODELS */}
            <Particles />
            <Scroll>
            </Scroll>

            {/* REACT | HTML */}
            <Scroll html style={{width: '100%'}}>  
                <About/>
                <Projects/>
            </Scroll>
            <ScrollHandler/>
          </ScrollControls>

          
      </Canvas>
    </Suspense>
    <Loader/>
    </ScrollContextProvider>

    </div>

  )
}

export default App



