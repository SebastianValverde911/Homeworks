export const TodoAdd = ({onNewTodo}) => {
    const onFormSubmit = (event) => {
       event.preventDefault();
       let entradaInput = event.currentTarget.entrada.value;

       const newTodo = {
            id: new Date().getTime(),
            description:entradaInput,
            done:false
        }
       onNewTodo(newTodo);

       event.currentTarget.entrada.value = '';
    }

    return(
        <form onSubmit={(event)=>onFormSubmit(event)}>
            <input 
                type="text"
                placeholder="Tarea"
                className="form-control"
                name="entrada"
                id="entrada"
            />

            <button 
                type="submit"
                className=""
            >
                Agregar
            </button>
        </form>
    )
}