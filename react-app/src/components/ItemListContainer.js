import '../App.css';
import Item from "./Item";

const ItemListContainer = ({classNameItemListContainer, classNameImg, image, alt, children}) => {
    return (
        <div className='py-2 pb-2 mt-2 itemList'>
            <Item classNameImg={classNameImg} image={image} alt={alt} children={children} >{children}</Item>
        </div>
    )
}

export default ItemListContainer;