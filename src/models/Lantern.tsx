// external
import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from 'three'
import { useHelper, SpotLight } from "@react-three/drei"

// internal
import useSectionStore from '../state/useDragState'
import useScreenSize from "../hooks/useScreenSize"
import { lerp } from "three/src/math/MathUtils"

const Lantern = () => {
    const targetRef = useRef<any>()
    const target = new THREE.Object3D()

    const { section } = useSectionStore()
    const { width } = useScreenSize()

    const handleSpotlightSize = () => {
        if (width && width > 800) {
            return .5
        } else {
            return .35
        }
    }

    const handleLighting = () => {
        if (section == 3) { 
            return 1
        } else {
            return 3
        }
    }

    useFrame(({ camera }) => {
        var vec = new THREE.Vector3(0.1, 1, -3)
        vec.applyQuaternion(camera.quaternion)
        targetRef.current.position.copy(vec)  
    });

    return (
        <group position={[0, 0, 0]}>
            {/* <mesh ref={mesh}>
                <sphereGeometry args={[.05, 32, 32]} />
                <meshStandardMaterial color="red"/>
            </mesh> */}

            <SpotLight
                target={target}
                penumbra={0.7}
                radiusTop={0.06}
                radiusBottom={1}
                distance={10}
                angle={handleSpotlightSize()}
                attenuation={1}
                position={[0, 2.2, 0]}
                intensity={handleLighting()}
                // opacity={1}
            />

            <primitive ref={targetRef} object={target} position={[0, 0, -4]} />

        </group>
    )
}

export default Lantern