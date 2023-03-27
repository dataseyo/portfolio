/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 wall.glb -t -- --transform
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane_1: THREE.Mesh
    Plane_2: THREE.Mesh
    Icosphere: THREE.Mesh
    Icosphere005: THREE.Mesh
    Plane004_1: THREE.Mesh
    Plane004_2: THREE.Mesh
    Plane005_1: THREE.Mesh
    Plane005_2: THREE.Mesh
    Icosphere001: THREE.Mesh
    Plane005: THREE.Mesh
    Plane006: THREE.Mesh
    Sphere001: THREE.Mesh
    Sphere002: THREE.Mesh
    Sphere003: THREE.Mesh
    Sphere004: THREE.Mesh
    Sphere000: THREE.Mesh
    Icosphere002: THREE.Mesh
    Icosphere003: THREE.Mesh
    Icosphere004: THREE.Mesh
    Sphere005: THREE.Mesh
    Icosphere006: THREE.Mesh
    Icosphere007: THREE.Mesh
    Sphere006: THREE.Mesh
    Sphere007: THREE.Mesh
    Cylinder: THREE.Mesh
    Plane001_1: THREE.Mesh
    Plane001_2: THREE.Mesh
    Plane003_1: THREE.Mesh
    Plane003_2: THREE.Mesh
  }
  materials: {
    ['Material.006']: THREE.MeshStandardMaterial
    ['Material.007']: THREE.MeshStandardMaterial
    ['Material.003']: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshStandardMaterial
    ['Material.002']: THREE.MeshStandardMaterial
    ['Material.005']: THREE.MeshStandardMaterial
  }
}

export function Wall(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/wall.glb') as GLTFResult
  return (
    <group {...props} dispose={null} position={[-11, .47, 0]} rotation={[0, .127, -.021]}>
      <group position={[0, 2.11, 0]} rotation={[0, 0, -Math.PI / 2]} scale={[2.1, 2.1, 2.45]}>
        <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials['Material.007']} />
      </group>
      <mesh geometry={nodes.Icosphere.geometry} material={materials['Material.003']} position={[0.67, 3.52, 0.17]} rotation={[1.5, 0.3, -0.01]} scale={[0.33, 0.24, 0.33]} />
      <mesh geometry={nodes.Icosphere005.geometry} material={materials['Material.001']} position={[1.14, 2.73, 0.7]} rotation={[-0.6, -0.22, -0.01]} scale={[0.23, 0.17, 0.23]} />
      <group position={[1.11, 1.18, -1.16]} rotation={[-0.21, 0, -Math.PI / 2]} scale={0.32}>
        <mesh geometry={nodes.Plane004_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane004_2.geometry} material={materials['Material.003']} />
      </group>
      <group position={[1.11, 1.42, -0.05]} rotation={[-0.21, 0, -Math.PI / 2]} scale={[0.32, 0.32, -0.32]}>
        <mesh geometry={nodes.Plane005_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane005_2.geometry} material={materials['Material.003']} />
      </group>
      <mesh geometry={nodes.Icosphere001.geometry} material={materials['Material.003']} position={[0.94, 0.75, -1.53]} rotation={[0, 0, -1]} scale={[0.05, 0.18, 0.18]} />
      <mesh geometry={nodes.Plane005.geometry} material={materials['Material.001']} position={[1.12, 1.11, -0.86]} rotation={[-0.83, 0, -1.53]} scale={[0.03, -0.07, 0.09]} />
      <mesh geometry={nodes.Plane006.geometry} material={materials['Material.001']} position={[1.12, 1.2, -0.41]} rotation={[0.56, -0.18, -1.6]} scale={[0.03, -0.07, 0.09]} />
      <mesh geometry={nodes.Sphere001.geometry} material={materials['Material.002']} position={[1.24, 1.56, 3.5]} rotation={[0.35, 0.2, 0.42]} scale={0.71} />
      <mesh geometry={nodes.Sphere002.geometry} material={materials['Material.005']} position={[0.65, 1.78, -2.76]} rotation={[0.82, 0.67, -0.59]} scale={0.4} />
      <mesh geometry={nodes.Sphere003.geometry} material={materials['Material.005']} position={[-0.2, 1.14, -3.46]} rotation={[3.03, -0.92, -0.11]} scale={[0.19, 0.2, 0.19]} />
      <mesh geometry={nodes.Sphere004.geometry} material={materials['Material.002']} position={[0.59, 0.94, 3.97]} rotation={[-0.49, 1.12, -0.64]} scale={0.51} />
      <mesh geometry={nodes.Sphere000.geometry} material={materials['Material.002']} position={[1.75, 2.36, 3.08]} rotation={[0.34, 0.2, 0.42]} scale={0.29} />
      <mesh geometry={nodes.Icosphere002.geometry} material={materials['Material.005']} position={[0.03, 0.61, -3.3]} rotation={[-0.41, 0.83, 0.26]} scale={[0.03, -0.01, -0.08]} />
      <mesh geometry={nodes.Icosphere003.geometry} material={materials['Material.005']} position={[0.15, 0.7, -3.2]} rotation={[-0.41, 0.83, 0.26]} scale={[0.03, -0.01, -0.08]} />
      <mesh geometry={nodes.Icosphere004.geometry} material={materials['Material.005']} position={[0.47, 2.36, -2.93]} rotation={[-1.09, 0.57, 0.46]} scale={[0.03, -0.01, -0.08]} />
      <mesh geometry={nodes.Sphere005.geometry} material={materials['Material.005']} position={[0.24, 3.25, -2.88]} rotation={[-2.55, -1.12, -0.16]} scale={[0.19, 0.2, 0.19]} />
      <mesh geometry={nodes.Icosphere006.geometry} material={materials['Material.001']} position={[1.12, 2.19, 0.91]} rotation={[0.22, 0.17, 2.35]} scale={[0.03, -0.01, -0.08]} />
      <mesh geometry={nodes.Icosphere007.geometry} material={materials['Material.001']} position={[1.06, 2.09, -0.22]} rotation={[-0.29, 0, 2.65]} scale={[0.02, -0.01, -0.04]} />
      <mesh geometry={nodes.Sphere006.geometry} material={materials['Material.002']} position={[2.2, 3.08, 3.08]} rotation={[1.93, 0.91, 0.68]} scale={0.23} />
      <mesh geometry={nodes.Sphere007.geometry} material={materials['Material.002']} position={[2.49, 3.39, 2.66]} rotation={[1.4, 1.22, 2.15]} scale={0.23} />
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.002']} position={[2.34, 3.82, 2.31]} rotation={[-1.8, -1.2, 2.94]} scale={-0.14} />
      <group position={[1.12, 2.33, 1.1]} rotation={[-2.14, 0, -Math.PI / 2]} scale={0.33}>
        <mesh geometry={nodes.Plane001_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane001_2.geometry} material={materials['Material.003']} />
      </group>
      <group position={[1.12, 2.89, 0.74]} rotation={[-2.14, 0, -Math.PI / 2]} scale={[0.33, 0.33, -0.33]}>
        <mesh geometry={nodes.Plane003_1.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane003_2.geometry} material={materials['Material.003']} />
      </group>
    </group>
  )
}

useGLTF.preload('/wall.glb')