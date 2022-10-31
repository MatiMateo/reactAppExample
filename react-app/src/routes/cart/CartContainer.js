import { useContext } from "react";
import { useEffect } from "react";
import Boton from "../../components/Boton";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./components/CartItem";
import ContactForm from "./components/ContactForm";

const CartContainer = () => {
    const {cartProducts, order, setOrder} = useContext(CartContext)
    const buyHandler = () => {

    }
    return (
        <div className="flex flex-col">
            <CartItem />
            <ContactForm />
            <Boton onClick={buyHandler}>Comprar</Boton>
        </div>

    )
}

export default CartContainer;