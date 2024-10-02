import { useEffect, useState } from 'react';
import './App.css';
import {useCounter} from './hooks/useCounter'
import { useFetch } from './hooks/useFetch';


function App() {
  const {conta,Increment,Decrement,Reset} = useCounter(0);
  const {dataAll} = useFetch("https://pokeapi.co/api/v2/pokemon/");
  const [dataPokemon,setDataPokemon] = useState([]);

  useEffect(()=>{
    if(dataAll.data !== null) {
      setDataPokemon(dataAll.data);
    }
  },[dataAll])

  return (
    <div className="container-contador">
      <h1>Contador</h1>

      <span>{conta}</span>
      <button onClick={() => Increment() }>+1</button>
      <button onClick={() => Decrement() }>-1</button>
      <button onClick={() => Reset() }>Reset</button>
      {dataPokemon.length !== 0 ? dataPokemon.map(
        (poke,key) => {
          return <div key={key}>{poke.name}</div>
        }
      ) : <>no hay pokemons</>}
    </div>
  );
}

export default App;
