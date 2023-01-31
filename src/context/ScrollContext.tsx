import { createContext, useState, useContext } from "react";

type Props = {
    children: React.ReactNode
}

const ScrollContext = createContext<{ scroll: boolean; setScroll: React.Dispatch<React.SetStateAction<boolean>>; }| undefined>(undefined)

const ScrollContextProvider = ({children}: Props) => {
    const [scroll, setScroll] = useState(false)

    const value = { scroll, setScroll }
    return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
}

const useScrollContext = () => {
    const context = useContext(ScrollContext)
    return context
}

export {
    ScrollContextProvider,
    useScrollContext
}