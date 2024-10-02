import {TodoItem} from '../todo-item/TodoItem';

export const TodoList = ({ todos = [] }) => {
    return(
        <ul className=''>
            {
                todos.map((todo,key)=>{ 
                    return(
                        <TodoItem key={key} todo={todo} />
                    )
                })
            }
        </ul>
    )
}