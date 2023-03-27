/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 treea.glb -t -- --transform
Author: roguenoodle (https://sketchfab.com/roguenoodle)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/medieval-fantasy-tree-d-5d751727f9be489ea95ec0ca368e3d1d
Title: Medieval Fantasy - Tree D
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, Instances, Instance } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    mff_tree_pine_1_0: THREE.Mesh
  }
  materials: {
    medievalfantasyforest_unwrap: THREE.MeshStandardMaterial
  }
}

export function Treea(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/treea.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} position={[-44, 0, -4]}>
        <Instances limit={10} range={100} geometry={nodes.mff_tree_pine_1_0.geometry} material={materials.medievalfantasyforest_unwrap}>
          {/* <Instance position={[4, 4, 0.2]} rotation={[0, .1, 1]}/>
          <Instance position={[3, 4, 0.1]} rotation={[0, 0, 0]} scale={.9}/>
          <Instance position={[4, 1.8, 0.2]} rotation={[0, -.08, .9]} scale={1.1}/>
          <Instance position={[4, 4, 0.2]} rotation={[0, .1, 0]}/>
          <Instance position={[4, 4, 0.2]} rotation={[0, .1, 0]}/>
          <Instance position={[3, -.7, .6]} rotation={[0, .1, 0]} scale={0.92}/>
          <Instance position={[-.48, -.7, 0]} rotation={[0, .1, 0]} scale={0.92}/> */}



          {/* old */}
          <Instance position={[-3, 0, 0]} rotation={[0, .1, 0]}/>
          <Instance position={[1, 1, 0]} rotation={[0, 0, 0]}/>
          <Instance position={[-2, 0, 0]} rotation={[0, 0, 1]}/>
          <Instance position={[.7, -.35, -.2]} rotation={[.1, 0, .5]} scale={1.2}/>
          <Instance position={[-.3, -.35, -.2]} rotation={[.1, 0, 1.5]} scale={.95}/>
          <Instance position={[-.9, -2.3, -.3]} rotation={[.1, 0, .5]} scale={1.3}/>
          <Instance position={[-3.6, -.3, 0]} rotation={[0, -.1, .5]} scale={1}/>

        </Instances>
      </group>
    </group>
  )
}

useGLTF.preload('/treea.glb')
