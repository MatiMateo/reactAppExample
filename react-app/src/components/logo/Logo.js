import logo from './logo.svg';
import { Link } from 'react-router-dom';

const Logo = (props) => {
    return (
        <div className={props.className}> 
            <Link to='/'>
                <img src={logo} alt="Logo" />
            </Link>
        </div> 
    )
}

export default Logo;