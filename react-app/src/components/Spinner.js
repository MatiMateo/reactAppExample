const Spinner = () => {
    return (
    <div className="inline-block w-8 h-8 text-green-600 border-4 border-green-600 rounded-full spinner-border animate-spin" role="status">
        <span className="hidden">...</span>
    </div>
    )
}

export default Spinner