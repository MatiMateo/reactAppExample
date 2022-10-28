import { useContext } from "react";
import { Link } from "react-router-dom";
import { CatalogoContext } from "../contexts/CatalogoContext";

const Item = () => {
    const {productos} = useContext(CatalogoContext)    
    return ( 
           productos.map(catg =>
                    <div key={catg.key} className="relative w-auto bg-verysoft-pink-500 border-verysoft-pink-500 border-[0.5px] md:h-80 rounded-md">
                        <Link to={`/catalogo/${catg.key}`}>
                        <div>
                            <img className={`relative object-cover w-full ${catg.stock === 0 && 'opacity-30'} h-60 md:h-72`} src={catg.image} alt={catg.name} />
                            <div className={`absolute ${catg.stock === 0 ? 'flex' : 'hidden'} items-center justify-center w-full p-2 text-2xl font-bold bg-white top-1/2`}>AGOTADO</div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <span className="font-bold ">{catg.name}</span>
                        </div>
                        </Link>
                    </div>)
    )
}

export default Item;