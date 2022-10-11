import '../../App.css';
import { useState } from "react";
import { useEffect } from "react";
import Boton from '../../components/Boton';
import ItemList from '../../components/ItemList';
/*import { Link } from 'react-router-dom';*/
const Catalogo = () => {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const [page,setPage] = useState()

    useEffect(() => {
        fetch (url)
        .then(res=>res.json())
        .then(list => setPage(list))
    }, [url]);
    const paginationButtonClickHandler = (newUrl) =>{
        setUrl(newUrl)
    }
    return (
        <div>
            {!page ? <div>Cargando...</div> : 
            <div>
                <div className='flex items-center justify-center w-full m-2'>{page.previous ? <Boton onClick={() =>paginationButtonClickHandler(page.previous)}>Prev</Boton> : <Boton disabled='disabled'>Prev</Boton>}
                {page.next ? <Boton onClick={() =>paginationButtonClickHandler(page.next)}>Next</Boton> : <Boton disabled='disabled'>Next</Boton>}</div>
                <ItemList page={page.results} />
                <div className='flex items-center justify-center w-full m-2'>{page.previous ? <Boton onClick={() =>paginationButtonClickHandler(page.previous)}>Prev</Boton> : <Boton disabled='disabled'>Prev</Boton>}
                {page.next ? <Boton onClick={() =>paginationButtonClickHandler(page.next)}>Next</Boton> : <Boton disabled='disabled'>Next</Boton>}</div>    
            </div>}
            
        </div>
    )
}

export default Catalogo;