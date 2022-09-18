import Navbar from './components/Navbar';
import Logo from './components/logo/Logo'
import ListItem from './components/ListItem';
import CartWidget from './components/CartWidget';
import './App.css';
import { useState } from 'react';


function App() {
  const [menu,setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(!menu)
  }
  return (
      <header className="grid w-full grid-rows-1 gap-2 p-2 bg-black auto-cols-auto">
        <Logo className='w-full col-span-5 col-start-1 p-2' />
        <Navbar className={"flex items-center justify-center w-full col-span-6 col-start-6 p-2"}>
          <div className="flex items-center justify-around w-full mr-2">
            <a href="#tienda">Tienda</a>
            <div className='relative flex flex-col'>
              <button onClick={toggleMenu} type='button'>Contacto</button>
              <ListItem className={`${ menu ? 'flex' : 'hidden'} absolute flex-col w-32 text-center bg-black rounded-lg menuContacto -left-8 top-10`}/>
            </div>
            <CartWidget/>
          </div>
        </Navbar>
      </header>
  );
}

export default App;
