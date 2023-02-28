// ZUSTAND SCROLL STORE
import { create } from 'zustand'

type Section = {
    section: number,
    setSection: (section: number) => void;
}

const useSectionStore = create<Section>((set) => ({
    section: 0,
    setSection: (section) => set((state) => ({
        section: section
    }))
}))

export default useSectionStore