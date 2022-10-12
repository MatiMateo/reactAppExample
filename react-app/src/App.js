import './App.css';
import NavbarContainer from './components/NavbarContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Detail from './routes/detail/Detail';
import Home from './routes/home/Home';
import Catalogo from './routes/catalogo/catalogo';


function App() {
  return (
      <Router>
        <NavbarContainer />
        <Routes>
              <Route path='/' element={<Home className='relative' />}></Route>
              <Route path='/catalogo' element={<Catalogo className='relative' />}></Route>
              <Route path='/catalogo/:id' element={<Detail className='relative' />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
