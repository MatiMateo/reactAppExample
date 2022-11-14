import { useContext, useState } from "react"
import Boton from "../../../components/Boton"
import { CartContext } from "../../../contexts/CartContext"
const ContactForm = ({className, buyHandler}) => {
    const {form, setForm} = useContext(CartContext)
    const [btnBuy, setBtnBuy] = useState(false)
    const onSubmitHandler = (ev) => {
        ev.preventDefault()
        setForm(form)
        setBtnBuy(true)
    }
    const changeHandler = (ev) => {
        setForm({...form, [ev.target.name]: ev.target.value})        
    }
    return (
        <form className={className} onSubmit={onSubmitHandler}>
            <div className="flex flex-col w-1/2">
                <div className="flex items-center justify-around p-2">
                    <label className="w-1/2" htmlFor="name">Nombre</label>
                    <input className="w-1/2" type="text" name="name" id="name" value={form.name || ''} onChange={changeHandler} />
                </div>
                <div className="flex items-center justify-around p-2">
                    <label className="w-1/2" htmlFor="lastname">Apellido</label>
                    <input className="w-1/2" type="text" name="lastname" id="lastname" value={form.lastname || ''} onChange={changeHandler} />
                </div>
                <div className="flex items-center justify-around p-2">
                    <label className="w-1/2" htmlFor="phone">Teléfono</label>
                    <input className="w-1/2" type="tel" name="phone" id="phone" value={form.phone || ''} onChange={changeHandler} />
                </div>
                <div className="flex items-center justify-around p-2">
                    <label className="w-1/2" htmlFor="email">Email</label>
                    <input className="w-1/2" type="email" name="email" id="email" value={form.email || ''} onChange={changeHandler}  />
                </div>
                <div className="flex items-center justify-around p-2">
                    <label className="w-1/2" htmlFor="emailCheck">Repetir Email</label>
                    <input className="w-1/2" type="email" name="emailCheck" id="emailCheck" value={form.email || ''} onChange={changeHandler} />
                </div>
                <div className={`${btnBuy === true ? 'hidden' : 'flex items-center justify-center mt-2'}`}>
                    <Boton >Guardar</Boton>
                </div>
                <div className={`${btnBuy === false ? 'hidden' : 'flex items-center justify-center mt-2'}`}>
                    <Boton onClick={buyHandler} >Comprar</Boton>
                </div>
            </div>
        </form>
    )
}

export default ContactForm