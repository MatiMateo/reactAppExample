import { CatalogoContext} from '../contexts/CatalogoContext'
import { useEffect, useContext } from "react";
import {getFirestore, collection, getDocs, query, where} from 'firebase/firestore';
import { CategoriesContext } from "../contexts/CategoriesContext";
import { useParams, Link } from "react-router-dom";
import CategoryItem from './CategoryItem';
import ItemList from './ItemList';
import Boton from './Boton';

const ItemListContainer = () => {
    const {setProductos} = useContext(CatalogoContext)
    const {setCategories} = useContext(CategoriesContext)
    const {id} = useParams()
    useEffect(() => {
        const db = getFirestore();
        const tiendaCollection = collection(db, "tienda");
        const categoriesCollection = collection(db, 'categorias')
        if (id) {
          const prods = query(tiendaCollection, where('categoryId', '==', `${id}`))
          getDocs(prods).then((res) => setProductos(res.docs.map((item => (item.data())))))
          .catch((err) => console.log(err));
        } else {
          getDocs(tiendaCollection).then((res) => setProductos(res.docs.map((item => (item.data())))))
          .catch((err) => console.log(err));
        }
          getDocs(categoriesCollection)
          .then((snapshot) => {
            const categories = snapshot.docs.map((catgs) => ({id:catgs.id, ...catgs.data()}));
            setCategories(categories);
          })
          .catch((err) => console.log(err));  
      },[setProductos, setCategories, id]);
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