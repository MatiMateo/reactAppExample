import React from "react"
import { useState } from "react"

const CartContext = React.createContext()

const CartContextProvider = ({children}) => {
    const [productos, setProductos] = useState([])
    return (
        <CartContext.Provider value={{productos, setProductos}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider};