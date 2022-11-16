import { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../contexts/CategoriesContext";

const MenuCategories = ({className}) => {
    const {categories} = useContext(CategoriesContext)
    return (
    <ul className={className}>
        {!categories ? <li>Cargando...</li> : categories.map(catg => <li key={catg.key} className='z-0 p-4 hover:bg-[#f7dcca] hover:text-black'><Link to={`categories/${catg.key}`}>{catg.categoryName}</Link></li>)}
    </ul>
    )
}
export default MenuCategories;