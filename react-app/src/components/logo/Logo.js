import logo from './logo.svg';

const Logo = (props) => {
    return (
        <div className={props.className}> 
            <a href="../public/index.html">
                <img src={logo} alt="Logo" />
            </a>
        </div> 
    )
}

export default Logo;