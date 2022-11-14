import BotonMenuContacto from './BotonMenuContacto';
import CartWidget from './CartWidget';
import MenuMovil from './MenuMovil';
import MenuCategories from './MenuCategories';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuContacto from './MenuContacto';
import BotonMenuCategories from './BotonMenuCategories';

const Navbar = ({className}) => {
  
  const [menuMovil,setMenuMovil] = useState(true)
  const toggleMenuMovil = () => {
    setMenuMovil(!menuMovil)
  }
  const [menuContacto,setMenuContacto] = useState(false)
  const [menuCategories,setMenuCategories] = useState(false)
  const toggleMenuContacto = () => {
    setMenuContacto(!menuContacto)
  }
  const toggleMenuCategories = () => {
    setMenuCategories(!menuCategories)
  }
    return (
      <div className={className}>
        <nav className="flex items-center justify-end w-full text-white">
          <ul className={`${ menuMovil ? 'hidden' : 'flex'} absolute shadow-2xl slide-bottom shadow-black rounded-lg sm:relative sm:top-0 sm:z-10 p-2 flex-col items-center justify-center text-right w-full left-0 bg-black -z-50 opacity-95 sm:opacity-100 top-[18vw] sm:flex sm:flex-row`}>
              <li className='w-full sm:text-center'><Link to={'/catalogo'}>Productos</Link></li>
              <li className='flex flex-col w-full my-2 sm:m-0 sm:items-center'>
                <BotonMenuContacto onClick={toggleMenuContacto} type='button' className='relative flex flex-row items-end justify-end' />
                <MenuContacto className={`${ menuContacto ? 'flex' : 'hidden'} absolute flex-col w-36 text-center bg-black rounded-lg menuContacto top-10`}/>
              </li>
              <li>
                <BotonMenuCategories onClick={toggleMenuCategories} type='button' className='relative flex flex-row items-end justify-end' />
                <MenuCategories className={`${ menuCategories ? 'flex' : 'hidden'} absolute flex-col w-36 text-center bg-black rounded-lg menuContacto top-10`}/>
              </li>
              <li className='w-full'><Link to={'/cart'}><CartWidget className='relative flex justify-end w-full sm:place-content-center'/></Link></li>
          </ul>
            <MenuMovil onClick={toggleMenuMovil} className='relative z-30 flex sm:hidden'/>
        </nav>
      </div>
    )
}

export default Navbar;