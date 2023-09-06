import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',//'checking','not-authenticaded','authenticated
        uid: null,
        email: null,
        displayName: 'hola',
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticaded';//'checking','not-authenticaded','authenticated
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.name;
            state.photoURL = payload.photoURL;
            state.errorMessage = payload.errorMessage;
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticaded';//'checking','not-authenticaded','authenticated
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.errorMessage = payload?.errorMessage;
            state.photoURL = null;
        },
        checkingCredentials: (state) => {
            state.status = 'checking';
        }
    },
});

export const { login, logout, checkingCredentials } = authSlice.actions;