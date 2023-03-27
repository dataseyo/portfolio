import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFBO } from '@react-three/drei'
import { useFrame, createPortal } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'

// internal
import Sun from '../shaders/sun/Sun'
import Test from '../shaders/test/Test'

const Portal = () => {
    const renderTarget = useFBO()
    const portal = useRef<any>()
    const portalScene = new THREE.Scene()
    const otherCamera = useRef<any>()

    useFrame((state) => {
        const {gl, camera, scene} = state
        otherCamera.current.matrixWorldInverse.copy(camera.matrixWorldInverse);

        gl.setRenderTarget(renderTarget)
        gl.render(portalScene, otherCamera.current)

        portal.current.material.map = renderTarget.texture;
        gl.setRenderTarget(null);

    })
        return (
            <>
                <PerspectiveCamera manual ref={otherCamera} aspect={1 / 2} zoom={1}/>
                <mesh position={[5, .5, -1.5]} rotation={[0, Math.PI/2, 0]} ref={portal}>
                    <planeGeometry args={[1, 2]}/>
                    <meshBasicMaterial color="white" side={THREE.DoubleSide}/>
                </mesh>
                {createPortal(
                    <>
                        {/* <Sky sunPosition={[10, 10, 0]} />
                        <Environment preset="sunset" /> */}
        <ambientLight intensity={1} color={"#435058"}/>
 
                        {/* <Sun/> */}
                        <Test/>
                        <color attach="background" args={["#262837"]} />

                    {/* <mesh position={[0, 1.1, 0]}>
                        <dodecahedronGeometry args={[.2]} />
                        <meshPhysicalMaterial
                        roughness={0}
                        clearcoat={1}
                        clearcoatRoughness={0}
                        color="#73B9ED"
                        />
                    </mesh> */}
                    </>,
                    portalScene
                )}
            </>
        )
}

export default Portal