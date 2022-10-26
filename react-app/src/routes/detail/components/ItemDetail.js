import { useContext } from 'react';
import Boton from '../../../components/Boton';
import Counter from './Counter';
import { CategoryContext } from '../../../contexts/CategoryContext';
const ItemDetail = () => {
    const {categories} = useContext(CategoryContext)
    console.log(categories.size.map(a => console.log(a)))
    return ( 
        <div key={categories.id} className="flex flex-col items-center m-2 justify-center w-1/2 bg-verysoft-pink-500 border-verysoft-pink-500 border-[0.5px] rounded-md">
            <h1 className="p-2 text-3xl font-bold">{categories.name}</h1>
            <img className="p-2" src={categories.image} alt={categories.name} />
            <p className="p-2 text-lg font-semibold">${categories.price}</p>
            <p className="p-2 text-lg font-semibold">{categories.description}</p>
            <div>{categories.size.map(t => <Boton>{t}</Boton>)}</div>
            <Counter />
            <Boton>Agregar al carrito</Boton>
        </div>
    )
}

export default ItemDetail;