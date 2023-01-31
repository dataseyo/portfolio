import React from 'react'

import { MeshTransmissionMaterial } from '@react-three/drei'

// Glass pane with gradient effect
const config = {
    meshPhysicalMaterial: false,
    transmissionSampler: false,
    backside: false,
    samples: { value: 10, min: 1, max: 32, step: 1 },
    resolution: { value: 2048, min: 256, max: 2048, step: 256 },
    transmission: { value: 1, min: 0, max: 1 },
    roughness: { value: 0.0, min: 0, max: 1, step: 0.01 },
    thickness: { value: 3.5, min: 0, max: 10, step: 0.01 },
    ior: { value: 1.5, min: 1, max: 5, step: 0.01 },
    chromaticAberration: { value: 0.06, min: 0, max: 1 },
    anisotropy: { value: 0.1, min: 0, max: 1, step: 0.01 },
    distortion: { value: 0.0, min: 0, max: 1, step: 0.01 },
    distortionScale: { value: 0.3, min: 0.01, max: 1, step: 0.01 },
    temporalDistortion: { value: 0.5, min: 0, max: 1, step: 0.01 },
    attenuationDistance: { value: 0.5, min: 0, max: 10, step: 0.01 },
    attenuationColor: '#ffffff',
    color: '#c9ffa1',
    bg: '#839681'
  }
const Pane = () => {
  return (
    <mesh position={[0, 0, .1]} rotation={[1, 0, 0]}>
        <planeGeometry args={[3.5, 3.5, 16, 16]} />
        {/* <MeshTransmissionMaterial 
            transmissionSampler
            distortionScale={2}
            temporalDistortion={2}
        /> */}
        <meshBasicMaterial color="white" transparent/>
    </mesh>
  )
}

export default Pane