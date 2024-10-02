import React, { useState } from "react";
import './Contador.css';

const Contador = ({value}) => {

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
        <div className="container-contador">
            <h1>Contador</h1>

            <span>{counter}</span>
            <button onClick={() => handleAdd() }>+1</button>
            <button onClick={() => handleSubstract() }>-1</button>
            <button onClick={() => handleReset() }>Reset</button>
        </div>
    );
}

export default Contador;