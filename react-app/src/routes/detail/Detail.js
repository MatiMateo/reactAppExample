import { useEffect, useContext } from "react";
import {getFirestore, where, query, collection, getDocs} from 'firebase/firestore';
import { CatalogoContext } from "../../contexts/CatalogoContext";
import { useParams } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer'
const Detail = () => {
    const {setProductos} = useContext(CatalogoContext)
    const {key} = useParams()
    useEffect(() => {
      const db = getFirestore();
      const tiendaCollection = collection(db, 'tienda')
      const prodRef = query(tiendaCollection, where(`${key}`, '==', 'key'))
      getDocs(prodRef).then(query => {
        console.log(query)
        setProductos(prodRef);
      })
    },[setProductos, key]);

    return (
        <ItemDetailContainer className='flex items-center justify-center' />
    )
}

export default Detail;