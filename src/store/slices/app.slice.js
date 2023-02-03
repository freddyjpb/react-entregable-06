import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        isLoading: false,
        loginMessage: ""
    },
    reducers: {
        setIsLoading: (state, { payload }) => {
            state.isLoading = payload
        },
        setLoginMessage: (state, { payload }) => {
            state.loginMessage = payload
        }
    }
})

export const { setIsLoading, setLoginMessage } = appSlice.actions;

export default appSlice.reducer;