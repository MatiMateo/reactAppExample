import Logo from "./logo/Logo"
import Navbar from "./Navbar"
const NavbarContainer = () => {
    return (
        <header className="relative z-20 grid w-full grid-rows-1 gap-2 p-2 bg-black auto-cols-auto">
            <Logo className='w-full col-span-5 col-start-1 p-2' />
            <Navbar className={"flex items-center justify-end relative z-0 sm:justify-center w-full col-span-6 col-start-6 p-2"} />
        </header>
    )
}

export default NavbarContainer;