import Portada from "./components/Portada";
const Home = ({className}) => {
    return (
        <body className={className}>
            <div className="h-[100vh]">
                <Portada className='w-screen h-full px-2 my-2 bg-center bg-cover opacity-70 bg-img-portada'>
                    <div className="flex flex-col items-center justify-center h-full">Soy la portada</div>
                </Portada>
            </div>
        </body>
    )
}

export default Home;