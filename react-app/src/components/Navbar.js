const Navbar = ({children, className}) => {
    return (
      <div className={className}>
        <nav className="flex items-center justify-end w-full text-white">
          {children}
        </nav>
      </div>
    )
}

export default Navbar;