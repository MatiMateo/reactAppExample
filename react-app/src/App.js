import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="bg-[#f7dcca]">
      <header className="grid w-full grid-rows-1 gap-2 p-2 bg-black auto-cols-auto">
        <a
          className="App-link"
          href="./App.js"
          target="_self"
          rel="noopener noreferrer"
        >
        <img src={logo} className="w-full col-span-5 col-start-1 p-2" alt="logo" />
        </a>
        <div className="flex items-center justify-center w-full col-span-6 col-start-6 p-2">
          <nav id='lateral' className="flex items-center w-full text-white">
            <a href="./App.js" target='_self'>Tienda</a>
            <div className="menu__contacto">
              <span className="dropspan">Contacto</span>
              <a href="https://instagram.com/cleo_tienda_ok" target='_blank' rel="noopener noreferrer">Instagram</a>
              <a href="https://facebook.com/cleo.jeab" target='_blank' rel="noopener noreferrer">Facebook</a>
              <a href="https://whatsapp.com" rel="noopener noreferrer">Whatsapp</a>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default App;
