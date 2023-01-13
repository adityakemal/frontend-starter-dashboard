import { createSlice } from "@reduxjs/toolkit";
import { getAddressList } from "./shared.api";





const sharedSclice = createSlice({
    name: 'shared',
    initialState: {
        loadingAddress: false,
        addressList: [],

    },
    extraReducers: {
        //get address
        [getAddressList.pending]: (state, action) => {
            state.loadingAddress = true
        },
        [getAddressList.fulfilled]: (state, { payload }) => {
            state.loadingAddress = false
            state.addressList = payload.data
        },
        [getAddressList.rejected]: (state, action) => {
            state.loadingAddress = false
        },
    }

})

export default sharedSclice.reducer