import { useEffect, useRef, useState } from "react"
import { useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

import { lerp } from "three/src/math/MathUtils"

import {Terrain} from '../../assets/three/Terrain'

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
            <Terrain/>
        </>
    )
}

export default Sphere