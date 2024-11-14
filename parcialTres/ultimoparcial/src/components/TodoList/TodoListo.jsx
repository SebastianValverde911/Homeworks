import {TodoItem} from '../todo-item/TodoItem';

export const TodoList = ({ todos=[],onDeleteTodo }) => {
    return(
        <ul className=''>
            {
                todos.map((todo,key)=>{ 
                    return(
                        <TodoItem key={key} todo={todo} onDeleteTodo={onDeleteTodo}/>
                    )
                })
            }
        </ul>
    )
}