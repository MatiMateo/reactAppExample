import { Link } from "react-router-dom";
const Item = ({classNameImg, image, alt, children}) => {
    return (
        <div image={image} className="relative w-full bg-verysoft-pink-500 border-verysoft-pink-500 border-[0.5px] rounded-md">
            <Link to='/detail'><img className={classNameImg} src={image} alt={alt} /></Link>
            {children}
        </div>
    )
}

export default Item;