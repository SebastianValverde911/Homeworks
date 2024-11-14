import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from "../../store/contadorPokemon";
import { useFetch } from "../../hooks/useFetch";

const DashboardPokemon = () => {
    const {counter} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    const [dataPokemon,setDataPokemon] = useState([]);
    const {dataAll} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    useEffect(() => {
        console.log(dataAll);
        if(dataAll.data !== null && dataAll.data !== undefined) {
            setDataPokemon([dataAll.data]);
        }
      }, [counter]);

    return(
        <>
            Aqui se ven los nombres de los pokemones
            <br></br>
            <span>Pokemon numero: {counter} </span>
            <button
                onClick={()=>dispatch(increment())}>+1</button>
            <button
                onClick={()=>dispatch(decrement())}>-1</button>
            <br></br>
            {dataPokemon.length !== 0 ? dataPokemon.map(
                (poke,key) => {
                return <div key={key}>Nombre pokemon: <h3>{poke.name}</h3> este es el peso del pokemon: <h3>{poke.weight}</h3> y por ultimo la base experiencia <h3>{poke.base_experience}</h3></div>
                }
            ) : <>no hay pokemons</>}
            
        </>
    )
}

export default DashboardPokemon;