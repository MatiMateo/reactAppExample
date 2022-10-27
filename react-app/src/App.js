import './App.css';
import NavbarContainer from './components/navbar/NavbarContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Detail from './routes/detail/Detail';
import Home from './routes/home/Home';
import CartContainer from './routes/cart/CartContainer';
import { CatalogoContextProvider } from './contexts/CatalogoContext';
import ItemListContainer from './routes/catalogo/ItemListContainer';


function App() {
  return (
      <Router>
        <NavbarContainer />
        <CatalogoContextProvider>
        <Routes>
              <Route path='/' element={<Home className='relative' />}></Route>
              <Route path='/catalogo' element={<ItemListContainer className='relative' />}></Route>
              <Route path='/catalogo/:id' element={<Detail className='relative' />}></Route>
              <Route path='/cart' element={<CartContainer className='relative' />}></Route>
        </Routes>
        </CatalogoContextProvider>
      </Router>
  );
}

export default App;
