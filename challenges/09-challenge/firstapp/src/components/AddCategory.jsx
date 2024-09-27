import React from "react";
import { useState } from "react";

const AddCategory = ({onAddCategory}) => {

    const [category, setCategory] = useState('');

    const onSetCategory = (evt) => {
        setCategory(evt.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        onAddCategory(category);
        setCategory('');
    }

    return(
        <>
            <form onSubmit={(event)=>onSubmit(event)}>  
                <input type="text" value={category}
                    onChange={(event)=>{onSetCategory(event)}} />
                
            </form>
        </>
    )
}

export default AddCategory;