import { useState } from "react";
import { useEffect } from "react";
import Item from "../../components/Item";
const Catalogo = () => {
    const [producto,setProducto] = useState([])
    useEffect(() => {
        fetch('./productos.json').then(res => res.json()).then(prod => setProducto(prod))
    }, []);
    return (
        producto.map((prod) => <div>Soy un {prod.name}</div> )
    )
}

export default Catalogo;