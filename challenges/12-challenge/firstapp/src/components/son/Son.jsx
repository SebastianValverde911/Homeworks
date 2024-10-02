import React,{memo} from "react";

const Son = memo(
    ({numero, increment}) => {
        console.log('again reloaded...',numero);
        return(
            <button 
                className="btn btn-primary mr-3"
                onClick={()=>{increment(numero)}}
            >
                {numero}
            </button>
        );
    }
)

export default Son;