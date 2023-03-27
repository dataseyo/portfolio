import { useFrame } from '@react-three/fiber'
import React, { useMemo, useRef} from 'react'
import * as THREE from 'three'

import fragmentShader from './fragment.glsl?raw'
import vertexShader from './vertex.glsl?raw'

type Props = {}

const Test = (props: Props) => {
    const count = 1000
    const radius = 2
    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
    
        for (let i = 0; i < count; i++) {
            let x = (Math.random() - 0.5) * radius;
            let y = (Math.random() - 0.5) * radius;
            let z = (Math.random() - 0.5) * radius;
    
            // We add the 3 values to the attribute array for every loop
            positions.set([x, y, z], i * 3);
        }
    
        return positions;
        }, [count]);

    const uniforms = {
        u_time: {
            value: 0.0
        }
    }

    useFrame((state) => {
        const { clock } = state
        const time = clock.getElapsedTime()
        uniforms.u_time.value = time
    })

  return (
    <group position={[0, 1.1, 0]}>
        <points>
        <bufferGeometry>
            <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
            />
        </bufferGeometry>
        <shaderMaterial 
            blending={THREE.AdditiveBlending}
            depthWrite={false}
            fragmentShader={fragmentShader}
            vertexShader={vertexShader}
            uniforms={uniforms}
        />
        </points>
    </group>
  )
}

export default Test