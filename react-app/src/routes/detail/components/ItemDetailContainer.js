import ArrowBack from "../../../components/ArrowBack";
import ItemDetail from './ItemDetail'
const ItemDetailContainer = ({className}) => {
    return (
        <div className={className}>
            <ArrowBack className='absolute left-2 top-60' />
            <ItemDetail />
        </div>
    )
}

export default ItemDetailContainer;