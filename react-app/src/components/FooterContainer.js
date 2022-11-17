import ContactoFooter from "./ContactoFooter"
import Logo from './logo/Logo'

const FooterContainer = () => {
    return (
        <footer className="relative z-20 grid w-full grid-cols-1 grid-rows-2 gap-2 p-2 bg-black sm:grid-rows-1 auto-cols-auto">
            <Logo className='w-full row-start-1 p-2 place-content-center sm:col-span-5 sm:col-start-1' />
            <ContactoFooter className='relative z-0 flex items-center justify-center w-full row-start-2 p-2 sm:row-start-1 sm:col-span-6 sm:col-start-6' />
        </footer>
    )
}

export default FooterContainer