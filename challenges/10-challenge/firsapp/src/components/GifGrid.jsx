import React,{ useState,useEffect } from "react";
import './Gifgrid.css'

const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Ns4NdhIX2lHEqu9xdgsozNuiNyuy937q&q=${category}&limit=2&offset=0&reting=g&lang=en`;
    const resp = await fetch(url)
    const {data} = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs
}

const GifGrid = ({category}) => {
    const [printImages,setPrintImages] = useState({
        id:"",
        title:"",
        url:""
    })

    useEffect(()=>{
        const fetchGifs = async () => {
            const gifs = await getGifs(category)
            setPrintImages(gifs);
        }
        fetchGifs();
    },[category]) 
    
    return(
        <>
            <h3 className="title" >{category}</h3>
            <p>Hello world</p>
            <div>
                {printImages.length > 0 ?(
                printImages.map(image => (
                    <div key={image.id}>
                        <h4>{image.title}</h4>
                        <img src={image.url} alt={image.title} />
                    </div>
                ))) : (<p>No se encontraron GIFS</p>)}
            </div>
        </>
    )
}

export default GifGrid;