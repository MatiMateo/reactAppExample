import Navbar from './components/Navbar';
import Logo from './components/logo/Logo'
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import MenuMovil from './components/MenuMovil';
import './App.css';
import { useState } from 'react';


function App() {
  const [menuMovil,setMenuMovil] = useState(true)
  const toggleMenuMovil = () => {
    setMenuMovil(!menuMovil)
  }
  const [menu,setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
      <header className="grid w-full grid-rows-1 gap-2 p-2 bg-black auto-cols-auto">
        <Logo className='w-full col-span-5 col-start-1 p-2' />
        <Navbar className={"flex items-center justify-end relative sm:justify-center w-full col-span-6 col-start-6 p-2"}>
          <div className={`${ menuMovil ? 'hidden' : 'flex'} absolute shadow-2xl slide-bottom shadow-black rounded-lg sm:relative sm:top-0 sm:z-10 p-2 flex-col items-center justify-center text-right w-full left-0 bg-black -z-10 opacity-95 top-[18vw] sm:flex sm:flex-row`}>
            <a href="#tienda" className='w-full sm:text-center'>Tienda</a>
            <div className='w-full flex flex-col my-2 sm:m-0 sm:items-center'>
              <button onClick={toggleMenu} type='button' className='flex relative flex-row items-end justify-end'>Contacto <span><svg className="items-center w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></span></button>
              <ItemListContainer className={`${ menu ? 'flex' : 'hidden'} absolute flex-col w-36 text-center bg-black rounded-lg menuContacto top-10`}/>
            </div>
            <CartWidget className='w-full flex justify-end sm:place-content-center'/>
          </div>
            <MenuMovil onClick={toggleMenuMovil} className='flex sm:hidden'/>
        </Navbar>
      </header>
  );
}

export default App;
