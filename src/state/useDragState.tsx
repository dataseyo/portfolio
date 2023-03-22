// ZUSTAND SCROLL STORE
import { create } from 'zustand'

type Section = {
    angle: number,
    setAngle: (angle: number) => void;
    section: number,
    setSection: (section: number) => void;
}

const useDragState = create<Section>((set) => ({
    // current angle of camera
    angle: 0,
    setAngle: (angle) => set((state) => ({
        angle: angle
    })),
    // current section
    section: 0,
    setSection: (section) => set((state) => ({
        section: section
    })),
}))

export default useDragState