const ItemListContainer = (props) => {
    return (
    <div className={props.className}>
        <a className='z-0 p-4 hover:bg-[#f7dcca] hover:text-black' href="index.html">{props.greeting}</a>
        <a className='z-10 p-4 hover:bg-[#f7dcca] hover:text-black' href="index.html">{props.greeting}</a>
        <a className='z-20 p-4 hover:rounded-b-md hover:bg-[#f7dcca] hover:text-black' href="index.html">{props.greeting}</a>
    </div>
    )
}
export default ItemListContainer;