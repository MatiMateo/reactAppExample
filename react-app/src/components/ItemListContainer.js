import { Link } from "react-router-dom";
const ItemListContainer = (props) => {
    return (
    <ul className={props.className}>
        <li className='z-0 p-4 hover:bg-[#f7dcca] hover:text-black'><Link to='../../https://instagram.com'>Instagram</Link></li>
        <li className='z-10 p-4 hover:bg-[#f7dcca] hover:text-black'><Link to='https://facebook.com'>Facebook</Link></li>
        <li className='z-20 p-4 hover:rounded-b-md hover:bg-[#f7dcca] hover:text-black'><Link to='https://whatsapp.com'>Whatsapp</Link></li>
    </ul>
    )
}
export default ItemListContainer;