const ListItem = (props) => {
    return (
    <div className={props.className}>
        <a className='z-0 p-4 hover:bg-[#f7dcca] hover:text-black' href="../../public/index.html">Item 1</a>
        <a className='z-10 p-4 hover:bg-[#f7dcca] hover:text-black' href="../../public/index.html">Item 2</a>
        <a className='z-20 p-4 hover:rounded-b-md hover:bg-[#f7dcca] hover:text-black' href="../../public/index.html">Item 3</a>
    </div>
    )
}
export default ListItem;