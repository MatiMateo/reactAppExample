import React from "react"
import { useState } from "react"

const CatalogoContext = React.createContext()

const CatalogoContextProvider = ({children}) => {
    const [productos, setProductos] = useState([])
    return (
        <CatalogoContext.Provider value={{productos, setProductos}}>
            {children}
        </CatalogoContext.Provider>
    )
}

export {CatalogoContext, CatalogoContextProvider};