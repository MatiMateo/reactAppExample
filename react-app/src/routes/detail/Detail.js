import { useEffect, useContext } from "react";
/* import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemDetail from "./components/ItemDetail"; */
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import { CategoryContext } from "../../contexts/CategoryContext";
/* import { useParams } from "react-router-dom"; */
/*import Counter from "../../components/Counter";*/
const Detail = () => {
    const {categories, setCategories} = useContext(CategoryContext)
    
    useEffect(() => {
        const db = getFirestore()
        const categoriesProdCollection = collection(db, 'tienda')
        getDocs(categoriesProdCollection).then(snapshot => {
            const arrProdCategories = snapshot.docs.map(catgs => ({id:catgs.id, key: catgs.key, ...catgs.data()}))
            setCategories(arrProdCategories)
        })
    }, [categories, setCategories])

    return (
        <div>
            {categories.map(u => <div>{console.log(u)}</div>)}
        </div>
    )
}

export default Detail;