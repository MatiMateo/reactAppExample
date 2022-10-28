import '../../../App.css'
import { useContext } from 'react';
import Boton from '../../../components/Boton';
import Counter from './Counter';
import { ProductosContext } from '../../../contexts/ProductosContext';
const ItemDetail = () => {
    const {productDetail} = useContext(ProductosContext)
    return ( 
        productDetail.map( prod =>
        <div key={prod.key} className="flex flex-col items-center m-2 justify-center w-1/2 bg-verysoft-pink-500 border-verysoft-pink-500 border-[0.5px] rounded-md">
            <h1 className="p-2 text-3xl font-bold">{prod.name}</h1>
            <img className="p-2" src={prod.image} alt={prod.name} />
            <p className="p-2 text-lg font-semibold">${prod.price}</p>
            <p className="p-2 text-lg font-semibold">{prod.description}</p>
            <div className='flex items-center w-2/4 justify-evenly'>
                <p className='w-1/12 '>Talles:</p>
                <div className='flex items-center w-9/12 justify-evenly'>
                    {prod.size.map(t => <Boton>{t}</Boton>)}
                </div>
            </div>
            <Counter />
            <Boton>Agregar al carrito</Boton>
        </div>
    ))
}

export default ItemDetail;