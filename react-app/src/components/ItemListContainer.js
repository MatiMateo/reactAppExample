import { CatalogoContext} from '../contexts/CatalogoContext'
import { useEffect, useContext } from "react";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import { useParams, Link } from "react-router-dom";
import CategoryItem from './CategoryItem';
import ItemList from './ItemList';
import Boton from './Boton';

const ItemListContainer = () => {
    const {setProductos} = useContext(CatalogoContext)
    const {categoryId} = useParams()
    useEffect(() => {
        const db = getFirestore();
        const tiendaCollection = collection(db, "tienda");
        if (categoryId) {
          const prods = query(tiendaCollection, where('categoryId', '==', `${categoryId}`))
          getDocs(prods).then((res) => setProductos(res.docs.map((item => (item.data())))))
          .catch((err) => console.log(err));
        } else {
          getDocs(tiendaCollection).then((res) => setProductos(res.docs.map((item => (item.data())))))
          .catch((err) => console.log(err));
        }  
      },[setProductos, categoryId]);
    return (
      <div className='flex flex-col items-center mt-4'>
        <div className='w-4/5 itemList'>
          <CategoryItem />
        </div>
        <div>
          <Boton className='mb-4'><Link to={'/catalogo'}>Ver Todos</Link></Boton>
        </div>
         <ItemList />
      </div>
    )
}

export default ItemListContainer;