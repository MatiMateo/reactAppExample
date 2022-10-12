import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Item = ({url, id}) => {
    const [info, setInfo] = useState()

    useEffect(() => {
        fetch (url)
        .then(res => res.json())
        .then(infoProd => setInfo(infoProd))
    }, [url])
    return (
        <div>
        {!info ? <div>Cargando...</div> : 
        <div id={id} url={url} className="relative w-full bg-verysoft-pink-500 border-verysoft-pink-500 border-[0.5px] rounded-md">
            <Link to={`/catalogo/${id}`}><img src={info.sprites.other.home.front_default} alt={info.name} />
                <div className="flex items-center justify-center w-full"><span>Nombre: <span className="font-bold ">{info.name}</span></span></div>
            </Link>
            <div className="flex items-center justify-center w-full"><span>Altura: <span className="font-bold ">{info.height}"</span></span></div>
        </div>}
    </div>
    )
}

export default Item;