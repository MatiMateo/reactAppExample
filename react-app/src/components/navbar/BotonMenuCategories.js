const BotonMenuCategories = ({onClick, type, className}) => {
    return (
        <button onClick={onClick} type={type} className={className}>
            <span>
                <svg className="items-center w-4 h-6 sm:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
             </span>
            Categorías 
              <span>
                <svg className="items-center hidden w-4 h-6 sm:flex" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </span>
        </button>
    )
}

export default BotonMenuCategories;