import React from "react"
import { useState } from "react"

const CartContext = React.createContext()

const CartContextProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([])
    const [form, setForm] = useState({})
    const [order, setOrder] = useState([])
    const [quantityProduct, setQuantityProduct] = useState()
    const clearCart = () => setCartProducts([])
    const isProductInCart = (key) => cartProducts.find(prod => prod.key === key) ? true : false
    const removeProduct = (key) => setCartProducts(cartProducts.filter(prod => prod.key !== key))
    const addToCart = (item, quantity) => {
        if (isProductInCart(item.key)) {
            const prodInCart = cartProducts.map(prod => prod.key === item.key ? {...prod, quantity: prod.quantity >= prod.stock ? alert('No hay stock') ? prod.stock : prod.stock : prod.quantity + quantity} : prod)
            setCartProducts(prodInCart)
        } else {
            setCartProducts([...cartProducts, {...item, quantity}])
        }
    }
    const totalPrice = cartProducts.reduce((prev,act) => prev + act.price * act.quantity, 0)
    return (
        <CartContext.Provider value={{
            quantityProduct,
            setQuantityProduct,
            clearCart,
            isProductInCart,
            removeProduct,
            order,
            setOrder,
            addToCart,
            cartProducts,
            totalPrice,
            form,
            setForm
            }}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider};