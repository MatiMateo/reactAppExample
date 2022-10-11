const Boton = ({children, disabled, onClick, className}) => {
    return (
        <button onClick={onClick} disabled={disabled} className="px-3 py-2 rounded-full shadow-lg h-fit w-fit bg-pink-cleo-300 outline outline-2 outline-pink-cleo-900">{children}</button>
    )
}

export default Boton;