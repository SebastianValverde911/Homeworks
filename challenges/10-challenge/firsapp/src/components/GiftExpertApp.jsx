import React from "react";
import { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GiftExpertApp = () => {
    const [categories,setCategories] = useState(['First category'])

    const onAddCategory = (category) => {
        setCategories(list => [...list,category]);
    }

    return(
        <>
            <h1>GiftExpert</h1>
            <AddCategory onAddCategory={onAddCategory}/>
            <ol>
                {
                    categories.map(
                        (category, key)=>{
                            return <GifGrid category={category} key={key}/>
                        }
                    )
                }
            </ol>
        </>
    )
}

export default GiftExpertApp