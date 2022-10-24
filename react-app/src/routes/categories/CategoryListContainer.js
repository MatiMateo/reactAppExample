import { CategoryContext} from "../../contexts/CategoryContext";
import { useEffect, useContext } from "react";
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import CategoryList from "./components/CategoryList";
/*import CategoryItem from "./components/CategoryItem";*/

const CategoryListContainer = () => {
    const {setCategories} = useContext(CategoryContext)
    useEffect(() => {
        const db = getFirestore()
        const categoriesCollection = collection(db, 'productos')
        getDocs(categoriesCollection).then(snapshot => {
            const arrCategories = snapshot.docs.map((catgs) => ({ id: catgs.id, key: catgs.key, ...catgs.data()}))
            setCategories(arrCategories)
        })
    }, [setCategories])
    return (
        <CategoryList />
    )
}

export default CategoryListContainer;