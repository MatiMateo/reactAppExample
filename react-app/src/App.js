import './App.css';
import NavbarContainer from './components/navbar/NavbarContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Detail from './routes/detail/Detail';
import Home from './routes/home/Home';
import CartContainer from './routes/cart/CartContainer';
import { CatalogoContextProvider } from './contexts/CatalogoContext';
import ItemListContainer from './components/ItemListContainer'
import { ProductosContextProvider } from './contexts/ProductosContext';
import { CategoriesContextProvider } from './contexts/CategoriesContext';
import { CartContextProvider } from './contexts/CartContext';


function App() {
  return (
        <CartContextProvider>
          <CatalogoContextProvider>
            <CategoriesContextProvider>
              <ProductosContextProvider>
                <Router>
                  <NavbarContainer />
                  <Routes>
                    <Route path='/' element={<Home className='relative' />}></Route>
                    <Route path='/catalogo' element={<ItemListContainer className='relative' />}></Route>
                    <Route path='/catalogo/:key' element={<Detail className='relative' />}></Route>
                    <Route path='/categories/:categoryId' element={<ItemListContainer className='relative' />}></Route>
                    <Route path='/cart' element={<CartContainer className='relative' />}></Route>
                  </Routes>
                </Router>
              </ProductosContextProvider>
            </CategoriesContextProvider>
          </CatalogoContextProvider>
        </CartContextProvider>
  );
}

export default App;
