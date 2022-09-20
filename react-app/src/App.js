import Navbar from './components/Navbar';
import Logo from './components/logo/Logo';
import './App.css';


function App() {
  return (
      <header className="grid w-full grid-rows-1 gap-2 p-2 bg-black auto-cols-auto">
        <Logo className='w-full col-span-5 col-start-1 p-2' />
        <Navbar className={"flex items-center justify-end relative sm:justify-center w-full col-span-6 col-start-6 p-2"}/>
      </header>
  );
}

export default App;
