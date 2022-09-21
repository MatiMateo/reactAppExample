import ItemListContainer from './ItemListContainer';
import CartWidget from './CartWidget';
import MenuMovil from './MenuMovil';
import { useState } from 'react';

const Navbar = ({className}) => {
  
  const [menuMovil,setMenuMovil] = useState(true)
  const toggleMenuMovil = () => {
    setMenuMovil(!menuMovil)
  }
  const [menu,setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
  }
    return (
      <div className={className}>
        <nav className="flex items-center justify-end w-full text-white">
          <div className={`${ menuMovil ? 'hidden' : 'flex'} absolute shadow-2xl slide-bottom shadow-black rounded-lg sm:relative sm:top-0 sm:z-10 p-2 flex-col items-center justify-center text-right w-full left-0 bg-black -z-10 opacity-95 sm:opacity-100 top-[18vw] sm:flex sm:flex-row`}>
              <a href="index.html" className='w-full sm:text-center'>Tienda</a>
              <div className='flex flex-col w-full my-2 sm:m-0 sm:items-center'>
                <button onClick={toggleMenu} type='button' className='relative flex flex-row items-end justify-end'>
                  <span>
                    <svg className="items-center w-4 h-6 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                  </span>
                  Contacto 
                  <span>
                    <svg className="items-center hidden w-4 h-6 sm:flex" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </span>
                </button>
                <ItemListContainer greeting='Hola, soy un Item' className={`${ menu ? 'flex' : 'hidden'} absolute flex-col w-36 text-center bg-black rounded-lg menuContacto top-10`}/>
              </div>
              <CartWidget className='flex justify-end w-full sm:place-content-center'/>
            </div>
            <MenuMovil onClick={toggleMenuMovil} className='flex sm:hidden'/>
        </nav>
      </div>
    )
}

export default Navbar;