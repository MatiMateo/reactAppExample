import ImgPortada from '../../../images/prod_4.jpeg';
const Portada = ({className, children}) => {
    return (
        <div className={className}>
            <img className='relative object-cover object-center w-full h-full md:h-full md:object-cover opacity-70 sm:opacity-100' src={ImgPortada} alt="imágen de portada" />
            {children}
        </div>
    )
}

export default Portada;