// external
import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { useHelper } from "@react-three/drei"
import * as THREE from 'three'

// internal
const MovingLight = () => {
    const ref = useRef<any>();
  
    const spot = useRef<any>()
    // useHelper(spot, THREE.SpotLightHelper, "red")
    useFrame(({ camera }) => {
      spot.current.target.position.set(0, 0, 0)
      var vec = new THREE.Vector3(0, -4, 16)
      vec.applyQuaternion(camera.quaternion)
      console.log(vec)
      ref.current.position.copy(vec)  
    });
  
    return (
      <group ref={ref} >
        <spotLight 
          position={[0, 3, 0]} 
          ref={spot}
          intensity={6} 
          castShadow
          angle={.05}
          penumbra={0.2}
          distance={30}
        />
            <mesh position={[1, 2, 0]}>
                <sphereGeometry args={[0.08, 32, 32]} />
                <meshStandardMaterial color="red"/>
            </mesh>
      </group>
  
    );
  }

export default MovingLight