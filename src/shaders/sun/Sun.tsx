// external imports
import { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

// internal imports
import fragmentShader from './fragment.glsl?raw'
import vertexShader from './vertex.glsl?raw'
import useDragState from '../../state/useDragState'

const Sun = () => {
    const { angle } = useDragState()
    const count = 5000
    const radius = 2.0
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
        },
        u_radius: {
            value: radius
        },
        u_scroll: {
            value: 1.0
        }
    }

    const groupRef = useRef<any>()

    useFrame((state) => {
        const { clock, camera, viewport } = state
        uniforms.u_time.value = clock.getElapsedTime()

        if (groupRef.current) {
            // groupRef.current.position.x = -viewport.width / 4.0 - 0.5
            groupRef.current.position.z = viewport.height / 4.0 + 0.7

            groupRef.current.position.set(0, -2, 0)
            var vec = new THREE.Vector3(0, 1, 0)
            vec.applyQuaternion(camera.quaternion)
            groupRef.current.position.copy(vec)  

        }

        // drag value
    })

  return (
    <group ref={groupRef}>
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

export default Sun