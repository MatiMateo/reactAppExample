import { CategoryContext} from "../../contexts/CategoryContext";
import { useEffect, useContext } from "react";
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import CategoryList from "./components/CategoryList";
/*import CategoryItem from "./components/CategoryItem";*/

const CategoryListContainer = () => {
    const {setCategories} = useContext(CategoryContext)
    useEffect(() => {
        const db = getFirestore();
        const data = collection(db, "tienda");
        getDocs(data)
          .then((value) => {
            const resp = value.docs.map((value) => {
              return value.data();
            });
            const prod = resp[0].productos
            setCategories(prod);
          })
          .catch((err) => console.log(err));
      },[setCategories]);
    /* useEffect(() => {
        const db = getFirestore()
        const categoriesProdCollection = collection(db, 'tienda')
        getDocs(categoriesProdCollection).then(snapshot => {
            const arrProdCategories = snapshot.docs.map(catgs => ({...catgs.data()}))
            console.log(arrProdCategories)
            setCategories(arrProdCategories)
        })
    } , [setCategories])*/
    return (
        <CategoryList />
    )
}

export default CategoryListContainer;