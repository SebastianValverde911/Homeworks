import React, { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [dataAll, setDataAll] = useState({
        data:null,
        isLoading: true,
        hasError:null
    })

    const getData = async() => {
        const api = await fetch(url);
        const data = await api.json();

        setDataAll({
            data:data.results,
            isLoading:false,
            hasError:null
        })

    }

    useEffect(()=> {
        getData();
    },[url])

    return {
        dataAll
    }

}