/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Campfire.glb -t -- --transform
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    campfire: THREE.Mesh
  }
  materials: {
    None: THREE.MeshStandardMaterial
  }
}

export function Campfire(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/Campfire.glb') as GLTFResult
  return (
    <group {...props} dispose={null} position={[-45.2, .29, -6]} scale={0.6}>
      <mesh geometry={nodes.campfire.geometry} material={materials.None}/>
    </group>
  )
}

useGLTF.preload('/Campfire.glb')