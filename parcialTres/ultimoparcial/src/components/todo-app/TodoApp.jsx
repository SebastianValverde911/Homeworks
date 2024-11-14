import React from "react";
import { TodoAdd } from '../todo-add/TodoAdd';
import { TodoList } from "../TodoList/TodoListo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "../../store/TodoReducer";


const TodoApp = () => {
    const dispatch = useDispatch();
    const { info } = useSelector((state) => state.todo);
    let todos = '';
    const handleNewTodo = (e) => {
        dispatch(addTodo(e));
    }

    const handleDeleteTodo = (e) => {
        dispatch(removeTodo(e));
    }

    return(
        <>
            <h1>todoApp: {info.length}, <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos = {info} onDeleteTodo = {handleDeleteTodo}/>
                </div>
                <div className="col-5">
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}

export default TodoApp;