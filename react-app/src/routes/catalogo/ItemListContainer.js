import { CatalogoContext} from "../../contexts/CatalogoContext";
import { useEffect, useContext } from "react";
import {getFirestore, collection, getDocs} from 'firebase/firestore';
import ItemList from "../../components/ItemList";

const ItemListContainer = () => {
    const {setProductos} = useContext(CatalogoContext)
    useEffect(() => {
        const db = getFirestore();
        const tiendaCollection = collection(db, "tienda");
        getDocs(tiendaCollection)
          .then((snapshot) => {
            const prods = snapshot.docs.map((prods) => ({id:prods.id, ...prods.data()}));
            console.log(prods)
            setProductos(prods);
          })
          .catch((err) => console.log(err));
      },[setProductos]);
    return (
        <ItemList />
    )
}

export default ItemListContainer;