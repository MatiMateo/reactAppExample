import ArrowBack from "../../../components/ArrowBack";
const ItemDetailContainer = ({children, className}) => {
    return (
        <div className={className}>
            <ArrowBack className='absolute left-2 top-2' />
            {children}
        </div>
    )
}

export default ItemDetailContainer;