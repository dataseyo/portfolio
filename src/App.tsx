// external
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import { useRef, Suspense } from 'react'
import * as THREE from 'three'

// internal
import './App.css'
import { 
  Scene,
  Lantern
} from './models'
import { 
  Content,
  LoaderScreen,
  Nav
} from './components'
import Sun from './shaders/sun/Sun'
import DragHandler from './utils/DragHandler'

const Camera = () => {
  const { camera } = useThree()

  useFrame((state) => {
    // console.log(camera.rotation)
    // console.log(state)
    const { clock } = state
    const delta = clock.getElapsedTime()
    // camera.rotation.y += delta * 0.001
    // camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()
  })

  console.log(camera)

  return <></>
}

function App() {
  const controlsRef = useRef<any>()
  return (
    <div className="App">
      <Nav/>
      <Content/>
      <LoaderScreen/>

      <Canvas
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [0, 2, 0],
          zoom: 0.9
        }} 
      >
        {/* CONFIG */}
        <Camera/>
        <ambientLight intensity={1} color={"#435058"}/>
        <DragHandler/>
        <Preload all />

        <OrbitControls 
          makeDefault
          target={[0, 1, 0]}
          maxPolarAngle={1.55}
          minPolarAngle={1.55}
          enableZoom={false}
          enablePan={false}
          />
        {/* <OrbitControls    /> */}


        {/* MODELS */}
        <Scene/>
        <Lantern/>
        <Preload all />

        {/* <Light/> */}
        {/* <Sun/> */}

        {/* HORIZON AND FOG */}
        <fog attach="fog" args={['#262837', 5, 12]} />
        <color attach="background" args={["#262837"]} />
      </Canvas>
    </div>
  )
}

export default App
