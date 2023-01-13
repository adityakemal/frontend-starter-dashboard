import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "./auth.api";



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        error: {},
        // isRegister: false
    },
    reducers: {
        // handleRegister: (state, action) => {
        //     state.isRegister = !state.isRegister
        // },
    },
    extraReducers: {
        [postLogin.pending]: (state, action) => {
            state.loading = true
        },
        [postLogin.fulfilled]: (state, { payload }) => {
            state.loading = false
        },
        [postLogin.rejected]: (state, action) => {
            state.loading = false
        },
    }

})

// export const { handleRegister } = authSlice.actions

export default authSlice.reducer