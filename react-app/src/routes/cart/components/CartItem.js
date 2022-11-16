import {  useContext } from "react";
import Boton from "../../../components/Boton";
import { CartContext } from "../../../contexts/CartContext";

const CartItem = () => {
    const {cartProducts, removeProduct, clearCart, totalPrice} = useContext(CartContext)
    const removeItem = (ev, key) => {
        key = ev.target.parentElement.id
        removeProduct(key)
    }
    return (
       <div className="flex flex-col items-center justify-center">
        <div className="w-full p-2">
            {cartProducts.map(prod => 
            <div key={prod.key} className="flex items-center justify-around w-full h-20 p-2 mt-2 rounded-md bg-soft-pink-500">
                <div className="items-center justify-center hidden w-1/5 md:flex">
                    <div className="w-20 h-20">
                        <img className="object-cover w-full h-20 p-1 rounded-full" src={prod.image} alt={prod.description} />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-1/5">
                    <div>
                        Producto
                    </div>
                    <div>
                        {prod.name}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-1/5">
                    <div>
                        Cantidad
                    </div>
                    <div>
                        {prod.quantity}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center w-1/5">
                    <div>Subtotal</div>
                    <div>
                       $ {prod.price*prod.quantity}
                    </div>
                </div>
            <div>
                <Boton id={prod.key} onClick={removeItem}><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></Boton>
            </div>
        </div>)}
        <div className={`${cartProducts.length === 0 ? 'hidden' : 'flex items-center justify-around w-full h-10 p-2 mt-2 bg-soft-pink-500 rounded-md'}`}>
                Total: $ {totalPrice}
        </div>
        </div>
        <Boton className={`${cartProducts.length === 0 ? 'hidden' : 'flex mt-2'}`} onClick={clearCart} >Vaciar Carrito</Boton>
       </div>
    )
}

export default CartItem;