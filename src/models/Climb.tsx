import { useGLTF } from '@react-three/drei'

export function Climb(props: any) {
  const { nodes, materials } = useGLTF('/wall-transformed.glb')
  const {
    Cube002,
    Icosphere001,
    Cylinder,
    Cylinder001,
    Cube,
    Cone,
    Cube001,
    Icosphere002,
    Cube003,
    Cube005,
    Cube013,
    Cube004,
    Cube007,
    Cube009,
    Cube008,
    Cube010,
    Cube011,
    Cube012,
    Cube015,
    Cube006,
    Icosphere003,
    Icosphere004,
    Icosphere005,
    Icosphere006,
    Icosphere
  } : any = nodes

  return (
    // position={[-.1, .12, -1.4]}
    // scale={0.6}
    // 
    <group {...props} dispose={null} scale={2} rotation={[0, 0, 0]}  castShadow>
      <mesh geometry={Cube002.geometry} material={Cube002.material} position={[19.07, 0.02, 0.03]} scale={[2.45, 1.68, 0.66]} />
      <mesh geometry={Icosphere.geometry} material={materials['route1.001']} position={[20.86, 0.29, 0.4]} scale={0.21} />
      <mesh geometry={Icosphere001.geometry} material={materials['route1.001']} position={[20.85, -0.68, 0.5]} rotation={[0, 0, -1.32]} scale={[0.23, 0.02, 0.03]} />
      <mesh geometry={Cylinder.geometry} material={materials['Material.001']} position={[19.38, -1.03, 0.56]} rotation={[-0.26, -0.1, -1.08]} scale={[-0.32, -0.33, -0.2]} />
      <mesh geometry={Cylinder001.geometry} material={materials['Material.001']} position={[18.61, -1.42, 0.68]} rotation={[-0.28, 0.03, -1.55]} scale={[-0.22, -0.23, -0.14]} />
      <mesh geometry={Cube.geometry} material={materials['route1.001']} position={[20.91, 0.72, 0.34]} rotation={[1.87, -0.69, 0.19]} scale={[0.04, -0.09, -0.03]} />
      <mesh geometry={Cone.geometry} material={materials['Material.001']} position={[18.19, -0.41, 0.79]} rotation={[2.54, 0.94, 1.53]} scale={0.27} />
      <mesh geometry={Cube001.geometry} material={materials['Material.003']} position={[18.47, -0.36, 1.04]} rotation={[-2.89, -0.97, -Math.PI]} scale={[0.18, 0.12, 0.18]} />
      <mesh geometry={Icosphere002.geometry} material={materials['Material.003']} position={[19.58, -0.28, 0.38]} rotation={[0.05, 0, -1.18]} scale={[0.4, 0.12, 0.39]} />
      <mesh geometry={Cube003.geometry} material={materials['Material.003']} position={[18.4, 0.1, 1.38]} rotation={[0.2, 0.19, -0.27]} scale={[-0.12, -0.01, -0.03]} />
      <mesh geometry={Cube005.geometry} material={materials['Material.003']} position={[18.33, 0.19, 1.47]} rotation={[0.2, 0.19, -0.27]} scale={[-0.12, -0.01, -0.03]} />
      <mesh geometry={Cube013.geometry} material={materials['Material.003']} position={[18.74, 0.56, 1.86]} rotation={[0.07, -0.03, 0.01]} scale={[-0.03, 0, -0.01]} />
      <mesh geometry={Cube004.geometry} material={materials['Material.004']} position={[17.02, 0.26, 1.58]} rotation={[2.44, 1.08, 0]} scale={[0.23, 0.05, 0.09]} />
      <mesh geometry={Cube007.geometry} material={materials['Material.005']} position={[17.02, -0.23, 0.68]} rotation={[0.46, -0.09, 0.09]} scale={[0.1, 0.27, 0.14]} />
      <mesh geometry={Cube009.geometry} material={materials['Material.005']} position={[17.36, -0.47, 0.57]} rotation={[0.46, -0.09, 0.09]} scale={[0.1, 0.27, 0.14]} />
      <mesh geometry={Cube008.geometry} material={materials['Material.006']} position={[17.02, -0.23, 0.68]} rotation={[0.46, -0.09, 0.09]} scale={[0.1, 0.27, 0.14]} />
      <mesh geometry={Cube010.geometry} material={materials['Material.006']} position={[17.36, -0.47, 0.57]} rotation={[0.46, -0.09, 0.09]} scale={[0.1, 0.27, 0.14]} />
      <mesh geometry={Cube011.geometry} material={materials['Material.003']} position={[18.75, 0.48, 1.82]} rotation={[0.82, 0, 0]} scale={[0.07, 0.04, 0.04]} />
      <mesh geometry={Cube012.geometry} material={materials['Material.003']} position={[18.63, 1.02, 2.37]} rotation={[0.69, -0.02, -3.12]} scale={[-0.18, 0.04, 0.04]} />
      <mesh geometry={Cube015.geometry} material={materials['route1.001']} position={[20.69, 1.24, 0.32]} rotation={[-2.02, -1.52, 2.76]} scale={[0.08, -0.09, 0.03]} />
      <mesh geometry={Cube006.geometry} material={materials['route1.001']} position={[20.58, 1.25, 0.32]} rotation={[-2.02, -1.52, 2.76]} scale={[0.08, -0.09, -0.03]} />
      <mesh geometry={Icosphere003.geometry} material={materials['route1.001']} position={[20.98, -0.91, 0.49]} rotation={[0, 0, 0.03]} scale={[-0.07, 0.03, 0.03]} />
      <mesh geometry={Icosphere004.geometry} material={materials['Material.004']} position={[17.29, 0.8, 2.13]} rotation={[0.88, 0, 0]} scale={[0.12, 0.06, 0.05]} />
      <mesh geometry={Icosphere005.geometry} material={materials['Material.004']} position={[17.28, 0.88, 2.19]} rotation={[0.7, -0.06, -0.01]} scale={[0.12, -0.06, 0.05]} />
      <mesh geometry={Icosphere006.geometry} material={materials['Material.004']} position={[17.27, 0.45, 1.76]} rotation={[0.84, -0.08, -0.36]} scale={[0.17, 0.05, 0.04]} />
    </group>
  )
}

useGLTF.preload('/wall-transformed.glb')
