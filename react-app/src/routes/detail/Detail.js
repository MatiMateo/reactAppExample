import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
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
            <ItemDetailContainer className={"flex relative items-center justify-center"}>
                <ItemDetail name={pokeInfo.name} image={pokeInfo.sprites.other.dream_world.front_default} height={pokeInfo.height} weight={pokeInfo.weight} />
            </ItemDetailContainer>}
        </div>
    )
}

export default Detail;