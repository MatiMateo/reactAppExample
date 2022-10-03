import Portada from "./components/Portada";
import Boton from "../../components/Boton";
import { Link } from "react-router-dom";
const Home = ({className}) => {
    return (
        <body className={className}>
            <div className="">
                <Portada className='w-full flex sm:grid sm:grid-cols-2 justify-center items-center object-cover px-2 my-2 h-[700px] md:h-[1080px]'>
                    <div className="absolute flex flex-col items-center justify-center h-full opacity-100 sm:relative">
                        <div>Cleo Tienda</div>
                        <Boton><Link to='/categories'>Ver Categorías</Link></Boton>
                    </div>
                </Portada>
            </div>
        </body>
    )
}

export default Home;