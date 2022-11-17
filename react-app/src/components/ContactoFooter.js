import {FiInstagram} from '@react-icons/all-files/fi/FiInstagram.esm'
import {FiFacebook} from '@react-icons/all-files/fi/FiFacebook.esm'
import {FaWhatsapp} from '@react-icons/all-files/fa/FaWhatsapp.esm'
import {FiMapPin} from '@react-icons/all-files/fi/FiMapPin.esm'
const ContactoFooter = ({className}) => {
    return (
        <div className={className}>
            <div className="flex flex-col justify-center w-5/6 h-full">
                <div className="flex items-center justify-around">
                    <a className="p-2 text-white" href="https://www.instagram.com/cleo_tienda_ok" rel="noreferrer" target='_blank'><FiInstagram className='w-12 h-12' /></a>
                    <a className="p-2 text-white" href="https://www.facebook.com/cleo.jeab" rel="noreferrer" target='_blank'><FiFacebook className='w-12 h-12' /></a>
                    <a className="p-2 text-white" href="https://whastapp.com" rel="noreferrer" target='_blank'><FaWhatsapp className='w-12 h-12' /></a> {/*De momento no se agrega número telefónico a pesar de ser proyecto real*/}
                </div>
                <div className="w-full">
                    <a className="flex items-center justify-around p-2 text-white" href="https://goo.gl/maps/KjHrLA5zPULYBFHY9" rel="noreferrer" target='_blank'><FiMapPin className='w-6 h-6' /><span>Arenales 659 - Azul - Buenos Aires</span></a>
                </div>
            </div>
        </div>
    )
}

export default ContactoFooter