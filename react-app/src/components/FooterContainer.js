import ContactoFooter from "./ContactoFooter"
import Logo from './logo/Logo'

const FooterContainer = () => {
    return (
        <footer className="relative z-20 grid w-full grid-rows-1 gap-2 p-2 bg-black auto-cols-auto">
            <Logo className='w-full col-span-5 col-start-1 p-2' />
            <ContactoFooter className='relative z-0 flex items-center justify-end w-full col-span-6 col-start-6 p-2 sm:justify-center' />
        </footer>
    )
}

export default FooterContainer