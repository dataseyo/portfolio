import { useEffect, useRef, useState } from "react"
import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

import { lerp } from "three/src/math/MathUtils"

import {Model} from '../../assets/three/Terrain1'
import {Tree} from '../../assets/three/Trees'

const Sphere = () => {
    // ROTATION LOGIC
    const centerRef = useRef<THREE.Group | undefined>()
    const scroll = useScroll()
    useFrame((state) => {
        if (centerRef.current) {
            centerRef.current.rotation.z = lerp(0, 6.28, scroll.offset)
        }
    })

    // INTERACTION LOGIC

    return (
        <>
        <Model/>
        <Tree/>
        </>
        // <group rotation={[-.5, 0, 0]} position={[0, -3.5, .5]} ref={centerRef}>
        //     <mesh position={[0, 0, 0]}>
        //         <circleGeometry args={[5, 64]}/>
        //         <meshStandardMaterial color="blue"/>
        //     </mesh>
        //     <mesh position={[0, 3, 0]} scale={0.5}> 
        //         <sphereGeometry />
        //         <meshStandardMaterial color="white"/>
        //     </mesh>
        //     <mesh position={[-4, 0, 0]} scale={0.5}> 
        //         <sphereGeometry />
        //         <meshStandardMaterial color="green"/>
        //     </mesh>
        //     <mesh position={[4, 0, 0]} scale={0.5}> 
        //         <sphereGeometry />
        //         <meshStandardMaterial color="purple"/>
        //     </mesh>
        //     <mesh position={[0, -3, 0]} scale={0.5}> 
        //         <sphereGeometry />
        //         <meshStandardMaterial color="orange"/>
        //     </mesh>

        // </group>
    )
}

export default Sphere