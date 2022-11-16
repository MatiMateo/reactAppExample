import React, { useEffect } from "react"
import { useState } from "react"
import {collection, getFirestore, getDocs} from 'firebase/firestore'

const CategoriesContext = React.createContext()

const CategoriesContextProvider = ({children}) => {
    const [categories, setCategories] = useState([])
    const db = getFirestore()
    const categoriesCollection = collection(db, 'categorias')
    useEffect(() => {
      getDocs(categoriesCollection)
          .then((snapshot) => {
            const categories = snapshot.docs.map((catgs) => ({id:catgs.id, ...catgs.data()}));
            setCategories(categories);
          })
          .catch((err) => console.log(err));  
    })
    return (
        <CategoriesContext.Provider value={{categories}}>
            {children}
        </CategoriesContext.Provider>
    )
}

export {CategoriesContext, CategoriesContextProvider};