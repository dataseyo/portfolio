/* DRAG HANDLER
    = as user moves the orbit controls, get the camera's direction and convert it to an angle
    = update the angle zustand state with each angle
*/

// external
import { useRef } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from 'three'

// internal
import useDragState from "../state/useDragState"

const DragHandler = () => {
    // state
    const { setAngle, setSection } = useDragState()

    // ref to store cam direction vector
    const direcRef = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0))
    const { camera } = useThree()

    useFrame(() => {
      // store camera direction in ref
      const direc = camera.getWorldDirection(direcRef.current)
      // convert to angle btw -3.14 and + 3.14
      const camAngle = Math.atan2(direcRef.current.x, direcRef.current.z)
      setAngle(camAngle)
  
      if (camAngle < -3 || camAngle > 2.8) {
        setSection(0)
        // console.log("0")
      }
  
      if (camAngle <= 2.8 && camAngle > 2) {
        setSection(1)
        // console.log("1")
      } 
  
      if (camAngle <= 2 && camAngle > 1) {
        setSection(2)
        // console.log("2")
      } 
  
      if (camAngle <= 1 && camAngle > -1) {
        setSection(3)
        // console.log("3")
      } 
  
      if (camAngle <= -1 && camAngle > -2) {
        setSection(4)
        // console.log("4")
      } 
  
      if (camAngle <= -2 && camAngle > -2.8) {
        setSection(5)
        // console.log("5")
      } 
    })
    
    return <></>
}

export default DragHandler