import Boton from '../../../components/Boton';
import Counter from '../../../components/Counter'
const ItemDetail = ({name, image, height, weight}) => {
    return (
        <div name={name} image={image} height={height} className="flex flex-col items-center m-2 justify-center w-1/2 bg-verysoft-pink-500 border-verysoft-pink-500 border-[0.5px] rounded-md">
            <h1 className="p-2 text-3xl font-bold">{name}</h1>
            <img className="p-2" src={image} alt={name} />
            <p className="p-2 text-lg font-semibold">Altura: {height}"</p>
            <p className="p-2 text-lg font-semibold">Peso: {weight} lbs</p>
            <Counter />
            <Boton>Agregar al carrito</Boton>
        </div>
    )
}

export default ItemDetail;