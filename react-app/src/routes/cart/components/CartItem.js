import {  useContext } from "react";
import Boton from "../../../components/Boton";
import { CartContext } from "../../../contexts/CartContext";

const CartItem = () => {
    const {cartProducts} = useContext(CartContext)
    return (
       cartProducts.map(prod => 
        <div key={prod.key} className="flex items-center justify-around w-full p-2 mt-2 bg-soft-pink-500">
            <div className="flex flex-col items-center justify-center">
                <div>
                    Producto
                </div>
                <div>
                    {prod.name}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div>
                    Cantidad
                </div>
                <div>
                    {prod.quantity}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div>Subtotal</div>
                <div>
                    {prod.price*prod.quantity}
                </div>
            </div>
            <div>
                <Boton><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg></Boton>
            </div>
        </div>)
    )
}

export default CartItem;