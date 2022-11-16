import ContactoFooter from "./ContactoFooter"
import Logo from "./navbar/logo/Logo"

const Footer = ({className}) => {
    return (
        <footer className={className}>
            <Logo className='col-span-4 col-start-1 row-span-4 row-start-1' />
            <ContactoFooter className='col-start-6 col-end-12 row-span-6 row-start-1'/>
        </footer>
    )
}

export default Footer