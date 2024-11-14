import { configureStore } from "@reduxjs/toolkit";
import { TodoReducer } from "./TodoReducer";
import { counterSlice } from "./contadorPokemon";

export const store = configureStore({
    reducer:{
        todo: TodoReducer.reducer,
        counter: counterSlice.reducer
    }
})