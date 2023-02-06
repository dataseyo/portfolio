import * as React from 'react'
import { RoundedBox } from '@react-three/drei'

type Props = React.ComponentProps<typeof RoundedBox> & {
  color: string
}

export function SceneProp({ color, ...boxProps }: Props) {
  return (
    <RoundedBox args={[1, 4, 1]} radius={0.05} smoothness={4} {...boxProps}>
      <meshPhongMaterial color={color} />
    </RoundedBox>
  )
}
