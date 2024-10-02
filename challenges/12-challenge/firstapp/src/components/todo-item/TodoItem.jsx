export const TodoItem = ({todo}) => {
    return(
        <li className="">
            <span className="">{todo.description}</span>
            <button className="">Borrar</button>
        </li>
    )
}