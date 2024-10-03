import React, { useState } from "react";
import './TodoCalculadora.css';
import ViewNumeros from "../view-numeros/ViewNumeros";
import ViewOperadores from "../view-operadores/ViewOperadores";

const TodoCalculadora = () => {
    const [inputt,setInput] = useState('');

    const clickBtnNumber = (e) => {
        const value = e.target.getHTML();
        setInput((prev) => prev + value);
    }

    const clickBtnEqual = () => {
        try {
            const result = eval(inputt);
            setInput(result.toString());
        } 
        catch {
            setInput('Error');
        }
    }

    const clickClean = () => {
        setInput('');
    }

    return(
        <>
        <div className="container-calculadora">
            <h1>Calculadora - Parcial 2</h1>
            <div className="calculadora">
                <div className="resultados-calculadora">
                    {inputt}
                </div>
                <div className="contenido-calculadora">
                    <div className="numeros">
                        {/* <div className="btnCalc" onClick={(event) => clickBtnNumber(event)}>7</div>
                        <div className="btnCalc" onClick={(event) => clickBtnNumber(event)}>8</div>
                        <div className="btnCalc" onClick={(event) => clickBtnNumber(event)}>9</div>
                        <div className="btnCalc" onClick={(event) => clickBtnNumber(event)}>4</div>
                        <div className="btnCalc" onClick={(event) => clickBtnNumber(event)}>5</div>
                        <div className="btnCalc" onClick={(event) => clickBtnNumber(event)}>6</div>
                        <div className="btnCalc" onClick={(event) => clickBtnNumber(event)}>1</div>
                        <div className="btnCalc" onClick={(event) => clickBtnNumber(event)}>2</div>
                        <div className="btnCalc" onClick={(event) => clickBtnNumber(event)}>3</div>
                        <div className="btnCalc" onClick={(event) => clickBtnNumber(event)}>0</div>
                        <div className="btnCalc" onClick={(event) => clickClean(event)}>C</div>
                        <div className="btnCalc" onClick={(event) => clickBtnEqual(event)}>=</div> */}
                        <ViewNumeros 
                            clickBtnNumber={clickBtnNumber} 
                            clickClean={clickClean}  
                            clickBtnEqual={clickBtnEqual}
                        />
                    </div>
                    <div className="operadores">
                        {/* <div className="btnOpera" onClick={(event)=>clickBtnNumber(event)}>/</div>
                        <div className="btnOpera" onClick={(event)=>clickBtnNumber(event)}>*</div>
                        <div className="btnOpera" onClick={(event)=>clickBtnNumber(event)}>-</div>
                        <div className="btnOpera suma" onClick={(event)=>clickBtnNumber(event)}>+</div> */}
                        <ViewOperadores 
                            clickBtnNumber={clickBtnNumber}
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TodoCalculadora;