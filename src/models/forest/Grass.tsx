/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 grass.glb -t -- --transform
Author: roguenoodle (https://sketchfab.com/roguenoodle)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/medieval-fantasy-grass-patch-b-84194a1ccd39420390038a0db3af2a3d
Title: Medieval Fantasy - Grass Patch B
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, Instances, Instance } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    mff_grass_patch_1_0: THREE.Mesh
  }
  materials: {
    medievalfantasyforest_unwrap: THREE.MeshStandardMaterial
  }
}

export function Grass(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/grass.glb') as GLTFResult
  return (
    <group {...props} dispose={null} position={[-10, 0, -10]}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <Instances limit={20} range={100} geometry={nodes.mff_grass_patch_1_0.geometry} material={materials.medievalfantasyforest_unwrap}>
          <Instance  position={[-27.86, .6, .45]}/>
          <Instance  position={[-28.6, -1, .5]}/>
          <Instance  position={[-26.6, 4, 0.34]}/>
          <Instance  position={[-26.6, 6, 0.12]}/>
          <Instance  position={[-25.6, 6.9, 0.4]}/>
          <Instance  position={[-27.86, 4.9, -.01]} rotation={[0, 0, 2]}/>
          <Instance  position={[-27.86, -2.8, .7]}/>


          {/* <Instance  position={[-30.86, -2.86, .15]}/>
          <Instance  position={[-29, -1.86, .3]}/>
          <Instance  position={[-31.8, -1, -.1]}/>
          <Instance  position={[-33.8, -1, -.1]}/>
          <Instance  position={[-38.4, -3.16, .1]}/>
          <Instance  position={[-37, -1.8, -.2]}/>
          <Instance  position={[-39, -1.8, -.04]} scale={.96}/> */}

          
          {/* old */}
          <Instance  position={[-32.86, -3.16, -.12]}/>
          <Instance  position={[-32.86, -5.16, -.12]}/>
          <Instance  position={[-34.86, -6.3, -.12]}/>
          <Instance  position={[-34, -5.16, -.11]}/>
          <Instance  position={[-35, -6.16, -.11]}/>
          <Instance  position={[-36.86, -4.16, -.09]}/>
          <Instance  position={[-36, -6.16, -.09]}/>
          <Instance  position={[-37, -3.16, -.1]}/>
          <Instance  position={[-32.5, -6.16, -.05]}/>

        </Instances>
      </group>
    </group>
  )
}

useGLTF.preload('/grass.glb')
