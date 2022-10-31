import '../../../App.css'
import { useContext } from 'react';
import Boton from '../../../components/Boton';
import Counter from './Counter';
import { ProductosContext } from '../../../contexts/ProductosContext';
import { CartContext } from '../../../contexts/CartContext';
const ItemDetail = () => {
    const {productDetail} = useContext(ProductosContext)
    const {setCartProducts, quantityProduct, cartProducts} = useContext(CartContext)
    const addToCartHandler = () => {
        const productDetailCart = productDetail.map(prod => ({'name':prod.name, 'key':prod.key, 'price':prod.price, 'quantity':quantityProduct }))
        const productCart = [...cartProducts,...productDetailCart]
        setCartProducts(productCart)
    }
    
    return ( 
        productDetail.map( prod =>
        <div key={prod.key} className="flex flex-col items-center m-2 justify-center w-1/2 bg-verysoft-pink-500 border-verysoft-pink-500 border-[0.5px] rounded-md">
            <h1 className="p-2 text-3xl font-bold">{prod.name}</h1>
            <img className="p-2" src={prod.image} alt={prod.name} />
            <p className="p-2 text-lg font-semibold">${prod.price}</p>
            <p className="p-2 text-lg font-semibold">{prod.description}</p>
            <Counter />
            <Boton onClick={addToCartHandler}>Agregar al carrito</Boton>
        </div>
    ))
}

export default ItemDetail;