import React from "react";

const ViewNumeros = ({clickBtnNumber,clickClean,clickBtnEqual}) => {
    const datosCalculadora = ['7','8','9','4','5','6','1','2','3','0','C','='];
    const funcMap = {
        'C': clickClean,
        '=': clickBtnEqual,
    };
    return(
        <>
            {
                datosCalculadora.map((datos,key)=>{
                    const funclick = funcMap[datos] || clickBtnNumber;
                    return (
                        <div key={key} className="btnCalc" onClick={(event) => funclick(event)}>{datos}</div>
                    );
                })
            }
            
        </>
    )
}

export default ViewNumeros;