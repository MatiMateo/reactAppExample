const Navbar = ({children, className}) => {
    return (
      <div className={className}>
        <nav id='lateral' className="flex items-center w-full text-white">
          {children}
        </nav>
      </div>
    )
}

export default Navbar;