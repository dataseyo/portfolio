import React from 'react'

import { Grass } from './Grass'
import { Treea } from './Treea'
import { Treeb } from './Treeb'
import { Campfire } from './Campfire'
import { Fire } from './Fire'

type Props = {}

const Forest = (props: Props) => {
  return (
    <group position={[48, -.1, 15]}>
        <Grass/>
        <Treea/>
        <Treeb/>
        <Campfire/>
        {/* <Fire/> */}
    </group>
  )
}

export default Forest