import '../../App.css';
import { useState } from "react";
import { useEffect } from "react";
import ItemListContainer from "../../components/ItemListContainer";
import { Link } from 'react-router-dom';
const Catalogo = () => {
    const [producto,setProducto] = useState([])
    useEffect(() => {
        fetch('./productos.json').then(res => res.json()).then(prod => setProducto(prod))
    }, []);
    return (
        <div className='itemList place-content-center'>
            {producto.map((prod) =><ItemListContainer key={prod.id}
                                image={prod.img} 
                                alt={prod.name} 
                                classNameImg='relative' 
                                children={
                                    <div className='flex flex-col p-2'>
                                        <Link to='/detail'>
                                            {prod.name}
                                        </Link>
                                        <div>
                                            {prod.price}
                                        </div>
                                    </div>} />
                                )}
        </div>
    )
}

export default Catalogo;