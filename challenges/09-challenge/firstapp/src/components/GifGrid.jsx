import React from "react";

const GifGrid = ({category,key}) => {
    return(
        <>
            <li key={key}>{category}</li>
        </>
    )
}

export default GifGrid;