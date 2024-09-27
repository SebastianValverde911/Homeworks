import React, { useState } from "react";
import GiftExpertApp from "./GiftExpertApp";

//const categories = ['First Category','Second Category'];
const ComponentApp = () =>  {
    const [text,setText] = useState('');
    const [categories,setCategories] = useState(['First Category','Second Category']);
    
    const handleText = (e) => {
        setText(e.target.value);
    }
    
    const handleAddCategory = ()  => {
        setCategories([...categories,text]);
        setText('');
    }

    return(
        <>
            <h1>GiftExpert</h1>
            
            <input
                value={text}
                onChange={e => handleText(e)} 
            />
            <button
                onClick={()=>handleAddCategory()}
                >Agregar categoria</button>
            <ol>
                {
                    categories.map((category,key)=>{
                        return <li key={key}>{category}</li>
                    })
                }
             </ol>
             <GiftExpertApp /> 
        </>
    )
}

export default ComponentApp;