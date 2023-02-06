import * as React from 'react'

import { RoundedBox } from '@react-three/drei'

type FramePieceProps = {
  position?: [number, number, number]
  rotation?: [number, number, number]
}

const FramePiece = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}: FramePieceProps) => {
  return (
    <RoundedBox
      args={[2.1, 0.01, 0.01]}
      radius={0.0199}
      smoothness={4}
      position={position}
      rotation={rotation}
    >
      <meshStandardMaterial color="white" />
    </RoundedBox>
  )
}

const Frame = () => {
  return (
    <>
      <FramePiece position={[0, 1, 1]} />
      <FramePiece position={[0, -1, 1]} />
      <FramePiece position={[1, 0, 1]} rotation={[0, 0, Math.PI / 2]} />
      <FramePiece position={[-1, 0, 1]} rotation={[0, 0, Math.PI / 2]} />
    </>
  )
}

export default Frame
