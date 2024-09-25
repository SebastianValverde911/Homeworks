import React from "react";
import { useState } from "react";

const SecondApp = ({value}) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1);
    }
    
    const handleSubstract = () => {
        setCounter(counter - 1);
    }

    const handleReset = () => {
        setCounter(value);
    }

    return(
        <>
            <h1>Counter</h1>
            <button onClick={() => handleSubstract()}>-1</button>
            <span>{counter}</span>
            <button onClick={() => handleAdd()}>+1</button>
            <button onClick={()=> handleReset()}>Reset</button>
        </>
    )
}

export default SecondApp;