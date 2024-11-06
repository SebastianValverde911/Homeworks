import { createSlice } from "@reduxjs/toolkit";

export const authSlice =createSlice({
    name:'auth',
    initialState: {
        status:'checking',
        uid: null,
        email:null,
        displayName:null,
        photoUrl: null,
        errorMessage:null
    },
    reducers:{
        register: (state, action) => {
            state.status = 'authenticated';
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoUrl = action.payload.photoUrl;
            state.errorMessage = null;
          },
          login: (state, action) => {
            state.status = 'authenticated';
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoUrl = action.payload.photoUrl;
            state.errorMessage = null;
          },
          logout: (state, action) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoUrl = null;
            state.errorMessage = action.payload?.errorMessage || null;
          },
          checkingCredentials: (state) => {
            state.status = 'checking';
          },
     }
});

export const { register, login, logout, checkingCredentials} = authSlice.actions