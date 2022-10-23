import './App.css';
import NavbarContainer from './components/NavbarContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Detail from './routes/detail/Detail';
import Home from './routes/home/Home';
import CartContainer from './routes/cart/CartContainer';
import CategoryListContainer from './routes/categories/CategoryListContainer';


function App() {
  return (
      <Router>
        <NavbarContainer />
        <Routes>
              <Route path='/' element={<Home className='relative' />}></Route>
              <Route path='/categories' element={<CategoryListContainer className='relative' />}></Route>
              <Route path='/categories/:id' element={<Detail className='relative' />}></Route>
              <Route path='/cart' element={<CartContainer className='relative' />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
