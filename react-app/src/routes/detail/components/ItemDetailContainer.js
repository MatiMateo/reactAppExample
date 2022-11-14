import { useContext } from "react";
import ArrowBack from "../../../components/ArrowBack";
import { CartContext } from "../../../contexts/CartContext";
import { ProductosContext } from "../../../contexts/ProductosContext";
import ItemDetail from './ItemDetail'
const ItemDetailContainer = ({className}) => {
    const {addToCart, quantityProduct} = useContext(CartContext)
    const {productDetail} = useContext(ProductosContext)
    const addToCartProduct = (productToCart) => {
    productToCart = productDetail.find((prod) => prod.key)
    addToCart(productToCart, quantityProduct)
}

    return (
        <div className={className}>
            <ArrowBack className='fixed left-4 top-60' />
            <ItemDetail addToCartHandler={addToCartProduct} />
        </div>
    )
}

export default ItemDetailContainer;