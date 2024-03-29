/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 crashpads.glb -t -- --transform
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cube003_1: THREE.Mesh
    Cube003_2: THREE.Mesh
    Cube003_3: THREE.Mesh
    Cube: THREE.Mesh
    Cube005: THREE.Mesh
    Cube005_1: THREE.Mesh
    Cube005_2: THREE.Mesh
    Cube003: THREE.Mesh
  }
  materials: {
    pad1: THREE.MeshStandardMaterial
    pad2: THREE.MeshStandardMaterial
    pad3: THREE.MeshStandardMaterial
    WOOD: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
  }
}

export function Crashpads(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/crashpads.glb') as GLTFResult
  return (
    <group {...props} dispose={null} scale={0.36} position={[-7, 0, 9.2]} rotation={[0, -4, 0]}>
      
      <group rotation={[-.07, -1.5, 0]} position={[10, 0, -4]}>
      <group position={[5.25, 1.17, 4.82]} rotation={[0, 0, -Math.PI / 2]} scale={[0.11, 0.84, 1]}>
        <mesh geometry={nodes.Cube003_1.geometry} material={materials.pad1} />
        <mesh geometry={nodes.Cube003_2.geometry} material={materials.pad2} />
        <mesh geometry={nodes.Cube003_3.geometry} material={materials.pad3} />
      </group>
      <mesh geometry={nodes.Cube.geometry} material={materials.WOOD} position={[3.78, 1.79, 4.8]} rotation={[0, 0, 0.54]} scale={[-0.04, 1.02, 1.23]} />
      </group>
      
      <group position={[-2.5, .2, 1.59]} rotation={[0, -.23, 0]}>
      <group position={[5.29, 1.17, 1.34]} rotation={[0, 0, -Math.PI / 2]} scale={[0.11, 0.84, 1]}>
        <mesh geometry={nodes.Cube005.geometry} material={materials.pad1} />
        <mesh geometry={nodes.Cube005_1.geometry} material={materials.pad2} />
        <mesh geometry={nodes.Cube005_2.geometry} material={materials['Material.001']} />
      </group>
      <mesh geometry={nodes.Cube003.geometry} material={materials.WOOD} position={[3.82, 1.79, 1.32]} rotation={[0, 0, 0.54]} scale={[-0.04, 1.02, 1.23]} />
      </group>

      <group position={[.5, -.55, 11.9]} rotation={[0, 1, 0]}>
      <group position={[5.29, 1.17, 1.34]} rotation={[0, 0, -Math.PI / 2]} scale={[0.11, 0.84, 1]}>
        <mesh geometry={nodes.Cube005.geometry} material={materials.pad1} />
        <mesh geometry={nodes.Cube005_1.geometry} material={materials.pad2} />
        <mesh geometry={nodes.Cube005_2.geometry} material={materials['Material.001']} />
      </group>
      <mesh geometry={nodes.Cube003.geometry} material={materials.WOOD} position={[3.82, 1.79, 1.32]} rotation={[0, 0, 0.54]} scale={[-0.04, 1.02, 1.23]} />
      </group>

    </group>
  )
}

useGLTF.preload('/crashpads.glb')
