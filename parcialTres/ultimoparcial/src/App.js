import logo from './logo.svg';
import './App.css';
import TodoApp from './components/todo-app/TodoApp';
import DashboardPokemon from './components/pokemon/DashboardPokemon';

function App() {
  return (
  <>
    <h4>a. Create a new component, transform the useReducer - Challenge and the make i works by using Redux.</h4>
    <TodoApp />

    <hr />

    <h4>Create a new component, Use the pokemon, challenge, and then make it works by using RTK</h4>
    <DashboardPokemon />
  </>
  );
}

export default App;
