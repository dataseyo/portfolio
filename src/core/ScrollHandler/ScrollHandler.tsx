import React from 'react'

import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import { useScrollContext } from '../../context/ScrollContext'

const ScrollHandler = () => {
    const scroll = useScroll()
    const scrollContext = useScrollContext()

    useFrame(() => {
        if (scroll.offset > .1) {
            scrollContext?.setScroll(true)
        } else {
            scrollContext?.setScroll(false)
        }
    })
    return <></>
}

export default ScrollHandler