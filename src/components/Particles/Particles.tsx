// REACT
import React, { useRef, useMemo } from 'react'

// THREE
import { Vector2, Vector3, DoubleSide, Points, BufferGeometry, Material } from 'three'
import { useFrame, ThreeEvent } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'

// SHADERS
import fragmentShader from './fragment.glsl?raw'
import vertexShader from './vertex.glsl?raw'

const Particles = () => {
    const particlesRef = useRef<React.Ref<Points<BufferGeometry, Material | Material[]>> | undefined | any>()

    // GENERATE PARTICLE POSITIONS
    const count = 10000
    const positions = useMemo(() => {
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count; i++) {
            let x = (Math.random() - 0.5) * 8;
            let y = (Math.random() - 0.5) * 6;
            let z = (Math.random() - 0.5) * 0.1;
        
            positions.set([x, y, z], i * 3);
          }
        
          return positions;
    }, [count])

    // SHADER UNIFORMS
    const uniforms = {
        u_mouse: {
            value: new Vector2()
        },
        u_time: {
            value: 0.0
        },
        u_intersection: {
            value: new Vector3()
        },
        u_ratio: {
            value: new Vector2()
        }, 
        u_scroll_amount: {
            value: 0.0
        }
    }

    // MOUSE EVENTS
    const handlePointer = (event: ThreeEvent<PointerEvent> | ThreeEvent<MouseEvent>) => {
        uniforms.u_intersection.value = event.intersections[0].point

        uniforms.u_ratio.value.x = window.innerWidth
        uniforms.u_ratio.value.y = window.innerHeight
    }

    // CLOCK AND SCROLL
    const scroll = useScroll()
    useFrame((state) => {
        const {clock} = state
        uniforms.u_time.value = clock.getElapsedTime()
        uniforms.u_scroll_amount.value = scroll.offset
    })

    return (
        <group>
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={count}
                        array={positions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <shaderMaterial
                    vertexShader={vertexShader}
                    fragmentShader={fragmentShader}
                    uniforms={uniforms}
                />
            </points>

            {/* use plane to get coordinates for mouse intersection */}
            <mesh 
                onPointerMove={event => handlePointer(event)}
                onPointerDown={event => handlePointer(event)}
                // onClick={event => handlePointer(event)}
                visible={false}
            >
                <boxGeometry args={[10, 6, 0.1, 32, 32]} />
                <meshStandardMaterial color="white" side={DoubleSide}/>
            </mesh>
        </group>
    )
}

export default Particles

