import React from "react";

const ViewOperadores = ({clickBtnNumber}) => {
    const datosCalculadoraOperadores = ['/','*','-','+'];
    const funcMap = {
        '+': 'btnOpera suma'
    };

    return(
        <>
             {
                datosCalculadoraOperadores.map((datos,key)=>{
                    const classDiv = funcMap[datos] || 'btnOpera';
                    return (
                        <div key={key} className={classDiv} onClick={(event) => clickBtnNumber(event)}>{datos}</div>
                    );
                })
            }
        </>
    )
}

export default ViewOperadores;