const Spinner = () => {
    return (
    <div className="inline-block w-8 h-8 text-green-300 border-4 rounded-full spinner-border animate-spin" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
    )
}

export default Spinner