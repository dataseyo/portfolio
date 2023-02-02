import { createContext, useState, useContext } from "react";

type Props = {
    children: React.ReactNode
}

const ScreenContext = createContext<{ scroll: boolean; setScroll: React.Dispatch<React.SetStateAction<boolean>>; }| undefined>(undefined)

const ScreenContextProvider = ({children}: Props) => {
    const [scroll, setScroll] = useState(false)

    const value = { scroll, setScroll }
    return <ScreenContext.Provider value={value}>{children}</ScreenContext.Provider>
}

const useScreenContext = () => {
    const context = useContext(ScreenContext)
    return context
}

export {
    ScreenContextProvider,
    useScreenContext
}