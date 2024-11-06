import {useState} from "react";

export const useForm = (initialState={}) => {
    const [formState, setFormState] = useState( initialState )

    const onInputchange = (evt) => {
        const {name, value } = evt.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialState)
    }

    return {
        ...formState,
        formState,
        onInputchange,
        onResetForm
    }
}