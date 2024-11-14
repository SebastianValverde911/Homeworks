import { createSlice } from '@reduxjs/toolkit';

const initialState = 
    {
        info:[{
            id: new Date().getTime,
            description:'Hacer los challenge',
            done:false
        }]
    }
;

export const TodoReducer = createSlice({
    name:'todo',
    initialState,
    reducers: {
        addTodo:(state, action) => {
            state.info.push(action.payload);
        },
        removeTodo:(state, action) => {
            state.info = state.info.filter(e => e.id !== action.payload);
        }
    }
})

export const { addTodo,removeTodo } = TodoReducer.actions;