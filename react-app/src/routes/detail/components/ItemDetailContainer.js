import ArrowBack from "../../../components/ArrowBack";
import ItemDetail from './ItemDetail'
const ItemDetailContainer = ({className}) => {
    return (
        <div className={className}>
            <ArrowBack className='fixed left-4 top-60' />
            <ItemDetail />
        </div>
    )
}

export default ItemDetailContainer;