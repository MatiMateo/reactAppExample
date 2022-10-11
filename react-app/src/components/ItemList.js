import '../App.css';
import Item from "./Item";

const ItemList = ({children, page}) => {
    return (
        <div page={page} className='py-2 pb-2 mt-2 itemList'>
            {page.map(prod => 
            <Item key={prod.name} url={prod.url} alt={prod.name} children={children}>
                {children}
            </Item>)}
            
        </div>
    )
}

export default ItemList;