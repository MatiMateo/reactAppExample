import { useEffect, useContext } from "react";
import {getFirestore, collection, where, query, getDocs} from 'firebase/firestore';
import { ProductosContext } from "../../contexts/ProductosContext";
import { useParams } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer'

const Detail = () => {
    const {setProductDetail} = useContext(ProductosContext)
    const {key} = useParams()
    useEffect(() => {
      const db = getFirestore();
      const prodList = collection(db, 'tienda')
      if (key) {
        const prod = query(prodList, where('key', '==', `${key}`))
        getDocs(prod).then((res) => setProductDetail(res.docs.map((item => (item.data())))))
        .catch((err) => console.log(err));
      }
    },[setProductDetail, key]);

    return (
        <ItemDetailContainer className='flex items-center justify-center' />
    )
}

export default Detail