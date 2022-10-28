const MenuContacto = ({className}) => {
    return (
    <ul className={className}>
        <li className='z-0 p-4 hover:bg-[#f7dcca] hover:text-black'><a href="https://instagram.com" rel="noreferrer" target='_blank'>Instagram</a></li>
        <li className='z-10 p-4 hover:bg-[#f7dcca] hover:text-black'><a href="https://facebook.com" rel="noreferrer" target='_blank'>Facebook</a></li>
        <li className='z-20 p-4 hover:rounded-b-md hover:bg-[#f7dcca] hover:text-black'><a href="https://whatsapp.com" rel="noreferrer" target='_blank'>Whatsapp</a></li>
    </ul>
    )
}
export default MenuContacto;