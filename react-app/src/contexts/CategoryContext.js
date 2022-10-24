import React from "react"
import { useState } from "react"

const CategoryContext = React.createContext()

const CategoryContextProvider = ({children}) => {
    const [categories, setCategories] = useState([])
    return (
        <CategoryContext.Provider value={{categories, setCategories}}>
            {children}
        </CategoryContext.Provider>
    )
}

export {CategoryContext, CategoryContextProvider};