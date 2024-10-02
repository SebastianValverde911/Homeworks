import React,{useState} from "react";
import Small from "../small-component/Small";
import { useCounter } from "../hooks/useCounter";
import Father from "../father/Father";
import TodoApp from "../todo-app/TodoApp";


const Memorize = () => {
    const {conta,increment} = useCounter(1);
    const [first, setFirst] = useState(10);

    return(
        <>
            <h1>Memorize</h1>
            <h1>Small: <Small value={conta} /> </h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={() => increment()}
            > +1
 
            </button>

            <button
                className="btn btn-primary"
                onClick={()=>setFirst(first + 1)}
            >
                set Memorize state    
            </button>

            <Father />
            <TodoApp />
        </>
    )
}

export default Memorize;