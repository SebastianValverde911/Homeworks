export const TodoItem = (tdo) => {
    const handleDelete = (id) => {
        tdo.onDeleteTodo(id)
    }
    return(
        <li className="" >
            <span className="">{tdo.todo.description}</span>
            <button className="" onClick={() => handleDelete(tdo.todo.id)}>Borrar</button>
        </li>
    )
}