import './App.css';
import NavbarContainer from './components/NavbarContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Detail from './routes/detail/Detail';
import Home from './routes/home/Home';


function App() {
  return (
      <Router>
        <NavbarContainer />
        <Routes>
              <Route path='/' element={<Home className='relative' />}></Route>
              <Route path='/detail' element={<Detail className='relative' />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
