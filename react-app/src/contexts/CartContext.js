import React from "react"
import { useState } from "react"

const CartContext = React.createContext()

const CartContextProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [quantityProduct, setQuantityProduct] = useState()
    const [order, setOrder] = useState([])
    return (
        <CartContext.Provider value={{order, setOrder, cartProducts, setCartProducts, quantityProduct, setQuantityProduct}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider};