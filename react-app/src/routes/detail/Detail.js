import { useEffect, useContext } from "react";
/* import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemDetail from "./components/ItemDetail"; */
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import Spinner from '../../components/Spinner'
import { CategoryContext } from "../../contexts/CategoryContext";
import { useParams } from "react-router-dom";
/*import Counter from "../../components/Counter";*/
const Detail = () => {
    const {categories, setCategories} = useContext(CategoryContext)
    const {prodCollection} = useParams();
    useEffect(() => {
        const db = getFirestore()
        const categoriesProdCollection = collection(db, `productos`)
        /* const categoriesCollection = collection(db, `${param}`) */
        getDocs(categoriesProdCollection).then(snapshot => {
            const arrProdCategories = snapshot.docs.map((catgs) => ({id: catgs.id, key: catgs.key, ...catgs.data()}))
            setCategories(arrProdCategories)
            console.log(arrProdCategories)
        })
    }, [setCategories])

    return (
        <div>
            
        </div>
    )
}

export default Detail;