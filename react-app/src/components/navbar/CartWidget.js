import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

const CartWidget = ({className}) => {
    const {cartProducts} = useContext(CartContext)
    const quantityOfProducts = cartProducts.map(prod => prod.quantity)
    const totalOfProducts = quantityOfProducts.reduce((total, current) => total + current,0)
    return (
        <button type="button" className={className}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <div className="relative">
                <span className={`${totalOfProducts === 0 ? 'hidden' : 'flex absolute items-center justify-center rounded-full w-5 h-5 -bottom-2 -right-2 bg-white text-black text-xs font-semibold'}`}>{totalOfProducts}</span>
            </div>
        </button>
    )
}
export default CartWidget