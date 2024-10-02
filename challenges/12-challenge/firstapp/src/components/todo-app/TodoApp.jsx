import React, { useReducer } from "react";
import { TodoAdd } from '../todo-add/TodoAdd';
import { TodoList } from "../TodoList/TodoListo";
import { TodoReducer } from "../todo-reducer/TodoReducer";

const initialState = [
    {
        id: new Date().getTime,
        description:'Hacer los challenge',
        done:false
    }
]

const TodoApp = () => {
    const [todos,dispatchTodo] = useReducer(TodoReducer, initialState);
    
    const handleNewTodo = (todo) => {
        const action = {
            type:'[TODO] ADD TODO',
            payload: todo
        }
        dispatchTodo(action)
    }
    return(
        <>
            <h1>todoApp: 10, <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos = {todos}/>
                </div>
                <div className="col-5">
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}

export default TodoApp;