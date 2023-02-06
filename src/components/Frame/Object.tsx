import React, {useRef} from 'react'

import { useThree } from '@react-three/fiber'
import {EqualStencilFunc, KeepStencilOp, NotEqualStencilFunc } from 'three'



type Props = JSX.IntrinsicElements['group'] & {
    stencilRef: number
    // isInverted: boolean
  }

const Object = ({ stencilRef, ...props }: Props) => {
    const { height } = useThree((state) => state.viewport)

    return (
        <group {...props} position={[0, -height, 0]} scale={0.9}>
            <mesh renderOrder={2}>
                <sphereGeometry />
                <meshStandardMaterial
                    stencilWrite
                    stencilRef={stencilRef}
                    stencilFunc={EqualStencilFunc}
                    stencilFail={KeepStencilOp}
                    stencilZFail={KeepStencilOp}
                    stencilZPass={KeepStencilOp}
                    color="lightblue"
                />
        </mesh>
      </group>
    )
}

export default Object
