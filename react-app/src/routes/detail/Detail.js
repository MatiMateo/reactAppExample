import { useEffect, useContext } from "react";
import {getFirestore, collection, where, query, getDocs} from 'firebase/firestore';
import { ProductosContext } from "../../contexts/ProductosContext";
import { useParams } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer'

const Detail = () => {
    const {setProductDetail} = useContext(ProductosContext)
    const {id} = useParams()
    useEffect(() => {
      const db = getFirestore();
      const prodList = collection(db, 'tienda')
      const prod = query(prodList, where('key', '==', `${id}`))
      getDocs(prod)
      .then(snapshot => {
        if (snapshot.size === 0){
          const prodDetail = snapshot.docs.map(doc => doc.data())
          setProductDetail(prodDetail)
        }
      })
      .catch((err) => console.log(err));
    },[setProductDetail, id]);

    return (
        <ItemDetailContainer className='flex items-center justify-center' />
    )
}

export default Detail