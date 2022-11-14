import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { ProductosContext } from "../../../contexts/ProductosContext";

const Counter = () => {
    const {productDetail} = useContext(ProductosContext)
    const {setQuantityProduct} = useContext(CartContext)
    const prodStock = productDetail.map(prod => prod.stock)
    const [counter, setCounter] = useState(1)
    const clickHandlerPlus = () => {
        setCounter(counter + 1)
        
    }
    const clickHandlerMinus = () => {
        setCounter(counter - 1)
    }
    useEffect(() => {
        setQuantityProduct(counter)
    }, [counter, setQuantityProduct])

    return (
        <div className="flex flex-row p-2">
            <div className="p-2">
                <button type="button" disabled={counter <= 1} onClick={clickHandlerMinus}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                </button>
            </div>
            <div className="p-2">{counter}</div>
            <div className="p-2">
                <button type="button" disabled={counter >= prodStock} onClick={clickHandlerPlus}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </button>
            </div>
        </div>

    )
}

export default Counter;