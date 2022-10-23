import { useEffect, useState } from "react";
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import CategoryList from "./components/CategoryList";

const CategoryListContainer = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const db = getFirestore()
        const categoriesCollection = collection(db, 'productos')
        getDocs(categoriesCollection).then(snapshot => {
            const arrCategories = snapshot.docs.map((catgs) => ({ key: catgs.key, ...catgs.data()}))
            setCategories(arrCategories)
        })
    }, [])
    return (
        <div>
            {categories.map(catg => 
            <div key={catg.key} className="relative w-full bg-verysoft-pink-500 border-verysoft-pink-500 border-[0.5px] rounded-md">
                <div>
                    {!catg.image ? <div>Cargando...</div> : <img src={catg.image} alt={catg.description} />}
                </div>
                <div className="flex items-center justify-center w-full">
                    <span className="font-bold ">{catg.name}</span>
                </div>
            </div>)}
        </div>
    )
}

export default CategoryListContainer;