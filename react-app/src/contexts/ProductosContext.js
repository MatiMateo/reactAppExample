import React from "react"
import { useState } from "react"

const ProductosContext = React.createContext()

const ProductosContextProvider = ({children}) => {
    const [productDetail, setProductDetail] = useState([])
    return (
        <ProductosContext.Provider value={{productDetail, setProductDetail}}>
            {children}
        </ProductosContext.Provider>
    )
}

export {ProductosContext, ProductosContextProvider};