import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import CartItem from "./components/CartItem";
import ContactForm from "./components/ContactForm";

const CartContainer = () => {
    const {cartProducts,form, order, setOrder, totalPrice} = useContext(CartContext)
    const prodOnCart = cartProducts.map(prod => ({'name': prod.name, 'description': prod.description, 'unitaryPrice': prod.price, 'quantity': prod.quantity}))
    const buyHandler = () => {
        const prodOnCartName = cartProducts.map(prod => prod.name)
        const fecha = Date.now()
        const fechaActual = new Date(fecha)
        setOrder({...prodOnCart, 'buyDate': fechaActual.toUTCString(), 'state': 'Generada', 'buyerName':form.name, 'buyerLastName':form.lastname, 'buyerPhone':form.phone, 'buyerEmail':form.email, 'totalprice':totalPrice})
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, {...order}).then(snapshot => alert(`Su orden ha sido generada con el siguiente id: ${snapshot.id}.
        Detalle: ${prodOnCartName}, por $ ${totalPrice}`))
    }
    return (
        <div className="flex flex-col">
            <CartItem />
            <ContactForm buyHandler={buyHandler} className={`${cartProducts.length === 0 ? 'hidden' : 'flex items-center justify-center mt-4'}`} />    
        </div>

    )
}

export default CartContainer;