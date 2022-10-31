const ContactForm = () => {
    const onSubmitHandler = (ev) => {
        console.log(ev)
    }
    return (
        <form className="flex flex-col w-1/2" onSubmit={onSubmitHandler}>
            <div className="flex items-center justify-around p-2">
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" id="name" />
            </div>
            <div className="flex items-center justify-around p-2">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div className="flex items-center justify-around p-2">
                <label htmlFor="email">Repetir Email</label>
                <input type="email" name="email" id="email" />
            </div>
        </form>
    )
}

export default ContactForm