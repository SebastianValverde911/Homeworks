import React, { useCallback, useState } from "react";
import Son from "../son/Son";

const Father = () => {
    const list = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

   /*  const increment = (num) => {
        setValor(valor + num );
    } */

    const increment = useCallback(
        (num) => {
        setValor(valor + num );
    },[])

    return(
        <div>
            <h1>Father</h1>
            <p>Total: {valor}</p>
            <hr />

            {
                list.map((n,idx)=>{
                    return(
                        <Son 
                            key={idx}
                            numero = {n}
                            increment={increment}
                        />
                    )
                })
            }
        </div>
    )
}

export default Father;