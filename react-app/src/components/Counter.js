import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(1)
    const clickHandlerPlus = () => {
        setCounter(counter + 1)
    }
    const clickHandlerMinus = () => {
        setCounter(counter - 1)
    }
    return (
        <div className="flex flex-row p-2">
            <div className="p-2">
                <button  type="button" onClick={clickHandlerMinus}> - </button>
            </div>
            <div className="p-2">{counter}</div>
            <div className="p-2">
                <button type="button" onClick={clickHandlerPlus}> + </button>
            </div>
        </div>

    )
}

export default Counter;