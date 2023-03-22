import { useState, useEffect, useRef, useCallback } from 'react'
import { useProgress } from '@react-three/drei'

import ParticleLoader from '../../assets/ParticleLoader'
import './styles.css'

const LoaderScreen = ({}) => {
    const { active, progress, errors, item, loaded, total } = useProgress()
    const [show, setShow] = useState(active)
    const progressRef = useRef(0)
    const rafRef = useRef(0)
    const progressSpanRef = useRef<HTMLSpanElement>(null)

    const dataInterp = (p: number) => `Loading: ${p.toFixed(2)}%`

    useEffect(() => {
        let t: any;
        if (active !== show) t = setTimeout(() => setShow(active), 300)
        return () => clearTimeout(t)
    }, [show, active])

    useEffect(() => {
        updateProgress()
        return () => cancelAnimationFrame(rafRef.current)
    })

    const updateProgress = useCallback(() => {
        if (!progressSpanRef.current) return
        progressRef.current += (progress - progressRef.current) / 2
        if (progressRef.current > 0.95 * progress || progress === 100) progressRef.current = progress
        progressSpanRef.current.innerText = dataInterp(progressRef.current)
        if (progressRef.current < progress) rafRef.current = requestAnimationFrame(updateProgress)
      }, [progress])

    return show ? (
      <div className="loader__container" style={{
          opacity: active ? 1 : 0
      }}>
        <ParticleLoader progress={progress}/>
        <div className="inner" style={{marginTop: "-100px"}}>
          <div className="bar" style={{transform: `scaleX(${progress / 100})`}}></div>
          <span ref={progressSpanRef} className="data" />
        </div>
      </div>
    ) : null
}

export default LoaderScreen