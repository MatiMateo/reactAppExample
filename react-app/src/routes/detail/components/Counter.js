import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const clickHandlerPlus = () => {
        setCounter(counter + 1)
    }
    const clickHandlerMinus = () => {
        setCounter(counter > 0 ? counter - 1 : counter)
    }
    return (
        <div className="flex flex-row p-2">
            <div className="p-2">
                <button type="button" onClick={clickHandlerMinus}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" /></svg>
                </button>
            </div>
            <div className="p-2">{counter}</div>
            <div className="p-2">
                <button type="button" onClick={clickHandlerPlus}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </button>
            </div>
        </div>

    )
}

export default Counter;