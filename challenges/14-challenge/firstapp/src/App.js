import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment, decrement, reset, setCounter  } from './store/Counterslice';
import { useState } from 'react';

function App() {
  const {counter} = useSelector(state => state.counter);
  const dispatch = useDispatch();
  const [number,setNumber] = useState();

  const handleInput = (e) => {
    setNumber(parseInt(e.target.value));
  }

  const handleButton = (e) => {
    e.preventDefault();
    if(e.target.num.value !== '') {
      dispatch(setCounter(parseInt(e.target.num.value)));
      setNumber('');
    }
  }
  return (
    <div className="container-app">
      <h1>app</h1>
      <hr />
      <span>Counter is: {counter} </span>
      <button
        onClick={()=>dispatch(increment())}>+1</button>
      <button
        onClick={()=>dispatch(decrement())}>-1</button>
      <button
        onClick={()=>dispatch(reset())}>Reset</button>
      <hr />
      <form onSubmit={handleButton}>
        <input
            type="text"
            name="num"
            id="num"
            value={number}
            onChange={(e) =>handleInput(e) }
        />

        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}

export default App;
