import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import CartItem from "./components/CartItem";
import ContactForm from "./components/ContactForm";

const CartContainer = () => {
    const {cartProducts,form, order, setOrder} = useContext(CartContext)
    const prodOnCart = cartProducts.map(prod => prod)
    const buyHandler = () => {
        setOrder([...prodOnCart, {...form}])
        console.log(order);
    }
    return (
        <div className="flex flex-col">
            <CartItem />
            <ContactForm buyHandler={buyHandler} className={`${cartProducts.length === 0 ? 'hidden' : 'flex items-center justify-center mt-4'}`} />    
        </div>

    )
}

export default CartContainer;