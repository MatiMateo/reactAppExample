import React from "react"
import { useState } from "react"

const CategoriesContext = React.createContext()

const CategoriesContextProvider = ({children}) => {
    const [categories, setCategories] = useState([])
    return (
        <CategoriesContext.Provider value={{categories, setCategories}}>
            {children}
        </CategoriesContext.Provider>
    )
}

export {CategoriesContext, CategoriesContextProvider};