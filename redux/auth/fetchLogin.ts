import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit"
import { StateType } from "./authSlice"
import { ResponseData } from "./authSlice.types"

export const fetchLogin = createAsyncThunk('auth/fetchLogin', async (data, { rejectWithValue }) => {
    try {
        const response = await fetch('/api/login', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error('Wrong username or password!')
        }

        const parsedResponse = await response.json() as ResponseData

        return parsedResponse

    } catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message)
        }
    }
})