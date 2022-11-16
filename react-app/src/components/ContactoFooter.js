const ContactoFooter = ({className}) => {
    return (
        <div className={className}>
            <div className="flex flex-col justify-center h-full w-5/6">
                <div className="flex items-center justify-around">
                    <a className="text-white" href="https://instagram.com" rel="noreferrer" target='_blank'>Instagram</a>
                    <a className="text-white" href="https://facebook.com" rel="noreferrer" target='_blank'>Facebook</a>
                    <a className="text-white" href="https://whastapp.com" rel="noreferrer" target='_blank'>Whatsapp</a>
                </div>
                <div className="flex items-center justify-center">
                    <a className="text-white" href="https://instagram.com" rel="noreferrer" target='_blank'>Instagram</a>
                </div>
            </div>
        </div>
    )
}

export default ContactoFooter