import * as React from 'react'
import {AlwaysStencilFunc, ReplaceStencilOp } from 'three'

type Props = {
  stencilRef: number
  position?: [number, number, number]
  rotation?: [number, number, number]
}

const Mask = ({
  stencilRef,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: Props) => {
  return (
    <mesh position={position} rotation={rotation} renderOrder={1}>
      <planeBufferGeometry args={[2, 2]} />
      <meshBasicMaterial
        colorWrite={false}
        depthWrite={false}
        stencilWrite
        stencilRef={stencilRef}
        stencilFunc={AlwaysStencilFunc}
        stencilFail={ReplaceStencilOp}
        stencilZFail={ReplaceStencilOp}
        stencilZPass={ReplaceStencilOp}
      />
    </mesh>
  )
}

export default Mask