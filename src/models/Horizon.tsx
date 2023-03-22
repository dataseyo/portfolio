import React from 'react'

type Props = {}

const Horizon = (props: Props) => {
  return (
    <mesh rotation={[-.5, 0, 0]} position={[0, -1.5, -1]}>
        <planeGeometry args={[100, 10]} />
        <meshBasicMaterial color="#FAF4D3"/>
    </mesh>
  )
}

export default Horizon