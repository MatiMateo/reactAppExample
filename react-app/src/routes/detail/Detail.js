import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
/*import Counter from "../../components/Counter";*/
const Detail = () => {
    const [pokeInfo, setPokeInfo] = useState({})
    const {id} = useParams()
    useEffect(() => {
        fetch (`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => res.json())
        .then(info => setPokeInfo(info))
    }, [id])

    return (
        <div>
            {Object.keys(pokeInfo).length === 0 ? <div>Cargando...</div> : 
            <ItemDetail className={"relative w-full bg-verysoft-pink-500 border-verysoft-pink-500 border-[0.5px] rounded-md"}>
                <div>
                    <h1>{pokeInfo.name}</h1>
                    <img src={pokeInfo.sprites.other.dream_world.front_default} alt={pokeInfo.name} />
                    <p>{pokeInfo.height}</p>
                </div>
            </ItemDetail>}
        </div>
    )
}

export default Detail;