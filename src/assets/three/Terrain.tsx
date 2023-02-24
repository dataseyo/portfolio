// external imports
import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useScroll, useHelper } from '@react-three/drei'
import { useFrame } from "@react-three/fiber"
import { lerp } from "three/src/math/MathUtils"
// import * as THREE from 'three'

// internal imports
import { Climb } from './Climb'
import { Seat } from './Seat'
import useScreenSize from '../../hooks/useScreenSize'

export function Terrain() {
  const scroll = useScroll()
  const centerRef = useRef<any>()

  // LIGHT
  const lightRef = useRef<any>()
  // useHelper(lightRef, THREE.SpotLightHelper, 'cyan')

  // update scroll
  const {width, height} = useScreenSize()
  useFrame((state) => {
    const { camera } = state
    if (centerRef.current) {
      centerRef.current.rotation.y = lerp(0, 6.28, scroll.offset)
      // centerRef.current.rotation.y = lerp(0, scroll.offset, 6)
      // console.log(centerRef.current.rotation.y)
    }

    // spotlight target
    if (lightRef.current) {
      lightRef.current.target.position.y = -3
      lightRef.current.target.updateMatrixWorld()

      if (width && width < 450) {
        lightRef.current.angle = 0.4
      } 
    }
  
    
  })

  const { nodes, materials } = useGLTF('/terrain-transformed.glb')
  const {
    Circle,
    Cube_1,
    Cube_2,
    Icosphere,
    Icosphere001,
    Icosphere002,
    Icosphere003,
    Icosphere004,
    Icosphere009_1,
    Icosphere009_2,
    Icosphere009_3,
    Icosphere009_4,
    Icosphere009_5,
    Icosphere009_6,
    Icosphere005,
    Icosphere008,
    Icosphere016,
    Icosphere016_1,
    Icosphere016_2,
    Icosphere016_3,
    Icosphere016_4,
    Icosphere016_5,
    Icosphere006,
    Cube001_1,
    Cube001_2
  }: any = nodes
  return (
    <>
    <group dispose={null} position={[0, -3.8, 2.5]} rotation={[(Math.PI / 180) * 50, 0, 0]} ref={centerRef}>
      {/* Light */}
      <spotLight 
        position={[0, 0.5, 0]} 
        intensity={2} 
        ref={lightRef} 
        castShadow
        angle={0.5}
        penumbra={0.4}
        distance={4}
      />

      {/* WALL */}
      <Climb/>

      {/* Benches */}
      <Seat position={[.3, 0, -.3]} rotation={[0, -1.35, 0]}/>
      <Seat position={[.45, 0, -.2]} rotation={[0, 0, 0]}/>
      <Seat position={[.35, 0, -.225]} rotation={[0, -.72, 0]}/>

      {/* TERRAIN */}
      <mesh geometry={Circle.geometry} material={materials['base.001']} receiveShadow/>
      <group position={[0.32, 0.04, -0.81]} rotation={[-0.01, -0.14, -0.06]} scale={-0.01}>
        <mesh geometry={Cube_1.geometry} material={materials['Material.001']} />
        <mesh geometry={Cube_2.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-0.68, 0.12, -0.35]} rotation={[3.06, -1.14, 3.02]} scale={-0.01}>
        <mesh geometry={Cube_1.geometry} material={materials['Material.001']} />
        <mesh geometry={Cube_2.geometry} material={materials['Material.002']} />
      </group>
      <group position={[0.49, 0.08, 0.39]} rotation={[3.02, -0.43, 3.1]} scale={-0.01}>
        <mesh geometry={Cube_1.geometry} material={materials['Material.001']} />
        <mesh geometry={Cube_2.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-0.25, 0.06, 0.59]} rotation={[2.96, -0.73, 2.98]} scale={-0.01}>
        <mesh geometry={Cube_1.geometry} material={materials['Material.001']} />
        <mesh geometry={Cube_2.geometry} material={materials['Material.002']} />
      </group>
      <group position={[0.23, 0.04, -0.72]} rotation={[-2.95, -0.76, -3.07]} scale={-0.01}>
        <mesh geometry={Cube001_1.geometry} material={materials['Material.001']} />
        <mesh geometry={Cube001_2.geometry} material={materials['Material.002']} />
      </group>
      <group position={[0.16, 0.07, -0.77]} rotation={[0.01, 0.16, 0]} scale={-0.01}>
        <mesh geometry={Cube001_1.geometry} material={materials['Material.001']} />
        <mesh geometry={Cube001_2.geometry} material={materials['Material.002']} />
      </group>
      <group position={[-0.81, 0.01, -0.25]} rotation={[3.11, -0.41, 3.07]} scale={-0.01}>
        <mesh geometry={Cube001_1.geometry} material={materials['Material.001']} />
        <mesh geometry={Cube001_2.geometry} material={materials['Material.002']} />
      </group>
      <mesh geometry={Icosphere.geometry} material={Icosphere.material} position={[-0.17, 0.01, -0.48]} rotation={[0.46, 0.07, 0.23]} scale={0.02} />
      <mesh geometry={Icosphere001.geometry} material={Icosphere001.material} position={[-0.14, 0, -0.52]} rotation={[-2.98, 1.4, 2.4]} scale={[0.02, 0.03, 0.04]} />
      <mesh geometry={Icosphere002.geometry} material={Icosphere002.material} position={[-0.22, 0.03, -0.51]} rotation={[1.94, 1.4, 2.4]} scale={[0.02, 0.03, 0.04]} />
      <mesh geometry={Icosphere003.geometry} material={Icosphere003.material} position={[0.57, 0.07, 0.36]} rotation={[-0.4, 0.14, -0.17]} scale={0.02} />
      <mesh geometry={Icosphere004.geometry} material={Icosphere004.material} position={[0.58, 0.06, 0.32]} rotation={[0.12, -0.16, -0.26]} scale={0.01} />
      <group position={[-0.21, 0.15, 0.62]} scale={0.02}>
        <mesh geometry={Icosphere009_1.geometry} material={materials['Material.003']} />
        <mesh geometry={Icosphere009_2.geometry} material={materials['Material.002']} />
        <mesh geometry={Icosphere009_3.geometry} material={materials['Material.004']} />
        <mesh geometry={Icosphere009_4.geometry} material={materials['Material.002']} />
        <mesh geometry={Icosphere009_5.geometry} material={materials['Material.002']} />
        <mesh geometry={Icosphere009_6.geometry} material={materials['Material.002']} />
      </group>
      <mesh geometry={Icosphere005.geometry} material={Icosphere005.material} position={[-0.79, 0.07, -0.03]} rotation={[1.47, 1.3, 0.52]} scale={[0.04, 0.05, 0.06]} />
      <mesh geometry={Icosphere006.geometry} material={Icosphere006.material} position={[-0.79, 0, 0.09]} scale={0.02} />
      <mesh geometry={Icosphere008.geometry} material={Icosphere008.material} position={[-0.86, 0, 0.24]} scale={0.03} />
      <group position={[-0.87, 0.09, 0.19]} rotation={[0, -1.19, 0]} scale={0.03}>
        <mesh geometry={Icosphere016.geometry} material={materials['Material.003']} />
        <mesh geometry={Icosphere016_1.geometry} material={materials['Material.002']} />
        <mesh geometry={Icosphere016_2.geometry} material={materials['Material.004']} />
        <mesh geometry={Icosphere016_3.geometry} material={materials['Material.002']} />
        <mesh geometry={Icosphere016_4.geometry} material={materials['Material.002']} />
        <mesh geometry={Icosphere016_5.geometry} material={materials['Material.002']} />
      </group>
    </group>
    </>
  )
}

useGLTF.preload('/terrain-transformed.glb')
