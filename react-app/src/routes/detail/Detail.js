import { useEffect, useContext } from "react";
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import { CategoryContext } from "../../contexts/CategoryContext";
import { useParams } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer'
const Detail = () => {
    const {setCategories} = useContext(CategoryContext)
    const {id} = useParams()
    useEffect(() => {
        const db = getFirestore();
        const data = collection(db, "tienda");
        getDocs(data)
          .then((value) => {
            const resp = value.docs.map((value) => {
              return value.data();
            });
            const prodList = resp[0].productos
            const arrprod = prodList.filter(producto => producto.id === id)
            const prod = arrprod[0]
            console.log(prod)
            setCategories(prod);
          })
          .catch((err) => console.log(err));
      },[setCategories, id]);

    return (
        <ItemDetailContainer className='flex items-center justify-center' />
    )
}

export default Detail;