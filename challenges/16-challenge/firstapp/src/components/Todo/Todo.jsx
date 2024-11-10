import React, { useState, useEffect } from "react"; 
import { database } from "../../firebase/firebase"; 
import { ref, set, onValue } from "firebase/database"; 

const Todo = () => { 
    const [task, setTask] = useState(""); 
    const [todos, setTodos] = useState([]); 
    useEffect(() => { 
        const todosRef = ref(database, 'todos/'); 
        onValue(todosRef, (snapshot) => { 
            const data = snapshot.val(); 
            const todoList = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : []; setTodos(todoList); 
        }); 
    }, []); 

    const addTodo = () => { 
        const newTodoRef = ref(database, 'todos/' + new Date().getTime()); 
        set(newTodoRef, { task: task, completed: false }); setTask(""); 
    }; 
    return ( 
        <div> 
            <h1>TODO List</h1> 
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Agregar una tarea" /> 
            <button onClick={addTodo}>Agregar</button> 
            <ul> {todos.map(todo => ( <li key={todo.id}>{todo.task}</li> ))} </ul> 
        </div> 
    ); 
}; 

export default Todo;