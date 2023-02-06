// REACT
import React, { useRef } from "react";

// THREE
import { useThree, useFrame } from "@react-three/fiber";
import { Group } from "three";

// PROJECT
import Frame from "./Frame";
import Mask from "./Mask";
import Object from "./Object";
import {SceneProp} from './Example'

const FrameScene = () => {
    const ref = useRef<Group | null>(null)

    // VIEWPORT SIZE
    const { width, height } = useThree((state) => state.viewport)

    useFrame((state) => {
        const { clock } = state
        const time = clock.getElapsedTime()
        if (ref.current) {
            ref.current.rotation.y = Math.sin(time) * 0.2
            ref.current.rotation.z = Math.sin(time) * 0.2 - 0.05
        }
    })
    
    return (
        <group ref={ref}  scale={[width / 6, height / 5, 1]} rotation={[1, 0, 0]}>
            <Frame/>
            <Mask stencilRef={1} position={[0, 0, 0.95]}/>

            <Object 
                scale={1}
                position={[0, -0.4, 0]}
                stencilRef={1}
            />
        </group>
    )
}

export default FrameScene