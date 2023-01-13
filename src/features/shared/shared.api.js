import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getAddressList = createAsyncThunk('shared/getAddressList', async (params, { rejectWithValue }) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/addresses`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        // console.log(response)
        return response.data
    } catch (error) {
        console.log(error.response, 'error response')
        return rejectWithValue(error)
    }
})

